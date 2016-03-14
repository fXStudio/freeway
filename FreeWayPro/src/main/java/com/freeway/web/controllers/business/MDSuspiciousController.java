package com.freeway.web.controllers.business;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.IPHelper;
import com.freeway.web.models.SystemUser;
import com.freeway.web.models.TaSuspicious;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IMDSuspiciousService;

/**
 * 坏卡、补录卡维护
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class MDSuspiciousController {
	private @Autowired IMDSuspiciousService mdSuspiciousService;

	/**
	 * 坏卡、补录卡录入
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "suspiciousInput")
	public Object cardInput(HttpServletRequest request) {
		ConditionFiled cf = new ConditionFiled();
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		cf.setIp(IPHelper.getIPAddress(request));
		cf.setLoginUser(user.getSysid());
		
		TaSuspicious card = new TaSuspicious();

		// 动态绑定参数
		for (Field f : TaSuspicious.class.getDeclaredFields()) {
			try {
				BeanUtils.setProperty(card, f.getName(), request.getParameter(f.getName()));
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				e.printStackTrace();
			}
		}
		return mdSuspiciousService.add(card, cf);
	}
	
	/**
	 * 可疑车辆查询
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "suspiciousList")
	public Object badCardList(ConditionFiled cf, HttpServletRequest request) {
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		cf.setIp(IPHelper.getIPAddress(request));
		cf.setLoginUser(user.getSysid());
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCount", mdSuspiciousService.getSize(cf));// 记录总数
		map.put("items", mdSuspiciousService.findRecords(cf));// 记录行对象

		return map;
	}
}
