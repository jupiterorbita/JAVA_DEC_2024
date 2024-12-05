package com.john.onetomany.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.john.onetomany.models.User;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findAll();
}
