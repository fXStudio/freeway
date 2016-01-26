package com.freeway.util.test;

import org.junit.Test;

import com.freeway.web.helper.UUIDGenerator;



public class UUIDGenTest {
	@Test
	public void gen() {
		System.out.println(UUIDGenerator.random());
	}
}
