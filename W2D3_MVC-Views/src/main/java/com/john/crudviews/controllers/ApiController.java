package com.john.crudviews.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.john.crudviews.models.Trip;
import com.john.crudviews.services.TripService;

@RestController
@RequestMapping("/api")
public class ApiController {
	
//	add the service as a dependency
	private final TripService tripService;
	
	public ApiController(TripService tripService) {
		this.tripService = tripService;
	}
	
//-----------------------	
	
//	READ ALL 
//	GET: /api/trips  ----> all trips
	@GetMapping("/trips")
	public List<Trip> getAllTrips() {
		return tripService.allTrips();
	}
	
	
//	CREATE - Process of create
//	POST: /api/trips ---> create a trip
	@PostMapping("/trips")
	public Trip addTrip(
			@ModelAttribute("newTrip") Trip newTrip
			) {
		System.out.println(newTrip.getLocation());
		return tripService.createTrip(newTrip);
		
	}
	
	/* BEFORE - CREATE
	@PostMapping("/trips")
	public Trip addTrip(
			@RequestParam("location") String location,
			@RequestParam("tripLength") Integer tripLength,
			@RequestParam("description") String description,
			@RequestParam("owner") String owner
			) {
		
		Trip newTrip = new Trip(location, tripLength, description, owner);
		return tripService.createTrip(newTrip);
		
	}
	*/
	
//	READ ONE
//	GET: /api/trips/2
	@GetMapping("/trips/{id}")
	public Trip oneTrip(@PathVariable("id") Long id) {
		Trip trip = tripService.findTrip(id);
		return trip;
	}
	
//	UPDATE - must have an 'id' in path
//	PUT: /api/trips/2   ---> update the body
	@PutMapping("/trips/{id}")
	public Trip editTrip(@ModelAttribute("oneTrip") Trip oneTrip) {
		return tripService.updateTrip(oneTrip);
	}
	
	/* BEFORE - UPDATE
	@PutMapping("/trips/{id}")
	public Trip editTrip(
			@PathVariable("id") Long id,
			@RequestParam("location") String location,
			@RequestParam("tripLength") Integer tripLength,
			@RequestParam("description") String description,
			@RequestParam("owner") String owner
			) {
		
//		1. get the trip from the service
		Trip oneTrip = tripService.findTrip(id);
		
//		2. update all attributes
		oneTrip.setLocation(location);
		oneTrip.setDescription(description);
		oneTrip.setTripLength(tripLength);
		oneTrip.setOwner(owner);
		
//		3. save it
		return tripService.updateTrip(oneTrip);
	}
	*/
	
	
//	DELETE
//	DELETE: /trips/3
	@DeleteMapping("/trips/{id}")
	public void deleteTrip(@PathVariable("id") Long id) {
		tripService.deleteTrip(id);
	}
	
	
}

