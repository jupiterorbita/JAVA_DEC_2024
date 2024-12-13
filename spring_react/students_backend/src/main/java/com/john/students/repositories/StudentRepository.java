package com.john.students.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.john.students.models.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {
	List<Student> findAll();

}
