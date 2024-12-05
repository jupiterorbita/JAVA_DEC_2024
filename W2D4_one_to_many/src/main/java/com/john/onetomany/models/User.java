package com.john.onetomany.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
//	STOP THE SERVER FIRST
	
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 2, max = 40, message = "Username must be at least 2 characters")
	private String username;
	
	@NotNull
	@Email(message= "email not valid")
	@Size(min = 2, max = 40, message = "email must be at least 2 characters")
	private String email;
	
//	========= ASSOCIATION ===========
//	A USER HAS MANY TRIPS
//	1 : M
	@OneToMany(mappedBy = "owner", fetch=FetchType.LAZY)
	private List<Trip> ownedTrips;
//	=================================
	public User() {	}


//	=== GETTERS AND SETTERS ===
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public List<Trip> getOwnedTrips() {
		return ownedTrips;
	}


	public void setOwnedTrips(List<Trip> ownedTrips) {
		this.ownedTrips = ownedTrips;
	}	
	
	
	
	
	
	
	
}
