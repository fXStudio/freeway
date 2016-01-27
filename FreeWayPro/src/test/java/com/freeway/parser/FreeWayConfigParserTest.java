package com.freeway.parser;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.freeway.web.freemarkers.components.inters.IFreeMarkerParser;

public class FreeWayConfigParserTest {
	@Test
	public void parserMethod() throws Exception {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath*:spring-*.xml");
		IFreeMarkerParser dao = (IFreeMarkerParser) context.getBean("freeMarkerParser");

		System.out.println(dao.getConfigs("menu"));
	}
}