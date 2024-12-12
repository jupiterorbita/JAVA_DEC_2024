package com.heidichen.serverdemo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.heidichen.serverdemo.models.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {

	List<Student> findAll();
}
