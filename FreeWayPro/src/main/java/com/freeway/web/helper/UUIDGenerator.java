package com.freeway.web.helper;

import java.util.UUID;

/**
 * UUID生成工具
 * 
 * @author FXStudio.Ajaxfan
 */
public final class UUIDGenerator {
	/**
	 * @return 随机生成UUID
	 */
	public static String random() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
}
