package com.freeway.web.controllers.system;

import java.sql.Timestamp;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemUser;
import com.freeway.web.models.UserloginLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUserLoginLogService;
import com.freeway.web.services.system.ISystemUserService;

/**
 * 计重设备异常异常
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class SystemLoginController {
	/** 用户服务接口类 */
	private @Autowired ISystemUserService systemUserService;

	private @Autowired IUserLoginLogService userLoginLogService;

	/**
	 * @return 系统登录
	 */
	@RequestMapping("systemLogin")
	public Object systemLogin(HttpServletRequest request, ConditionFiled cf) {
		// 检验用户登录信息
		List<SystemUser> users = systemUserService.findRecords(cf);
		// 如果用户信息不存在，则提示用户错误原因
		if (users.size() == 0) {
			return new FeedBackMessage(false, "用户名或密码不正确");
		}
		// 用户信息存在Session中
		request.getSession().setAttribute("freeWayUser", users.get(0));

		// 记录用户的登陆日志
		writeLog(cf.getUsername(), request.getRemoteAddr());

		return new FeedBackMessage(true);
	}

	/**
	 * 记录用户的登陆日志
	 * 
	 * @param username
	 * @param ipAddress
	 */
	private void writeLog(String username, String ipAddress) {
		UserloginLog log = new UserloginLog();
		log.setSysid(UUIDGenerator.random());
		log.setUsername(username);
		log.setIp(ipAddress);
		log.setLogintime(new Timestamp(System.currentTimeMillis()));

		userLoginLogService.add(log);
	}
}
