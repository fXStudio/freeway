package com.freeway.web.serviceimpl.log;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.mappers.log.UserloginLogMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.UserloginLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUserLoginLogService;

/**
 * 用户登录日志
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class UserLoginLogService implements IUserLoginLogService {
	/** 用户登陆日志数据服务接口 */
	private @Autowired UserloginLogMapper userloginLogMapper;

	/**
	 * 记录用户登录日志
	 *
	 * @param loginLog
	 */
	@Override
	@Transactional
	public FeedBackMessage add(UserloginLog loginLog) {
		if (userloginLogMapper.insertSelective(loginLog) > 0) {
			return new FeedBackMessage(true);
		}
		return new FeedBackMessage(false, "系统错误，请联系管理员");
	}

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<UserloginLog> findRecords(ConditionFiled cf) {
		return userloginLogMapper.findByCondition(cf);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled cf) {
		return userloginLogMapper.selectCount(cf);
	}
}
