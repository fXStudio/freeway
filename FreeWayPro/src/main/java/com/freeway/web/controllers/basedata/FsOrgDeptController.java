package com.freeway.web.controllers.basedata;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.models.SystemUser;
import com.freeway.web.services.basicdata.IFsOrgDeptService;

/**
 * 收费站
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = { RequestMethod.POST })
public class FsOrgDeptController {
	private @Autowired IFsOrgDeptService fsOrgDeptService;

	/**
	 * 收费站
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "fsOrgDeptList")
	public Object fsOrgDeptList(HttpServletRequest request) {
		// 当前登录的用户信息
		String deptid = ((SystemUser) request.getSession().getAttribute("freeWayUser")).getDepid();

		return fsOrgDeptService.findAll(deptid);
	}

	/**
	 * 机构部门
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "departmentList")
	public Object departmentList(@RequestParam(value = "userId", required = false, defaultValue = "") String userId) {
		return fsOrgDeptService.deptTree(userId);
	}
}
