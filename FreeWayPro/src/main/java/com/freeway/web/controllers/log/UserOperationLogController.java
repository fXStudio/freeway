package com.freeway.web.controllers.log;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 用户操作日志
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class UserOperationLogController {
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * 用户操作日志
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "userOperationLogList")
	public Object userLoginLogList(ConditionFiled cf) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", useroprationLogService.getSize(cf));// 记录总数
		map.put("items", useroprationLogService.findRecords(cf));// 记录行对象

		return map;
	}
}
