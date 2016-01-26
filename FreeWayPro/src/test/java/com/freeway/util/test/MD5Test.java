package com.freeway.util.test;

import org.junit.Test;

import com.freeway.web.helper.MD5Converter;

public class MD5Test {
	@Test
	public void md5Test() {
		System.out.println(MD5Converter.string2MD5("a"));
	}
}
