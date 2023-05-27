package com.forces23.rest.webservices.restfulwebservices.user;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class UserResourceJpa {
	/*
	 * 	Mappings and what they are used for						|	Response status for Rest API
	 * 		GetMapping    - Retrieve details of a resource 		|		200 -> Success
	 * 		PostMapping   - Create a new resource				|		201 -> Created
	 * 		PutMapping    - Update an existing resource			|		204 -> No Content
	 * 		PatchMapping  - Update part of a resource			|		401 -> Unauthorized (when authorization fails)
	 * 		DeleteMapping - Delete a resource					|		400 -> Bad Request (such as validation)
	 * 															|		404 -> Resource Not Found 
	 * 															|		500 -> Server Error
	*/
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/jpa/users")
	public List<User> retrieveAllUsers(){
		return userRepo.findAll();
	}
	
	@GetMapping("/jpa/users/{id}")
	public EntityModel<User> retrieveUser(@PathVariable int id){
		Optional<User> user = userRepo.findById(id);
		
		if(user.isEmpty()) {
			throw new UserNotFoundException("id: "+id);
		}
		
		EntityModel<User> entityModel = EntityModel.of(user.get());
		
		WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());
		entityModel.add(link.withRel("all-users"));
		
		return entityModel;
	}
	
	@PostMapping("/jpa/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		User savedUser = userRepo.save(user);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
							.path("/{id}")
							.buildAndExpand(savedUser.getId())
							.toUri();
		
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/jpa/users/{id}")
	public void deleteUser(@PathVariable int id){
		userRepo.deleteById(id);
	}
	
	
	
}
