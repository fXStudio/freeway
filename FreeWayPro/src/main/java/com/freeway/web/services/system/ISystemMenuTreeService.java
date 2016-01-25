package com.freeway.web.services.system;

import java.util.List;

import com.freeway.web.tree.inters.INode;

/**
 * 系统导航树服务接口
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemMenuTreeService {

	/**
	 * 生成系统功能树结构
	 * 
	 * @param depid 用户组ID
	 * @return
	 */
	public List<INode> getSystemMenu(String depid);
}
