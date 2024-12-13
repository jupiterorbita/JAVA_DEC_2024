package com.john.students.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.john.students.models.Student;
import com.john.students.repositories.StudentRepository;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173",  allowCredentials = "true")
@RequestMapping("/api")
public class StudentAPI {

	@Autowired
	private StudentRepository studentRepo;

	@GetMapping("/students")
	public ResponseEntity<Object> allStudents() {
		System.out.println("\nGET /students:\n" + studentRepo.findAll());
		return ResponseEntity.ok().body(studentRepo.findAll()); // res.json()
	}

	// res.status(200).json(allAuthors)
	// res.json(allAuthors)
	@PostMapping("/students")
	public ResponseEntity<Object> createClient(@Valid @RequestBody Student student, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		}
		Student savedStudent = studentRepo.save(student);
		System.out.println("\nPOST /students:\n" + savedStudent);
		return ResponseEntity.ok().body(savedStudent);
	}

	@DeleteMapping("/students/{id}")
	public ResponseEntity<Object> deleteClient(@PathVariable Long id) {
		studentRepo.deleteById(id);
		return ResponseEntity.ok().build();
	}

	@GetMapping("/students/{id}")
	public Student oneStudent(@PathVariable Long id) {
		return studentRepo.findById(id).orElseThrow(RuntimeException::new);
	}

	@PutMapping("/students/{id}")
	public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Student student,
			BindingResult result) {
		if (result.hasErrors()) {
			return ResponseEntity.status(400).body(result.getAllErrors());
		}
		Student savedStudent = studentRepo.save(student);
		return ResponseEntity.ok().body(savedStudent);
	}

	@GetMapping("/count")
	public ResponseEntity<Object> sessionCount(HttpSession session) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		}
		Integer count = (Integer) session.getAttribute("count") + 1;
		session.setAttribute("count", count);
		return ResponseEntity.status(200).body(count);
	}
}

