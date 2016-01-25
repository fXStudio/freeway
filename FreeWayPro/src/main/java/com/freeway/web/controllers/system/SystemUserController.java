package com.freeway.web.controllers.system;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemUser;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemUserService;
import com.github.pagehelper.PageInfo;

/**
 * 维护系统用户服务接口
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = { RequestMethod.POST })
public class SystemUserController {
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
	@RequestMapping(value = "systemUserList")
	public Object systemUserList(ConditionFiled cf) {
		PageInfo<SystemUser> pageInfo = new PageInfo<SystemUser>(systemUserService.findRecords(cf));
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", pageInfo.getTotal());// 记录总数
		map.put("items", pageInfo.getList());// 记录行对象

		return map;
	}

	/**
	 * 用户组列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "delSystemUser")
	public Object delSystemUser(@RequestParam(value = "sysid", required = true) String sysid) {
		return systemUserService.del(sysid);
	}

	/**
	 * 维护系统用户
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "systemUserModify")
	public FeedBackMessage systemUserModify(SystemUser vo) {
		return systemUserService.addOrUpdate(vo);
	}

	/**
	 * 用户组列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "userGroupFromArray/{userId}")
	public Object userGroupFromArray(@PathVariable(value = "userId") String userId) {
		return systemUserService.getUserFromGroups(userId);
	}

	/**
	 * 用户组列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "userGroupToArray/{userId}")
	public Object userGroupToArray(@PathVariable(value = "userId") String userId) {
		return systemUserService.getUserToGroups(userId);
	}
}
