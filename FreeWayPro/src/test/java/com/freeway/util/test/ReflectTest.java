package com.freeway.util.test;

import java.lang.reflect.Field;

import org.junit.Test;

import com.freeway.web.models.BadCard;

public class ReflectTest {
@Test
public void reflet(){
	for(Field f : BadCard.class.getDeclaredFields()){
		System.out.println(f.getName());
	}
}
}
