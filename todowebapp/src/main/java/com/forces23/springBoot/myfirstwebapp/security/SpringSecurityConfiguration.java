package com.forces23.springBoot.myfirstwebapp.security;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfiguration {
	
	@Value("${defaultUsername}")
	public String default_uname;
	
	@Value("${defaultPassword}")
	public String default_pwd;
	
	@Bean
	public InMemoryUserDetailsManager createUserDetailsManager() {
		//System.out.println("default %n uname : " + default_uname + " %n pwd : " + default_pwd);
		UserDetails userDetails1 = creatNewUser(default_uname, default_pwd);
		UserDetails userDetails2 = creatNewUser("bobby", "default");
		return new InMemoryUserDetailsManager(userDetails1, userDetails2);
		
		
	}

	private UserDetails creatNewUser(String username, String password) {
		Function<String, String> passwordEncoder = input -> passwordEncoder().encode(input);
		
		UserDetails userDetails = User.builder()
									.passwordEncoder(passwordEncoder)
									.username(username)
									.password(password)
									.roles("USER","ADMIN")
									.build();
		return userDetails;
	}
	
	@Bean 
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(
				auth -> {
					try {
						auth.anyRequest().authenticated().and().formLogin().defaultSuccessUrl("/", true);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				});
		http.formLogin(withDefaults());
				
		
		http.csrf().disable();
		http.headers().frameOptions().disable();
		return http.build();
				
		
	}
}
