package com.freeway.web.controllers.system;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemUser;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemUserService;

/**
 * 计重设备异常异常
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = { RequestMethod.POST })
public class SystemLoginController {
	private @Autowired ISystemUserService systemUserService;

	/**
	 * @return 系统登录
	 */
	@RequestMapping("systemLogin")
	public Object systemLogin(HttpServletRequest request, ConditionFiled cf) {
		// 检验用户登录信息
		List<SystemUser> users = systemUserService.findRecords(cf);
		if (users.size() == 0) {
			return new FeedBackMessage(false, "用户名或密码不正确");
		}
		// 用户信息存在Session中
		request.getSession().setAttribute("freeWayUser", users.get(0));
		
		return new FeedBackMessage(true);
	}
}
