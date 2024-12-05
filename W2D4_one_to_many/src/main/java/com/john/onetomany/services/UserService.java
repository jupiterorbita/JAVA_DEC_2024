package com.john.onetomany.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.onetomany.models.User;
import com.john.onetomany.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

//	CREATE
	public User createUser(User newUser) {
		return userRepository.save(newUser);
	}
	
//	READ ONE
    public User findUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        // if(optionalUser.isPresent()) {
        //     return optionalUser.get();
        // } else {
        //     return null;
        // }
        return optionalUser.orElse(null);
    }
    
//    READ ALL
    public List<User> allUsers() {
    	return userRepository.findAll();
    }
    
}
