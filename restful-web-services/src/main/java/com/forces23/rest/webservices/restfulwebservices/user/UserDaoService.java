package com.forces23.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
	
	private static List<User> users = new ArrayList<>();
	private static int usersCount = 0;
	
	static {
		users.add(new User(++usersCount,"Adam",LocalDate.now().minusYears(30),"ABC123"));
		users.add(new User(++usersCount,"Eve",LocalDate.now().minusYears(25),"8dR486"));
		users.add(new User(++usersCount,"Dewit",LocalDate.now().minusYears(20),"XYZ789"));
		users.add(new User(++usersCount,"Comstock",LocalDate.now().minusYears(149),"Lamb20"));
	}
	
	public List<User> findAll(){
		return users;
	}
	
	public User findOne(int id){
		Predicate<? super User> predicate = user -> user.getId() == id;
		return users.stream().filter(predicate).findFirst().orElse(null);		
	}
	
	public User saveUser(User user) {
		user.setId(++usersCount);
		users.add(user);
		return user;
	}
	
	public void deleteById(int id){
		Predicate<? super User> predicate = user -> user.getId() == id;
		users.removeIf(predicate);	
	}
	
	
	
	
	
	
	
}
