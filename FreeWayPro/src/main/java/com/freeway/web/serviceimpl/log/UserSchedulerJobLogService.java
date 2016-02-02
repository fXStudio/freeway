package com.freeway.web.serviceimpl.log;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.log.UserSchedulerJobLogMapper;
import com.freeway.web.models.UserSchedulerJobLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUserSchedulerJobLogService;

/**
 * 用户操作日志
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class UserSchedulerJobLogService implements IUserSchedulerJobLogService {
	private @Autowired UserSchedulerJobLogMapper userSchedulerJobLogMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<UserSchedulerJobLog> findRecords(ConditionFiled cf) {
		return userSchedulerJobLogMapper.findByCondition(cf);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled cf) {
		return userSchedulerJobLogMapper.selectCount(cf);
	}
}
