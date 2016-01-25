package com.freeway.util.test;

import org.junit.Test;

import com.freeway.web.security.MD5Util;

public class MD5Test {
	@Test
	public void md5Test() {
		System.out.println(MD5Util.string2MD5("a"));
	}
}
