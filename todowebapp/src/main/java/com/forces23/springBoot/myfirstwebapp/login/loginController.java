package com.forces23.springBoot.myfirstwebapp.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class loginController {
	
	private Logger logger = LoggerFactory.getLogger(getClass());

	private AuthenticationService authServ;
	
	public loginController(AuthenticationService authServ) {
		super();
		this.authServ = authServ;
	}
	
	@RequestMapping(value="/login",method = RequestMethod.GET)
	public String goToLoginPage() {		
		return "login";
	}
	
	@RequestMapping(value="/login",method = RequestMethod.POST)
	public String goToWelcomePage(@RequestParam String uname, @RequestParam String pwd, ModelMap model) {
		//logs
		logger.debug("Request Param uname : " + uname);
		logger.debug("Request Param pwd : " + pwd);
		
		//login authentication 
		if (authServ.authenticate(uname, pwd)) {
			model.put("uname", uname);
			return "welcome";
			
		}
		model.put("error1", "incorrect username or password");
		return "login" ;
	}
	
	
//    ---------------------using ModelMap-----------------------
//	Hint on how to use it below
//	http://localhost:8080/login?name=Bobby         when calling in a JSP page you want to use 
//                                                 something like ${uname} -- uname would be 
//                                                 replaced with what is in the variable uname found below
	/*
	 * @RequestMapping("/login") 
	 * public String loginPage(@RequestParam String uname, @RequestParam String pwd, ModelMap model) { 
	 * model.put("uname", uname);
	 * model.put("pwd", pwd); 
	 * logger.debug("Request param is {}", uname);
	 * logger.debug("Request param is {}", pwd);
	 * 
	 * return "login"; }
	 */
}
