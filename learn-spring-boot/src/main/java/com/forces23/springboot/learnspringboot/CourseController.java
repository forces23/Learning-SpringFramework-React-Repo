package com.forces23.springboot.learnspringboot;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// courses
//Course : id,name, author

@RestController
public class CourseController {
	// courses
	//Course : id,name, author
	
	@RequestMapping("/courses")
	public List<Course> retrieveAllCourses(){
		return Arrays.asList(new Course(1, "Learn AWS", "in28minutes"),
							new Course(2, "Learn Devops", "in28minutes"));
	}

	
}
