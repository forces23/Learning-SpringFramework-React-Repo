package com.forces23.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity(name="user_details")
public class User {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Size(min=2, message="Name should have atleast 2 characters")
	@JsonProperty("user_name")
	private String name;
	
	@Past(message="Birthdate should be in the past")
	@JsonProperty("birth_date")
	private LocalDate birthDate;
	
	@JsonIgnore
	private String password;
	
	public User() {
		super();
	}

	public User(int id, String name, LocalDate birthDate, String password) {
		super();
		this.id = id;
		this.name = name;
		this.birthDate = birthDate;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}
	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", birthDate=" + birthDate + ", password=" + password + "]";
	}


	
	

}
