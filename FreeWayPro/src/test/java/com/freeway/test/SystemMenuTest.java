package com.freeway.test;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUserLoginLogService;
import com.freeway.web.services.log.IUserSchedulerJobLogService;

public class SystemMenuTest {
	@Test
	public void serviceTest() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath*:spring-*.xml");
		IUserLoginLogService dao = (IUserLoginLogService) context.getBean("userLoginLogService");
		
		
		context.close();
	}
}
