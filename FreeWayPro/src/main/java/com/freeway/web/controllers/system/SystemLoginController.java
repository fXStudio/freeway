package com.freeway.web.controllers.system;

import java.sql.Timestamp;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.MD5Converter;
import com.freeway.web.helper.StringHelper;
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
	/** 用户登陆日志服务接口类 */
	private @Autowired IUserLoginLogService userLoginLogService;

	/**
	 * @return 系统登录
	 */
	@RequestMapping("systemLogin")
	public Object systemLogin(HttpServletRequest request, ConditionFiled cf) {
		// 从Session重获取用户信息
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");

		// 先通过session信息来判断当前用户是否已经登录，如果已经登录则不需要记录日志和访问数据库
		if (user != null) {
			if (cf.getUsername().equals(user.getUsername())
					&& MD5Converter.string2MD5(cf.getPassword()).equals(user.getPassword())) {
				return new FeedBackMessage(true);
			}
		}

		// 通过数据库的方式查看用户登陆信息是否正确
		List<SystemUser> users = systemUserService.findRecords(cf);

		// 如果用户信息不存在，则提示用户错误原因
		if (users.size() == 0) {
			return new FeedBackMessage(false, "用户名或密码不正确");
		}
		// 用户信息存在Session中
		request.getSession().setAttribute("freeWayUser", users.get(0));
		// 记录系统登录日志
		writeLog(users.get(0).getSysid(), getIPAddress(request));
		
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
		log.setUserid(username);
		log.setIp(ipAddress);
		log.setLogintime(new Timestamp(System.currentTimeMillis()));

		userLoginLogService.add(log);
	}

	/**
	 * 获得IP地址
	 * 
	 * @param request
	 * @return
	 */
	private String getIPAddress(HttpServletRequest request) {
		String ip = request.getHeader("X-Forwarded-For");
		if (!StringHelper.isNullOrEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)) {
			// 多次反向代理后会有多个ip值，第一个ip才是真实ip
			int index = ip.indexOf(",");
			if (index != -1) {
				return ip.substring(0, index);
			} else {
				return ip;
			}
		}
		ip = request.getHeader("X-Real-IP");
		if (!StringHelper.isNullOrEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)) {
			return ip;
		}
		return request.getRemoteAddr();
	}
}
