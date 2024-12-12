package com.john.beltreview.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.john.beltreview.models.LoginUser;
import com.john.beltreview.models.User;
import com.john.beltreview.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	// TO-DO: Write register and login methods!
	public User register(User newUser, BindingResult result) {
//        1. find user in the DB by email
		Optional<User> optionalUser = userRepo.findByEmail(newUser.getEmail());
//        2. if email is present - reject
		if (optionalUser.isPresent()) {
//    		add an error
			result.rejectValue("email", "unique", "email is taken");
		}

//    	check if passwords don't match
		if (!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "matches", "passwords much match");
		}

//    	at the end check if the error 'result' has any errors, return
		if (result.hasErrors()) {
			return null;
		}

//    	ELSE - hash andSET the pw, then save the user to the DB
		String hashedPassword = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		newUser.setPassword(hashedPassword);

//    	SAVE THE USER IN THE DB
		User registeredUser = userRepo.save(newUser);
		return registeredUser;
	}

	public User login(LoginUser newLoginObject, BindingResult result) {
//        1. find user by email in the DB
		Optional<User> potenialUser = userRepo.findByEmail(newLoginObject.getEmail());
//    	2. if email is not present - reject
		if (!potenialUser.isPresent()) {
			result.rejectValue("email", "whatever", "email not registed");
			return null;
		}

//    	3. grab the potential user
		User loggedUser = potenialUser.get();
//    	4. if Bcrypt password match fails - reject
		if (!BCrypt.checkpw(newLoginObject.getPassword(), loggedUser.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid Password!");
		}

//    	5. if result has any errors - return
		if (result.hasErrors()) {
			return null;
		}
		
//		otherwise return the user object
		return loggedUser;

	}
	
//	READ ONE
//  FIND ONE
	public User findUser(Long id) {
		Optional<User> optionalUser = userRepo.findById(id);
		if (optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}

}
