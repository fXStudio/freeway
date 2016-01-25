package com.freeway.web.services.system;

import com.freeway.web.messages.FeedBackMessage;

/**
 * 维护部门
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemGroupMenuService {
	/**
	 * 变更部门菜单关系
	 * 
	 * @param sysid
	 * @param menuIds
	 * @return
	 */
	public FeedBackMessage update(String sysid, String[] menuIds);
}
