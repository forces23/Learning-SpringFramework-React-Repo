package com.forces23.springBoot.myfirstwebapp.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
	public boolean authenticate(String username, String password) {
		boolean isValidUserName = username.equalsIgnoreCase("forces23");
		boolean isValidPassword = password.equalsIgnoreCase("default");
		
		return isValidUserName && isValidPassword;
	}
}
