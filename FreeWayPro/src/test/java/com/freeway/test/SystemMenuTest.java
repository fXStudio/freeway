package com.freeway.test;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUserSchedulerJobLogService;

public class SystemMenuTest {
	@Test
	public void serviceTest() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath*:spring-*.xml");
		IUserSchedulerJobLogService dao = (IUserSchedulerJobLogService) context.getBean("userSchedulerJobLogService");

		ConditionFiled con = new ConditionFiled();
		con.setStart(0);
		con.setLimit(2);
		System.out.println(dao.findRecords(con));
		context.close();
	}
}
