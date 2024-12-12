package com.john.beltreview.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.john.beltreview.models.Trip; 

@Repository
public interface TripRepository extends CrudRepository<Trip, Long> {

	List<Trip> findAllByOrderByLocation();
	List<Trip> findAll();
	
    // Find all trips where the likers list is not empty
    List<Trip> findByLikersIsNotEmpty();
    
    List<Trip> findAllByOrderByLikersDesc();
    List<Trip> findTop3ByOrderByLikersDesc();


}
