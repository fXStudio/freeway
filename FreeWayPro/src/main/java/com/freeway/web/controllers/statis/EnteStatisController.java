package com.freeway.web.controllers.statis;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.statis.IEnteStatisService;

@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class EnteStatisController {
	private @Autowired IEnteStatisService enteStatisService;

	/**
	 * 计重设备异常按出口统计数量
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "enteStatis")
	public Object userLoginLogList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("items", enteStatisService.computeStatis(cf));// 记录行对象

		return map;
	}
}
