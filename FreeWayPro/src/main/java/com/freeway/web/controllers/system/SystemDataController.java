package com.freeway.web.controllers.system;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.models.SystemData;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemDataService;
import com.github.pagehelper.PageInfo;

/**
 * 计重设备异常异常
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = RequestMethod.POST)
public class SystemDataController {
	private @Autowired ISystemDataService systemDataService;

	/**
	 * 字典列表
	 *
	 * @param limit
	 *            单页数据量
	 * @param start
	 *            数据页码
	 * @return
	 */
	@RequestMapping(value = "systemDataList")
	public Object systemDataList(ConditionFiled cf) {
		// 数据集合和分页信息
		PageInfo<SystemData> pageInfo = new PageInfo<SystemData>(systemDataService.findRecords(cf));

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", pageInfo.getTotal());// 记录总数
		map.put("items", pageInfo.getList());// 记录行对象

		return map;
	}

	/**
	 * 删除功能菜单项
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "delSystemData")
	public Object delMenuItem(@RequestParam(value = "sysid", required = true) String sysid) {
		return systemDataService.del(sysid);
	}

	/**
	 * 修改菜单项
	 *
	 * @param sn
	 * @return
	 */
	@RequestMapping(value = "systemDataModify")
	public Object menuItemModify(SystemData sdata) {
		return systemDataService.addOrUpdate(sdata);
	}
}
