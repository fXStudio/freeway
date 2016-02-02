package com.freeway.web.controllers.system;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemMenu;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemMenuService;
import com.github.pagehelper.PageInfo;

/**
 * 系统菜单管理
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class SystemMenuController {
	private @Autowired ISystemMenuService systemMenuService;

	/**
	 * 菜单列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "menuList")
	public Object menuList(ConditionFiled cf) {
		PageInfo<SystemMenu> pageInfo = new PageInfo<SystemMenu>(systemMenuService.findRecords(cf));
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", pageInfo.getTotal());// 记录总数
		map.put("items", pageInfo.getList());// 记录行对象

		return map;
	}

	/**
	 * 删除功能菜单
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "delMenu")
	public FeedBackMessage deleteMenu(@RequestParam(value = "sysid", required = true) String sysid) {
		return systemMenuService.del(sysid);
	}

	/**
	 * 添加新的菜单项
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "menuModify")
	public FeedBackMessage menuModify(@RequestParam(value = "sysid", required = false, defaultValue = "") String sysid,
			@RequestParam(value = "items", required = false, defaultValue = "") String[] items,
			HttpServletRequest request) {
		SystemMenu vo = new SystemMenu();
		vo.setSysid(sysid);
		vo.setMenuname(request.getParameter("menuname"));
		vo.setRemark(request.getParameter("remark"));

		if ("".equals(sysid)) {
			vo.setSysid(UUIDGenerator.random());
			return systemMenuService.add(vo, items);
		}
		return systemMenuService.update(vo, items);
	}

	/**
	 * 楼栋列表
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "itemList")
	public Object menuItemList(@RequestParam(value = "id", required = false, defaultValue = "") String id) {
		return systemMenuService.extratMenus(id);
	}
}
