package com.john.onetomany.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.john.onetomany.models.Trip;
import com.john.onetomany.models.User;
import com.john.onetomany.services.TripService;
import com.john.onetomany.services.UserService;

import jakarta.validation.Valid;

@Controller
public class HomeController {

	@Autowired
	private UserService userService;
	@Autowired
	private TripService tripService;

//	simple redirect
	@GetMapping("/")
	public String indexRedirect() {
		return "redirect:/trips";
	}

//	GET /trips === DASHBOARD ===
	@GetMapping("/trips")
	public String desplayTripsDashboard() {
		return "tripDashboard.jsp";
	}

//	============= USER ROUTES ================
//	ADD A USER
//	GET /users/new
	@GetMapping("/users/new")
	public String renderUserCreateForm(
			@ModelAttribute("newUser") User newUser) {
		return "addUser.jsp";
	}

//	POST /users/new
	@PostMapping("/users/new")
	public String processUserForm(
			@Valid 
			@ModelAttribute("newUser") User newUser, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "addUser.jsp";
		} else {
			userService.createUser(newUser);
			return "redirect:/users/new"; // get
		}
	}

//	============= TRIP ROUTES ================
	
//	GET /trips/new
	@GetMapping("/trips/new")
	public String renderTripCreateForm(
			@ModelAttribute("newTrip") Trip newTrip, 
			Model model) {
//		need to pass all the users to pick!
//		List<User> userList = userService.allUsers();
		model.addAttribute("userList", userService.allUsers());
		return "addTrip.jsp";
	}
	
//	POST /trips/new
	@PostMapping("/trips/new")
	public String processTripForm(
			@Valid 
			@ModelAttribute("newTrip") Trip newTrip,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("userList", userService.allUsers());
			return "addTrip.jsp";
		} else {
			tripService.createTrip(newTrip);
			return "redirect:/trips";
		}
	}
	
	
	
	
	
	
	
}
