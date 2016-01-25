package com.freeway.web.serviceimpl.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.mappers.system.SystemGroupMenuMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroupMenu;
import com.freeway.web.services.system.ISystemGroupMenuService;

import tk.mybatis.mapper.entity.Example;

/**
 * 维护部门
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemGroupMenuService implements ISystemGroupMenuService {
	private @Autowired SystemGroupMenuMapper deptMenuMapper;

	/**
	 * 变更部门菜单关系
	 *
	 * @param sysid
	 * @param menuIds
	 * @return
	 */
	@Override
	@Transactional
	public FeedBackMessage update(String sysid, String[] menuIds) {
		// 删除以前维护的关系记录
		Example condition = new Example(SystemGroupMenu.class);
		condition.createCriteria().andEqualTo("groupid", sysid);
		deptMenuMapper.deleteByExample(condition);

		// 部门在系统中可视为等同于【用户组】，这里就是用来维护不能对于系统的可操作权限
		for (String menuId : menuIds) {
			SystemGroupMenu deptMenu = new SystemGroupMenu();
			deptMenu.setGroupid(sysid);
			deptMenu.setMenuid(menuId);

			deptMenuMapper.insertSelective(deptMenu);
		}
		return new FeedBackMessage(true);
	}
}
