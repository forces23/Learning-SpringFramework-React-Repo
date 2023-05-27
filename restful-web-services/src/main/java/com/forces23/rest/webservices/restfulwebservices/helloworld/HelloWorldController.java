package com.forces23.rest.webservices.restfulwebservices.helloworld;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@Autowired
	private MessageSource messageSource;
	
	@GetMapping("/helloworld")
	public String hellowWorld() {
		return "Hello World";
	}
	
	@GetMapping("/helloworld-bean")
	public HelloWorldBean hellowWorldBean() {
		return new HelloWorldBean( "Hello World");
	}
	
	@GetMapping("/helloworld-bean/path-variable/{name}")
	public HelloWorldBean hellowWorldBeanPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s ", name));
	}
	
	@GetMapping("/helloworld-internationalized")
	public String hellowWorldInternationalized() {
		
		Locale Locale = LocaleContextHolder.getLocale();
		return messageSource.getMessage("good.morning.message", null, "Default Message", Locale);
	}
}
