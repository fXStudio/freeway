package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.CarTrafficRecordMapper;
import com.freeway.web.models.CarTrafficRecord;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ICarTrafficRecordService;

/**
 * 追踪信息管理
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class CarTrafficRecordService implements ICarTrafficRecordService {
	private @Autowired CarTrafficRecordMapper carTrafficRecordMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<CarTrafficRecord> findRecords(ConditionFiled fields) {
		return carTrafficRecordMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return carTrafficRecordMapper.selectCount(field);
	}
}
