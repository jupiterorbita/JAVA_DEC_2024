package com.john.flash_messages.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;


@Controller
public class FormController {
	
	@GetMapping("/")
	public String homePage() {
		return "form.jsp";
	}
	
	@PostMapping("/getFormData")
	public String getFormDataMethod(
			@RequestParam("name") String name,
			@RequestParam("age") Integer age,
			@RequestParam("productId") Integer productId,
			HttpSession session,
			RedirectAttributes flash
			) {
		System.out.println(name + " : " + age + " : " + productId);
		
		session.setAttribute("name", name);
		session.setAttribute("age", age);
		
		if (productId == 114) {
//			do stuff
		}
 		
//		check age and redirect 
		if (age < 18) {
			flash.addFlashAttribute("ageError", "you are not wise enought");
			return "redirect:/";
		}
		
		flash.addFlashAttribute("success", "thanks for submitting");
		return "redirect:/display";
	}
	
	
	@GetMapping("/display")
	public String displayPage() {
		return "display.jsp";
	}
	

}









