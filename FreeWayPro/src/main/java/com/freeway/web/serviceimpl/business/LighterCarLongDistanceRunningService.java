package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.LighterCarLongDistanceRunningMapper;
import com.freeway.web.models.LighterCarLongDistanceRunning;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ILighterCarLongDistanceRunningService;

/**
 * 货车轻车长途
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class LighterCarLongDistanceRunningService implements ILighterCarLongDistanceRunningService {
	private @Autowired LighterCarLongDistanceRunningMapper lighterCarLongDistanceRunningMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<LighterCarLongDistanceRunning> findRecords(ConditionFiled fields) {
		return lighterCarLongDistanceRunningMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return lighterCarLongDistanceRunningMapper.selectCount(field);
	}
}
