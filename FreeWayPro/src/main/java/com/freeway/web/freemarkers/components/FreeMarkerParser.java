package com.freeway.web.freemarkers.components;

import java.io.IOException;
import java.text.MessageFormat;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.freeway.web.freemarkers.components.inters.IFreeMarkerParser;
import com.freeway.web.freemarkers.modules.Config;

/**
 * FreeMarker配置文件加载工具
 * 
 * @author FXStudio.Ajaxfan
 */
@Component
final class FreeMarkerParser implements IFreeMarkerParser {
	/** 配置文件的根目录 */
	private static final String PATH_TEMPLATE = "/freemarkers/configs/{0}.cg";

	/** JSON转换工具 */
	private ObjectMapper mapper = new ObjectMapper();

	/**
	 * 读入配置文件信息
	 * 
	 * @param cg
	 * @return
	 */
	@Cacheable("configs")
	public Config getConfigs(String cg) {
		try {
			return mapper.readValue(FreeMarkerParser.class.getResourceAsStream(MessageFormat.format(PATH_TEMPLATE, cg)),
					Config.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		throw new IllegalArgumentException("未找到模板配置文件 " + cg + ".cg");
	}
}
