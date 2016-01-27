package com.freeway.web.controllers.business;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ITollDownshiftService;

/**
 * 收费员将挡
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class TollDownshiftController {
	private @Autowired ITollDownshiftService tollDownshiftService;

	/**
	 * 收费员将挡
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "tollCollectorList")
	public Object tollCollectorList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", tollDownshiftService.getSize(cf));// 记录总数
		map.put("items", tollDownshiftService.findRecords(cf));// 记录行对象

		return map;
	}
}
