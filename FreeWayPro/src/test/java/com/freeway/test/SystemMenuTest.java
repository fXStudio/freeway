package com.freeway.test;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IBadCardSearchService;

public class SystemMenuTest {
	@Test
	public void serviceTest() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath*:spring-*.xml");
		IBadCardSearchService dao = (IBadCardSearchService) context.getBean("badCardService");

		for (int i = 1; i <= 10; i++) {
			ConditionFiled cf = new ConditionFiled();
			
			System.out.println(dao.findRecords(cf).size());
		}

		context.close();
	}
}
