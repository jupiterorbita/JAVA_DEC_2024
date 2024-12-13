package com.john.students.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="students")
public class Student {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=2, message="Name must be at least 2 characters")
    private String name;

    @Email
    @Size(min=2, message="Email must be at least 2 characters")
    private String email;
    
    public Student() {}
    
    @Override
    public String toString() {
        return "Student {\n" +
                "    id: " + id + ",\n" +
                "    name: '" + name + "',\n" +
                "    email: '" + email + "',\n" +
                "}";
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}