package com.freeway.web.serviceimpl.log;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.log.UseroprationLogMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 用户操作日志
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class UseroprationLogService implements IUseroprationLogService {
	private @Autowired UseroprationLogMapper useroprationLogMapper;

	/**
	 * 添加新的日志
	 *
	 * @param operationLog
	 */
	@Override
	public FeedBackMessage add(UseroprationLog operationLog) {
		return new FeedBackMessage(useroprationLogMapper.insert(operationLog) > 0);
	}

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<UseroprationLog> findRecords(ConditionFiled fields) {
		return useroprationLogMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return useroprationLogMapper.selectCount(field);
	}
}
