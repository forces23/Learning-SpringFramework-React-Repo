package com.Forces23.learnspringframework.examples.e1;

import java.util.Arrays;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
class NormalClass {
	
}

@Scope
class PrototypeClass {
	
}

@Configuration
@ComponentScan
public class BeanScopesLauncherApplication {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = null;
		
		try {
			context = new AnnotationConfigApplicationContext(BeanScopesLauncherApplication.class);
			Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
			
		}finally {
			if(context != null) {
				context.close();
			}
		}
	}

}
