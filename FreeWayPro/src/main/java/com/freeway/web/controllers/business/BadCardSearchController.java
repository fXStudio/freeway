package com.freeway.web.controllers.business;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IBadCardSearchService;

/**
 * 坏卡
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = RequestMethod.POST)
public class BadCardSearchController {
	private @Autowired IBadCardSearchService badCardSearchService;

	/**
	 * 坏卡
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "badCardList")
	public Object badCardList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", badCardSearchService.getSize(cf));// 记录总数
		map.put("items", badCardSearchService.findRecords(cf));// 记录行对象

		return map;
	}
}
