package com.freeway.web.controllers.system;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroup;
import com.freeway.web.models.SystemUser;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemGroupService;
import com.freeway.web.services.system.ISystemUserService;
import com.github.pagehelper.PageInfo;

/**
 * 计重设备异常异常
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = { RequestMethod.POST })
public class SystemUserGroupController {
	private @Autowired ISystemGroupService systemGroupService;
	private @Autowired ISystemUserService systemUserService;

	/**
	 * 菜单列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "userGroupList")
	public Object userGroupList(ConditionFiled cf) {
		// 生成分页信息
		PageInfo<SystemGroup> info = new PageInfo<SystemGroup>(systemGroupService.findRecords(cf));

		// 生成客户端格式
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", info.getTotal());// 记录总数
		map.put("items", info.getList());// 记录行对象

		return map;
	}

	/**
	 * 菜单列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "groupUserList")
	public Object groupUserList(ConditionFiled cf) {
		// 生成分页信息
		PageInfo<SystemUser> info = new PageInfo<SystemUser>(systemUserService.findRecords(cf));

		// 生成客户端格式
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", info.getTotal());// 记录总数
		map.put("items", info.getList());// 记录行对象

		return map;
	}

	/**
	 * 删除用户组
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "delUserGroup")
	public FeedBackMessage deleteMenu(@RequestParam(value = "sysid", required = true) String sysid) {
		return systemGroupService.del(sysid);
	}

	/**
	 * 添加新的用户组
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "userGroupModify")
	public FeedBackMessage menuModify(@RequestParam(value = "sysid", required = false, defaultValue = "") String sysid,
			@RequestParam(value = "menus", required = false, defaultValue = "[]") String[] menus,
			HttpServletRequest request) {
		SystemGroup vo = new SystemGroup();
		vo.setSysid(sysid);
		vo.setGroupname(request.getParameter("groupname"));
		vo.setRemark(request.getParameter("remark"));

		if ("".equals(sysid)) {
			vo.setSysid(UUID.randomUUID().toString().replaceAll("-", ""));
			return systemGroupService.add(vo, menus);
		}
		return systemGroupService.update(vo, menus);
	}

	/**
	 * 部门可访问菜单
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "userGroupMenu/{groupId}")
	public Object menuItemList(@PathVariable(value = "groupId") String groupId) {
		return systemGroupService.getSystemMenu(groupId);
	}
}
