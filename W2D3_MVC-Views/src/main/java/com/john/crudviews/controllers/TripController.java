package com.john.crudviews.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.john.crudviews.models.Trip;
import com.john.crudviews.services.TripService;

@Controller
public class TripController {
	
	@Autowired
	private TripService tripService;
	
//	simple redirect
	@GetMapping("/")
	public String tripRedirect() {
		return "redirect:/trips";
	}
	
//	READ ALL PAGE
//	GET: /trips
	@GetMapping("/trips")
	public String displayDashboardPage(Model model) {
//		1. get all the trips from the service
		List<Trip> tripList = tripService.allTrips();
//		2. store it in the Model model to pass it to the jsp
		model.addAttribute("tripList", tripList);
		return "tripDashboard.jsp";
	}
	
//	READ ONE - DETAILS PAGE
//	GET /trips/3
	@GetMapping("/trips/{id}")
	public String displayDetailsPage(
			@PathVariable("id") Long id,
			Model model) {
//		1. get the trip from the service with the id
		Trip oneTrip = tripService.findTrip(id);
//		2. pass it to the jsp with Model model
		model.addAttribute("oneTrip", oneTrip);
		return "tripDetails.jsp";
	}
	
}