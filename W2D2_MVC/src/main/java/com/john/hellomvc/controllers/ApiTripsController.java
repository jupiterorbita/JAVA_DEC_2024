package com.john.hellomvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.john.hellomvc.models.Trip;
import com.john.hellomvc.services.TripService;

@RestController
@RequestMapping("/api")
public class ApiTripsController {

	@Autowired
	TripService tripService;
	
//	add the service as a dependency
//	private final TripService tripService;
//	
//	public ApiTripsController(TripService tripService) {
//		this.tripService = tripService;
//	}
//	------------------
	
//	READ ALL
//	GET /api/trips ---> all the trips []
	@GetMapping("/trips")
	public List<Trip> getAllTrips() {
		return tripService.allTrips();
	}
	
//	CREATE - POST (process form)
//	POST /api/trips ----> create a trip
//	BEFORE
/*	@PostMapping("/trips")
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
//	AFTER
//	POST /api/trips
	@PostMapping("/trips")
	public Trip addTrip(@ModelAttribute("newTrip") Trip newTrip ) {
		System.out.println(newTrip.getDescription());
		return tripService.createTrip(newTrip);
	}
	
//	READ ONE
//	GET /api/trips/2
	@GetMapping("/trips/{id}")
	public Trip oneTrip(@PathVariable("id") Long id) {
		Trip trip = tripService.findTrip(id);
		return trip; 
	}
	
//	UPDATE
//	PUT /api/trips/2 + object in the body
//	@PutMapping("/trips/{id}")
//	public Trip editTrip(
//			@RequestParam("location") String location,
//			@RequestParam("tripLength") Integer tripLength,
//			@RequestParam("description") String description,
//			@RequestParam("owner") String owner,
//			@PathVariable("id") Long id)
//	{
//		
////		1. get the trip from the service
//		Trip oneTrip = tripService.findTrip(id);
//		
////		2. update all the attributes
//		oneTrip.setLocation(location);
//		oneTrip.setTripLength(tripLength);
//		oneTrip.setDescription(description);
//		oneTrip.setOwner(owner);
//		
////		3. save the modified object
//		return tripService.updateTrip(oneTrip);
//	}
	
//	shorter update
	@PutMapping("/trips/{id}")
	public Trip editTrip2(@ModelAttribute("oneTrip") Trip oneTrip) {
		System.out.println(">>>>>>>>" + oneTrip.getId());
		return tripService.updateTrip(oneTrip);
	}
	
	
//	DELETE
//	DELETE /trips/2
	@DeleteMapping("/trips/{id}")
	public void deleteTrip(@PathVariable("id") Long id) {
		tripService.deleteTrip(id);
	}
	
	
	
	
	

}
