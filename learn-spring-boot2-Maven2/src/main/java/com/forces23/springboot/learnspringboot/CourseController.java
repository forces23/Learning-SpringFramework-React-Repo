package com.forces23.springboot.learnspringboot;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

	@RequestMapping("/courses")
	public List<Course> retieveAllCourses(){
		return Arrays.asList(new Course(1, "Learn AWS", "in28minutes"),
							new Course(2, "Learn Devops", "in28minutes"),
							new Course(3, "Learn Azure", "in28minutes"),
							new Course(4, "Learn GCP", "in28minutes"));
	}
		
		
}

