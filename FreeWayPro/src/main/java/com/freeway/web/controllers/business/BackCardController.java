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
import com.freeway.web.services.business.IBackCardService;

/**
 * 返还卡 
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class BackCardController {
	private @Autowired IBackCardService backCardService;

	/**
	 * 返还卡
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "backCardList")
	public Object loseCardList(ConditionFiled cf, HttpServletRequest request) {
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		cf.setIp(IPHelper.getIPAddress(request));
		cf.setLoginUser(user.getSysid());
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", backCardService.getSize(cf));// 记录总数
		map.put("items", backCardService.findRecords(cf));// 记录行对象

		return map;
	}
}
