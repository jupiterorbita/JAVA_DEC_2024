package com.john.crudviews.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.crudviews.models.Trip;
import com.john.crudviews.repositories.TripRepository;

@Service
public class TripService {
	
//	add the repo as a dependency
	@Autowired
	private TripRepository tripRepo;
	
	//	private final TripRepository tripRepo;
//	
//	public TripService(TripRepository tripRepo) {
//		this.tripRepo = tripRepo;
//	}
	
//	---------------------------
	
//	READ ALL
	public List<Trip> allTrips() {
		return tripRepo.findAll();
	}

//	CREATE
	public Trip createTrip(Trip newTrip) {
		return tripRepo.save(newTrip);
	}
	
//	READ ONE
	public Trip findTrip(Long id) {
        Optional<Trip> optionalTrip = tripRepo.findById(id);
        if(optionalTrip.isPresent()) {
            return optionalTrip.get();
        } else {
            return null;
        }
    }
	
//	UPDATE -- similar to create // as long as i provide an object with an id
	public Trip updateTrip(Trip oneTrip) {
		return tripRepo.save(oneTrip);
	}
	
//	DELETE
	public void deleteTrip(Long id) {
		tripRepo.deleteById(id);
	}
}