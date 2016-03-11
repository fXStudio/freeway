package com.freeway.web.serviceimpl.basicdata;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.basicdata.FsOrgDeptMapper;
import com.freeway.web.mappers.system.SystemUserMapper;
import com.freeway.web.models.FsOrgDept;
import com.freeway.web.models.SystemUser;
import com.freeway.web.services.basicdata.IFsOrgDeptService;
import com.freeway.web.tree.CheckedNode;
import com.freeway.web.tree.NormalNode;
import com.freeway.web.tree.inters.INode;

import tk.mybatis.mapper.entity.Example;

/**
 * 部门信息
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class FsOrgDeptService implements IFsOrgDeptService {
	private @Autowired FsOrgDeptMapper fsOrgDeptMapper;
	private @Autowired SystemUserMapper systemUserMapper;

	/**
	 * 部门信息
	 * 
	 * @param fields
	 * @return
	 */
	@Override
	public List<INode> findAll(String deptid) {
		List<INode> list = new ArrayList<INode>();
		Example condition = new Example(FsOrgDept.class);
		condition.createCriteria().andEqualTo("sysid", deptid);

		for (FsOrgDept obj : fsOrgDeptMapper.selectByExample(condition)) {
			NormalNode node = new NormalNode();
			node.setSn(obj.getSysid());
			node.setText(obj.getDeptName());

			list.add(deep(node, obj.getSysid()));
		}
		return list;
	}

	/**
	 * 生成部门树
	 * 
	 * @return
	 */
	@Override
	public List<INode> deptTree(String userId) {
		List<INode> list = new ArrayList<INode>();
		Example condition = new Example(FsOrgDept.class);
		condition.createCriteria().andEqualTo("depttype", 1);

		// 部门编号
		String depid = getDepIdFromUser(userId);

		for (FsOrgDept obj : fsOrgDeptMapper.selectByExample(condition)) {
			CheckedNode node = new CheckedNode();
			node.setSn(obj.getSysid());
			node.setText(obj.getDeptName());
			node.setChecked(obj.getSysid().equals(depid));

			list.add(deep(node, obj.getSysid(), depid));
		}
		return list;
	}

	/**
	 * 展开部门树
	 * 
	 * @param node
	 * @param parent
	 */
	private INode deep(CheckedNode parentNode, String parent, String depId) {
		Example condition = new Example(FsOrgDept.class);
		condition.createCriteria().andEqualTo("deptParantRowid", parent);

		// 子节点
		for (FsOrgDept obj : fsOrgDeptMapper.selectByExample(condition)) {
			CheckedNode node = new CheckedNode();
			node.setSn(obj.getSysid());
			node.setText(obj.getDeptName());
			node.setChecked(parentNode.isChecked() ? true : node.getSn().equals(depId));

			parentNode.addChild(deep(node, obj.getSysid(), depId));
		}
		return parentNode;
	}

	/**
	 * 展开部门树
	 * 
	 * @param node
	 * @param parent
	 */
	private INode deep(INode parentNode, String parent) {
		Example condition = new Example(FsOrgDept.class);
		condition.createCriteria().andEqualTo("deptParantRowid", parent);

		// 子节点
		for (FsOrgDept obj : fsOrgDeptMapper.selectByExample(condition)) {
			NormalNode node = new NormalNode();
			node.setSn(obj.getSysid());
			node.setText(obj.getDeptName());

			parentNode.addChild(deep(node, obj.getSysid()));
		}
		return parentNode;
	}

	/**
	 * 用户部门编号
	 * 
	 * @param userId
	 * @return
	 */
	private String getDepIdFromUser(String userId) {
		SystemUser user = systemUserMapper.selectByPrimaryKey(userId);
		if (user == null) {
			return null;
		}
		return user.getDepid();
	}
}
