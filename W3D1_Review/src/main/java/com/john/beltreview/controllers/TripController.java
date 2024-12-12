package com.john.beltreview.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.john.beltreview.models.Trip;
import com.john.beltreview.models.User;
import com.john.beltreview.repositories.TripRepository;
import com.john.beltreview.services.TripService;
import com.john.beltreview.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class TripController {

	@Autowired
	private TripService tripServ;

	@Autowired
	private UserService userServ;
	
//	TODO: READ ONE

	@GetMapping("/trips")
	public String renderDashboardPage(HttpSession sesh,
			Model model) {
//		route guard
//		check if userId exists
		if (sesh.getAttribute("userId") == null) {
			return "redirect:/";
		}
		
//		get the currently logged in users' trips
		Long userId = (Long) sesh.getAttribute("userId");
//		get the one user from the db
		User thisUser = userServ.findUser(userId);
		model.addAttribute("thisUser", thisUser);
		
//		get all the trips
		List<Trip> allTrips = tripServ.allTrips();
		model.addAttribute("allTrips", allTrips);
	

		return "dashboard.jsp";
	}

//	CREATE PAGE
//	GET /trips/new
	@GetMapping("/trips/new")
	public String renderCreatePage(@ModelAttribute("newTrip") Trip newTrip) {
		return "addTrip.jsp";
	}

//  CREATE METHOD
//  POST /trips/new
	@PostMapping("/trips/new")
	public String processCreate(
			@Valid 
			@ModelAttribute("newTrip") Trip newTrip, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "addTrip.jsp";
		} else {
			tripServ.createTrip(newTrip);
			return "redirect:/trips";
		}
	}
	
//	DELETE
	@DeleteMapping("/trips/{id}")
	public String deleteMethod(@PathVariable("id") Long id) {
		tripServ.deleteTripById(id);
		return "redirect:/trips";
	}
	
	
//	UPDATE PAGE
	@GetMapping("/trips/{id}/edit")
	public String renderEditPage(@PathVariable("id") Long id,
			Model model) {
//		get the trip to edit
		Trip thisTrip = tripServ.findTrip(id);
//		pass thisTrip to the jsp
		model.addAttribute("thisTrip", thisTrip);
		return "edit.jsp";
	}
	
	
//	UPDATE PAGE
	@PutMapping("/trips/{id}/edit")
	public String editMethod(
			@Valid @ModelAttribute("thisTrip") Trip thisTrip, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			tripServ.updateTrip(thisTrip);
			return "redirect:/trips";
		}
	}
	
	
//	============================
//	====     MANY To MANY ======
//	============================
//	ADD a Trip to a User
//	ADD a user to a Trip
	@GetMapping("/addToLikedTrips/{id}")
	public String addUserToLikedTrips(
			@PathVariable("id") Long id,
			HttpSession s) {
		
//		1. get the current user logged in
		Long userId = (Long) s.getAttribute("userId");
//		2. find the user from the DB
		User u = userServ.findUser(userId);
		
//		get the trip now
		Trip t = tripServ.findTrip(id);
		
//		add the user to the trips' likers
		t.getLikers().add(u);
//		OR
//		u.getLikedTrips().add(t);
		
//		DONT FORGET TO SAVE TO THE DB!!!!!
		tripServ.updateTrip(t);
		
		return "redirect:/trips";
		
	}
	
	
//	--- REMOVE user from Trips ---
	@GetMapping("/removeUserFromLikedTrips/{tripId}")
	public String removeUserFromLikedTrips(
			@PathVariable("tripId") Long id,
			HttpSession s) {
		
//		grab the user
//		1. get the current user logged in
		User u = userServ.findUser((Long) s.getAttribute("userId"));		
		
//		get the trip
		Trip t = tripServ.findTrip(id);
		
		t.getLikers().remove(u);
		
//		SAVE
		tripServ.updateTrip(t);
		
		return "redirect:/trips";
		
	}
	
//	========= extra ==========
	// show trips that have likes
	@GetMapping("/tripsThatHaveLikes")
	public String renderTripsThatHaveLikes(
			Model model) {
		model.addAttribute("tripsWithLikes", tripServ.allTripsThatHaveLikers());
		return "trips_with_likes.jsp";
	}
	
	
//	page that shows the trips that a user
//	has liked
//	/tripsUserLiked/${liker.id }
	@GetMapping("/tripsUserLiked/{id}")
	public String renderUserLikedTrips(
			@PathVariable("id") Long id,
			Model m) {
		
//		get the user
		User thisUser = userServ.findUser(id);
		m.addAttribute("thisUser", thisUser);
		
		return "userLikedTrips.jsp";
	}
	
	
	
	
	

}
