package com.john.hellospring.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api")
public class HomeController {

	@RequestMapping("")
	public String coolHome() {
		return "hello ninjas";
	}
	
	@RequestMapping("/cool")
	public String theCoolRoute() {
		return "this is the cool route";
	}
	
//	== QUERY PARAMETERS ==
//	localhost:8080/search?q=some text here
	@RequestMapping("/search")
	public String searchSomthing(@RequestParam(value="q", required = false, defaultValue = "hi there!") String someSearchVar) {
		return "you searched for " + someSearchVar;
	}
	
//	== PATH VARIABLES ==
	@RequestMapping("/find/{name}/{age}")
	public String findPage(@PathVariable("age") int age, 
						   @PathVariable("name") String name) {
		System.out.println("name is: " + name);
		System.out.println("age is: " + age);
		if (age >= 21) {
			return "hello " + name + " you are " + age + " years old and you may pass!";
		} else {
			return "sorry " + name + " you must be over 21 to get the quest";
		}
	}
	
}
