package com.john.hellomvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.john.hellomvc.models.Trip;
import com.john.hellomvc.services.TripService;

@Controller
@RequestMapping("/trips")
public class TripController {
	
//	bring the service here
	@Autowired
	TripService tripServ;
	
	@GetMapping("")
	public String home(Model model) {
		List<Trip> allTrips = tripServ.allTrips();
		
		model.addAttribute("trips", allTrips);
		return "index.jsp";
	}
	
	
	
	
	
	
	

}
