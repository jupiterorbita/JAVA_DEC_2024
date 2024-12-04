package com.john.crudviews.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

	@NotNull
	@Size(min = 2, message="must be at least 2 characters!!!")
	private String owner; // "Bob", "Alice"

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

//    === MUST HAVE AN EMPTY CONSTRUCTOR ===
	public Trip() {
	}

//	public Trip(String location, Integer tripLength, String description, String owner) {
//		this.location = location;
//		this.tripLength = tripLength;
//		this.description = description;
//		this.owner = owner;
//	}

//	=== GETTERS AN SETTERS ===
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

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
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
	

}

