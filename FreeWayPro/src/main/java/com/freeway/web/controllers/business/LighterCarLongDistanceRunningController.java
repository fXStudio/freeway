package com.freeway.web.controllers.business;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ILighterCarLongDistanceRunningService;

/**
 * 货车轻车长途
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class LighterCarLongDistanceRunningController {
	private @Autowired ILighterCarLongDistanceRunningService lighterCarLongDistanceRunningService;

	/**
	 * 计重设备异常异常
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "longDistanceList")
	public Object longDistanceList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", lighterCarLongDistanceRunningService.getSize(cf));// 记录总数
		map.put("items", lighterCarLongDistanceRunningService.findRecords(cf));// 记录行对象

		return map;
	}
}
