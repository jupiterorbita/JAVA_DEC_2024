package com.john.beltreview.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.john.beltreview.models.LoginUser;
import com.john.beltreview.models.User;
import com.john.beltreview.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

	@Autowired
	private UserService userServ;

	@GetMapping("/")
	public String index(Model model) {
//		// Bind empty User and LoginUser objects to the JSP
		// to capture the form input
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "logreg.jsp";
	}

//	REGISTER USER
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {

//        intercepting the newUser and the errors 'result'
		User registeredUser = userServ.register(newUser, result);

		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "logreg.jsp";
		} else {
//        	for success store the user id in session
			session.setAttribute("userId", registeredUser.getId());
			session.setAttribute("userName", registeredUser.getUserName());
			return "redirect:/trips";
		}
	}

//	LOGIN
	@PostMapping("/login")
	public String login(@Valid 
					    @ModelAttribute("newLogin") LoginUser newLogin, 
					    BindingResult result,
					    HttpSession session, Model model) {

		User user = userServ.login(newLogin, result);
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "logreg.jsp";
		} else {
//	        for success store the user id in session
			session.setAttribute("userId", user.getId());
			session.setAttribute("userName", user.getUserName());
			return "redirect:/trips";
		}

	}


	
	@GetMapping("/logout")
	public String logoutMethod(HttpSession sesh, RedirectAttributes flash) {
		sesh.invalidate();
		flash.addFlashAttribute("goodbye", "thanks for visiting, see you soon!");
		return "redirect:/";
	}

}
