package com.freeway.web.serviceimpl.log;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	private @Autowired UserloginLogMapper userloginLogMapper;

	/**
	 * 记录用户登录日志
	 *
	 * @param loginLog
	 */
	@Override
	public FeedBackMessage add(UserloginLog loginLog) {
		return null;
	}

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<UserloginLog> findRecords(ConditionFiled fields) {
		return userloginLogMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return userloginLogMapper.selectCount(null);
	}
}
