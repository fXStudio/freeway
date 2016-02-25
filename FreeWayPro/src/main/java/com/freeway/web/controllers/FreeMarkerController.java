package com.freeway.web.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.freeway.web.models.SystemUser;

/**
 * 模板引擎拦截器
 *
 * @author Ajaxfan
 */
@Controller
@RequestMapping(method = RequestMethod.GET)
public class FreeMarkerController {
	/**
	 * 捕获系统页面的跳转操作
	 *
	 * @param request
	 * @param path
	 * @return
	 */
	@RequestMapping(value = "{path}")
	public String disp(@ModelAttribute("model") ModelMap model, @PathVariable("path") String path,
			HttpServletRequest request) {
		// 用户信息如果不存在，则说明session已经失效。应该让用户重新登录系统
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		model.addAttribute("modelName", user == null ? "exitSystem" : path);

		return "func";
	}

	/**
	 * 系统登录
	 *
	 * @return
	 */
	@RequestMapping(value = "systemLogout")
	public String systemLogout(HttpServletRequest request) {
		// 移除用户的登录状态
		request.getSession().removeAttribute("freeWayUser");

		return "redirect:/";
	}

	/**
	 * 管理系统登录页面处理
	 * 
	 * @param model
	 *            模型对象
	 * @return 要加载模板名称
	 */
	@RequestMapping(value = { "/", "index" })
	public String index() {
		return "index";
	}

	/**
	 * 系统主页处理器
	 * 
	 * @param model
	 *            模型对象
	 * @return 要加载模板名称
	 */
	@RequestMapping(value = "main")
	public String main(@ModelAttribute("model") ModelMap model, HttpServletRequest request) {
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		// 如果用户登录信息不存在，则强制用户重新登陆
		if (user == null) {
			return "index";
		}
		model.put("username", user.getUsername());

		return "main";
	}

	/**
	 * 系统描述页
	 * 
	 * @param model
	 *            模型对象
	 * @return 要加载模板名称
	 */
	@RequestMapping(value = "describe")
	public String describe() {
		return "describe";
	}
}
