package com.freeway.web.services.basicdata;

import java.util.List;

import com.freeway.web.tree.inters.INode;

/**
 * 部门信息统计
 * 
 * @author FXStudio.Ajaxfan
 */
public interface IFsOrgDeptService {
	/**
	 * @return
	 */
	public List<INode> findAll(String deptid);

	/**
	 * @return
	 */
	public List<INode> deptTree(String userid);
}
