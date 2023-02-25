package com.Forces23.learnspringframework.examples.c1.V1;

import org.springframework.stereotype.Component;

@Component
public class MySQLDataService implements DataService{
	public int[] retrieveData() {
		return new int[] {1,2,3,4,5};
	}

	public String databaseName() {
		return "--- MySQL ---";
	}
}
