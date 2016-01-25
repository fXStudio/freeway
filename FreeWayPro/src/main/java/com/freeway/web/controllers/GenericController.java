package com.freeway.web.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 全局的拦截器
 *
 * @author Ajaxfan
 */
@Controller
public class GenericController {
	/**
	 * 捕获系统页面的跳转操作
	 *
	 * @param request
	 * @param path
	 * @return
	 */
	@RequestMapping(value = "{path}")
	public String disp(HttpServletRequest request, @PathVariable(value = "path") String path) {
		// 用户没有登录
		if (request.getSession().getAttribute("freeWayUser") == null) {
			return "redirect:/";
		}
		return path;
	}

	/**
	 * 系统登录
	 *
	 * @return
	 */
	@RequestMapping(value = "systemLogout")
	public String systemLogout(HttpServletRequest request, HttpServletResponse response) {
		// 移除用户的登录状态
		request.getSession().removeAttribute("freeWayUser");

		return "redirect:/";
	}
}
