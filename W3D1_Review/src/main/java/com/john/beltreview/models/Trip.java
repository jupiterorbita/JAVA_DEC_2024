package com.john.beltreview.models;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "trips")
public class Trip {

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 2, max = 200, message = "location must be at least 2 characters")
	private String location;

	@NotNull
	@Min(value = 1, message = "must be positive")
	private Integer tripLength;

	@NotNull
	@Size(min = 5, max = 200)
	private String description;
	
	
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	@PrePersist // execute when a record is created
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate // execute when a record is updated
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
//	-------------
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "owner_id")
	private User owner;
//	-------------
	
//	=== M : M ===
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
	        name = "users_trips", 
	        joinColumns = @JoinColumn(name = "trip_id"), 
	        inverseJoinColumns = @JoinColumn(name = "user_id")
	    )
	private List<User> likers; // []
	
	
	
	public Trip() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getTripLength() {
		return tripLength;
	}

	public void setTripLength(Integer tripLength) {
		this.tripLength = tripLength;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public List<User> getLikers() {
		return likers;
	}

	public void setLikers(List<User> likers) {
		this.likers = likers;
	}

}
