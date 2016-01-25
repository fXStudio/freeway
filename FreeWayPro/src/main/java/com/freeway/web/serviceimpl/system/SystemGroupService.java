package com.freeway.web.serviceimpl.system;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.mappers.system.SystemGroupMapper;
import com.freeway.web.mappers.system.SystemGroupMenuMapper;
import com.freeway.web.mappers.system.SystemMenuItemMapper;
import com.freeway.web.mappers.system.SystemMenuMapper;
import com.freeway.web.mappers.system.SystemMenuMenuitemMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroup;
import com.freeway.web.models.SystemGroupMenu;
import com.freeway.web.models.SystemMenu;
import com.freeway.web.models.SystemMenuItem;
import com.freeway.web.models.SystemMenuMenuitem;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemGroupService;
import com.freeway.web.tree.CheckedNode;
import com.freeway.web.tree.NormalNode;
import com.freeway.web.tree.inters.INode;

import tk.mybatis.mapper.entity.Example;

/**
 * 用户组
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemGroupService implements ISystemGroupService {
	private @Autowired SystemGroupMapper systemGroupMapper;
	private @Autowired SystemGroupMenuMapper systemGroupMenuMapper;
	private @Autowired SystemMenuMapper systemMenuMapper;
	private @Autowired SystemMenuMenuitemMapper systemMenuMenuitemMapper;
	private @Autowired SystemMenuItemMapper systemMenuItemMapper;

	@Override
	@Transactional
	public FeedBackMessage add(SystemGroup group, String[] menuIds) {
		systemGroupMapper.insertSelective(group);
		addRelative(group.getSysid(), menuIds);
		return new FeedBackMessage(true);
	}

	@Override
	@Transactional
	public FeedBackMessage del(String sysid) {
		systemGroupMapper.deleteByPrimaryKey(sysid);
		// 删除用户组和菜单的关系记录
		delRelative(sysid);

		return new FeedBackMessage(true);
	}

	@Override
	@Transactional
	public FeedBackMessage update(SystemGroup group, String[] menuIds) {
		systemGroupMapper.updateByPrimaryKey(group);
		// 删除用户组和菜单的关系记录
		delRelative(group.getSysid());
		// 添加新的关系记录
		addRelative(group.getSysid(), menuIds);

		return new FeedBackMessage(true);
	}

	/**
	 * 系统菜单
	 *
	 * @param groupId
	 * @return
	 */
	@Override
	public List<INode> getSystemMenu(String groupId) {
		List<INode> tree = new ArrayList<INode>();
		List<SystemGroupMenu> groupMenus = getGroupMenus(groupId);

		// 菜单
		for (SystemMenu sm : systemMenuMapper.selectAll()) {
			CheckedNode menuNode = new CheckedNode();
			menuNode.setSn(sm.getSysid());
			menuNode.setText(sm.getMenuname());
			menuNode.setChecked(isChecked(sm.getSysid(), groupMenus));

			// 菜单项
			for (SystemMenuMenuitem smmi : getSystemMenuItems(sm.getSysid())) {
				SystemMenuItem smi = systemMenuItemMapper.selectByPrimaryKey(smmi.getItemid());

				NormalNode node = new NormalNode();
				node.setSn(smi.getSysid());
				node.setText(smi.getItemname());

				menuNode.addChild(node);
			}
			tree.add(menuNode);
		}

		return tree;
	}

	/**
	 * 删除用户组和菜单对应关系记录
	 *
	 * @param sysid
	 *            菜单主键
	 */
	private void delRelative(String groupId) {
		Example condition = new Example(SystemGroupMenu.class);
		condition.createCriteria().andEqualTo("groupid", groupId);
		systemGroupMenuMapper.deleteByExample(condition);
	}

	/**
	 * 添加关系记录
	 *
	 * @param menuId
	 *            菜单ID
	 * @param itemIds
	 *            菜单项ID集合
	 */
	private void addRelative(String groupId, String[] menuIds) {
		for (String menuId : menuIds) {
			SystemGroupMenu relation = new SystemGroupMenu();
			relation.setGroupid(groupId);
			relation.setMenuid(menuId);

			systemGroupMenuMapper.insertSelective(relation);
		}
	}

	/**
	 * @param groupId
	 * @return
	 */
	private List<SystemGroupMenu> getGroupMenus(String groupId) {
		Example condition = new Example(SystemGroupMenu.class);
		condition.createCriteria().andEqualTo("groupid", groupId);

		return systemGroupMenuMapper.selectByExample(condition);
	}

	/**
	 * @param sysid
	 * @param list
	 * @return
	 */
	private boolean isChecked(String sysid, List<SystemGroupMenu> list) {
		for (SystemGroupMenu sgm : list) {
			if (sysid.equals(sgm.getMenuid())) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @param menuid
	 * @return
	 */
	private List<SystemMenuMenuitem> getSystemMenuItems(String menuid) {
		Example condition = new Example(SystemMenuMenuitem.class);
		condition.createCriteria().andEqualTo("menuid", menuid);

		return systemMenuMenuitemMapper.selectByExample(condition);
	}

	/**
	 * @param cf
	 * @return
	 */
	@Override
	public List<SystemGroup> findRecords(ConditionFiled cf) {
		return systemGroupMapper.selectByExampleAndRowBounds(null,
				new RowBounds(cf.getStart(), cf.getLimit() - cf.getStart()));
	}

	/**
	 * @param cf
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled cf) {
		throw new UnsupportedOperationException();
	}
}
