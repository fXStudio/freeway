package com.freeway.web.controllers.business;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.helper.IPHelper;
import com.freeway.web.models.SystemUser;
import com.freeway.web.models.TaCaroutBl;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IMDCardService;

/**
 * 坏卡、补录卡维护
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(value = "services", method = RequestMethod.POST)
public class MDCardController {
	private @Autowired IMDCardService mdCardService;

	/**
	 * 坏卡、补录卡录入
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "cardInput")
	public Object cardInput(HttpServletRequest request) {
		ConditionFiled cf = new ConditionFiled();
		SystemUser user = (SystemUser) request.getSession().getAttribute("freeWayUser");
		cf.setIp(IPHelper.getIPAddress(request));
		cf.setLoginUser(user.getSysid());
		
		TaCaroutBl card = new TaCaroutBl();

		// 动态绑定参数
		for (Field f : TaCaroutBl.class.getDeclaredFields()) {
			try {
				BeanUtils.setProperty(card, f.getName(), request.getParameter(f.getName()));
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				e.printStackTrace();
			}
		}
		return mdCardService.add(card, cf);
	}
}
