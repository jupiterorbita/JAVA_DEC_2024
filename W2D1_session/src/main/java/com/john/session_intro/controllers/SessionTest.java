package com.john.session_intro.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class SessionTest {
	
	@GetMapping("/")
	public String home(HttpSession session) {
		session.setAttribute("name", "Waldo");
		return "index.jsp";
	}
	
	@GetMapping("/other")
	public String otherPage(HttpSession sesh) {
		//		if something exists in session
		if (sesh.getAttribute("name") == null) {
			return "redirect:/";
		}
//		how to extract or grab something in session?
		String sessionName = (String) sesh.getAttribute("name");
		System.out.println(sessionName);
		// change session variable
		sesh.setAttribute("name", "someone else");
		return "other.jsp";
	}
	
	
//	RENDER THE FORM PAGE
	@GetMapping("/form")
	public String formPage() {
		return "form.jsp";
	}
	
//	PROCESS the FORM DATA - METHOD
	@PostMapping("/processForm")
	public String processFormData(
			@RequestParam("email") String email,
			@RequestParam("password") String pass,
			HttpSession session
			) {
		System.out.println(email + " : " + pass);
		session.setAttribute("email", email);
		session.setAttribute("password", pass);
		return "redirect:/results";
	}
	
	
//	RENDER the results
	@GetMapping("/results")
	public String results() {
		return "results.jsp";
	}
	
	
	
	
	
	
	
	

}
