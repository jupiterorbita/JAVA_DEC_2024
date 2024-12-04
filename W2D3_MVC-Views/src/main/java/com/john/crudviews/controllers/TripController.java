package com.john.crudviews.controllers;

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

import com.john.crudviews.models.Trip;
import com.john.crudviews.services.TripService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


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
	
	
//	CREATE PAGE
//	GET /trips/new
	@GetMapping("/trips/new")
	public String displayCreateForm(
			@ModelAttribute("newTrip") Trip newTrip,
			Model model) {
		
		List<Trip> allTrips = tripService.allTrips();
		model.addAttribute("allTrips", allTrips);
		
		return "newTrip.jsp";
	}
	
//	CREATE METHOD
//	POST /trips/new
	@PostMapping("/trips/new")
	public String processCreateForm(
			@Valid 
			@ModelAttribute("newTrip") Trip newTrip, 
			BindingResult result) {
		
		if (result.hasErrors()) {
			return "newTrip.jsp";
		} else {
			tripService.createTrip(newTrip);
			return "redirect:/trips";
		}

	}

	
//	UPDATE 
//	GET /trips/3/edit
	@GetMapping("/trips/{id}/edit")
	public String renderEditPage(
			@PathVariable("id") Long id, Model model) {
		
//		1. get the id from path
//		2. get the trip from the service with the id
		Trip oneTrip = tripService.findTrip(id);
//		3. pass it to the jsp with model model to be inside the form
		model.addAttribute("oneTrip", oneTrip);
		
		return "editTrip.jsp";
	}
	
	
// EDIT METHOD
	@PutMapping("trips/{id}/edit")
	public String updateTripMethod(
			@Valid @ModelAttribute("oneTrip") Trip oneTrip,
			BindingResult result) {
		
		
		if (result.hasErrors()) {
			return "editTrip.jsp";
		} else {
			tripService.updateTrip(oneTrip);
			return "redirect:/trips/" + oneTrip.getId();
		}
	}
	
	
//	DELETE
	@DeleteMapping("/trips/{id}/delete")
	public String deleteTripMethod(
			@PathVariable("id") Long id) {
		
		tripService.deleteTrip(id);
		
		return "redirect:/trips";
	}
	
	
	
	
	
	
	
	
	
	
}