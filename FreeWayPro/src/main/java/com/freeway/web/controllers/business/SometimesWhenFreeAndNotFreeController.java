package com.freeway.web.controllers.business;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ISometimesWhenFreeAndNotFreeService;

/**
 * 时免时不免
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = RequestMethod.POST)
public class SometimesWhenFreeAndNotFreeController {
	private @Autowired ISometimesWhenFreeAndNotFreeService sometimesWhenFreeAndNotFreeService;

	/**
	 * 计重设备异常异常
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "freeTimeList")
	public Object freeTimeList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", sometimesWhenFreeAndNotFreeService.getSize(cf));// 记录总数
		map.put("items", sometimesWhenFreeAndNotFreeService.findRecords(cf));// 记录行对象

		return map;
	}
}
