package com.freeway.web.freemarkers.components.inters;

import com.freeway.web.freemarkers.modules.Config;

/**
 * FreeMarker配置文件解析
 * 
 * @author FXStudio.Ajaxfan
 */
public interface IFreeMarkerParser {
	public Config getConfigs(String cg);
}
