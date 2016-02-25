package com.freeway.web.helper;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

/**
 * JSon转换工具
 * 
 * @author FXStudio.Ajaxfan
 */
public final class JSONConvertor {
	/** Jackson工具 */
	private static ObjectMapper om = new ObjectMapper();

	/**
	 * java对象转化为Json串
	 * 
	 * @param obj
	 * @return
	 */
	public static String object2Json(Object obj) {
		try {
			return om.writeValueAsString(obj);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
