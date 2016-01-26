package com.freeway.web.helper;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * MD5加密工具包
 * 
 * @author FXStudio.Ajaxfan
 */
public abstract class MD5Converter {
	/** MD5加密的基准数 */
	private static final int BASE_NUM = 16;
	/** MD5加密比对的参照数 */
	private static final int MD5_INDENT = 0xff;

	/**
	 * @param origin
	 *            要进行MD5加密的文本
	 * @return 加密后的文本
	 */
	public final static String string2MD5(String origin) {
		try {
			// 结果字符串
			StringBuffer hexValue = new StringBuffer();
			// 生成MD5串
			for (byte b : MessageDigest.getInstance("MD5").digest(origin.getBytes())) {
				int val = (b) & MD5_INDENT;
				if (val < BASE_NUM) {
					hexValue.append("0");
				}
				hexValue.append(Integer.toHexString(val));
			}
			return hexValue.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return null;
	}
}
