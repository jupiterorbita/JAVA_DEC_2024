package com.john.hello_views.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class Home {

	@RequestMapping("/")
	public String indexPage(Model bucket) {
		String firstName = "<h1>bob</h1><script>alert('you have been hacked')</script>";
		bucket.addAttribute("name", firstName);
		bucket.addAttribute("age", 33);
		return "index.jsp";
	}
	
	@GetMapping("/cool")
	public String coolPage(Model model) {
		ArrayList<String> names = new ArrayList<String>();
		names.add("Aldrin");
		names.add("Omar");
		names.add("John");
		System.out.println(names);
		
		model.addAttribute("names", names);
		return "cool.jsp";
	}
	
	
	
	
	
	
	
}
