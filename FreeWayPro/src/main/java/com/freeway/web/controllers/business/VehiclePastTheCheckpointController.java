package com.freeway.web.controllers.business;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.IPHelper;
import com.freeway.web.models.SystemUser;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IVehiclePastTheCheckpointService;

/**
 * 闯关车查询
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class VehiclePastTheCheckpointController {
	private @Autowired IVehiclePastTheCheckpointService vehiclePastTheCheckpointService;

	/**
	 * 闯关车
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "enterCarList")
	public Object enterCarList(ConditionFiled cf, HttpServletRequest request) {
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		cf.setIp(IPHelper.getIPAddress(request));
		cf.setLoginUser(user.getSysid());
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", vehiclePastTheCheckpointService.getSize(cf));// 记录总数
		map.put("items", vehiclePastTheCheckpointService.findRecords(cf));// 记录行对象

		return map;
	}
}
