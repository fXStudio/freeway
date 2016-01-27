package com.freeway.web.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.freeway.web.freemarkers.components.inters.IFreeMarkerParser;

/**
 * 模板引擎拦截器
 *
 * @author Ajaxfan
 */
@Controller
public class FreeMarkerController {
	private @Autowired IFreeMarkerParser freeMarkerParser;

	/**
	 * 捕获系统页面的跳转操作
	 *
	 * @param request
	 * @param path
	 * @return
	 */
	@RequestMapping(value = "{path}")
	public String disp(@ModelAttribute("model") ModelMap model, @PathVariable("path") String path) {
		model.addAttribute("configs", freeMarkerParser.getConfigs(path));

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
	@RequestMapping(value = { "/", "index" }, method = RequestMethod.GET)
	public String index(@ModelAttribute("model") ModelMap model) {
		return "index";
	}

	/**
	 * 系统主页处理器
	 * 
	 * @param model
	 *            模型对象
	 * @return 要加载模板名称
	 */
	@RequestMapping(value = "main", method = RequestMethod.GET)
	public String main(@ModelAttribute("model") ModelMap model) {
		return "main";
	}

	/**
	 * 系统描述页
	 * 
	 * @param model
	 *            模型对象
	 * @return 要加载模板名称
	 */
	@RequestMapping(value = "describe", method = RequestMethod.GET)
	public String describe(@ModelAttribute("model") ModelMap model) {
		return "describe";
	}
}
