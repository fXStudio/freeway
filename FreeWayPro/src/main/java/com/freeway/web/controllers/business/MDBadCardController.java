package com.freeway.web.controllers.business;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.freeway.web.models.BadCard;
import com.freeway.web.services.business.IMDBadCardService;

/**
 * 坏卡补录
 *
 * @author Ajaxfan
 */
@RestController
@RequestMapping(method = RequestMethod.POST)
public class MDBadCardController {
	private @Autowired IMDBadCardService mdBadCardService;

	/**
	 * 坏卡补录
	 *
	 * @param limit
	 *            开始索引
	 * @param start
	 *            结束索引
	 * @return
	 */
	@RequestMapping(value = "badCardInput")
	public Object badCardInput(HttpServletRequest request) {
		BadCard badCard = new BadCard();
		
		// 动态绑定参数
		for (Field f : BadCard.class.getDeclaredFields()) {
			try {
				BeanUtils.setProperty(badCard, f.getName(), request.getParameter(f.getName()));
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				e.printStackTrace();
			}
		}
		return mdBadCardService.add(badCard);
	}
}
