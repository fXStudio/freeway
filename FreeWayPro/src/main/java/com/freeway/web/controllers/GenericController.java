package com.freeway.web.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
		System.out.println(path);
		
		return "index";
//		// 用户没有登录
//		if (request.getSession().getAttribute("freeWayUser") == null) {
//			return "redirect:/";
//		}
//		return path;
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

	/**
	 * Static list of users to simulate Database
	 */
	private static List<User> userList = new ArrayList<User>();

	// Initialize the list with some data for index screen
	static {
		userList.add(new User("Bill", "Gates"));
		userList.add(new User("Steve", "Jobs"));
		userList.add(new User("Larry", "Page"));
		userList.add(new User("Sergey", "Brin"));
		userList.add(new User("Larry", "Ellison"));
	}

	/**
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(@ModelAttribute("model") ModelMap model) {

		model.addAttribute("userList", userList);
		model.addAttribute("scripts", Arrays.asList(new Script("main"), new Script("print")));

		return "index";
	}

	/**
	 * Add a new user into static user lists and display the same into FTL via
	 * redirect
	 * 
	 * @param user
	 * @return Redirect to /index page to display user list
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String add(@ModelAttribute("user") User user) {

		if (null != user && null != user.getFirstname() && null != user.getLastname() && !user.getFirstname().isEmpty()
				&& !user.getLastname().isEmpty()) {

			synchronized (userList) {
				userList.add(user);
			}

		}

		return "redirect:index.html";
	}
}
