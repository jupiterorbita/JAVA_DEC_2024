package com.john.hello_views.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Demo {
	
	@GetMapping("/")
	public String dummy(Model model) {
		
		ArrayList<Ninja> ninjaList = new ArrayList<Ninja>();
		ninjaList.add(new Ninja("bob"));
		ninjaList.add(new Ninja("waldo"));
		
		System.out.println(ninjaList);
		
		model.addAttribute("listOfNinjas", ninjaList);
		
		
		
		return "dummy.jsp";
		
		
	}

}
