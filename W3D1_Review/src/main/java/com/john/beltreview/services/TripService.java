package com.john.beltreview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.john.beltreview.models.Trip;
import com.john.beltreview.repositories.TripRepository;

@Service
public class TripService {
	
//	Dependency Injection - constructor way
	private final TripRepository tripRepo;
	
	public TripService(TripRepository tripRepo) {
		this.tripRepo = tripRepo;
	}
	
//	READ ALL
	public List<Trip> allTrips() {
//		return tripRepo.findAll();
		return tripRepo.findAllByOrderByLocation();
	}
	
	public List<Trip> allTripsThatHaveLikers() {
		return tripRepo.findByLikersIsNotEmpty();
	}
	
//	CREATE                      t
	public Trip createTrip(Trip newTrip) {
		return tripRepo.save(newTrip);
	}
	
//	READ ONE
	// retrieves a trip
    public Trip findTrip(Long id) {
        Optional<Trip> optionalBook = tripRepo.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
//    UPDATE - similar to create // so long as i give an object with id
    public Trip updateTrip(Trip oneTrip) {
    	return tripRepo.save(oneTrip);
    }
    
//    DELETE
    public void deleteTripById(Long id) {
    	tripRepo.deleteById(id);
    }
	

}
