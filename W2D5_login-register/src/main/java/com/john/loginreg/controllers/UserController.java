package com.john.loginreg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.john.loginreg.models.LoginUser;
import com.john.loginreg.models.User;
import com.john.loginreg.services.UserService;

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
		return "logreg.jsp";
	}
	
//	REGISTER USER
	@PostMapping("/register")
    public String register(
    		@Valid 
    		@ModelAttribute("newUser") User newUser, 
            BindingResult result, 
            Model model, 
            HttpSession session) {
        
//        intercepting the newUser and the errors 'result'
		User registeredUser = userServ.register(newUser, result);
        
        if(result.hasErrors()) {
            return "logreg.jsp";
        } else {
//        	for success store the user id in session
        	session.setAttribute("userId", registeredUser.getId());
        	session.setAttribute("userName", registeredUser.getUserName());       	
            return "redirect:/dashboard";
        }     
    }
	
	@GetMapping("/dashboard")
	public String renderDashboardPage() {
		return "dashboard.jsp";
	}
	
	
	
	
	
	
	
	
	
	

}
