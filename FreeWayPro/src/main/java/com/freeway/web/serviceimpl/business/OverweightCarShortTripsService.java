package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.OverweightCarShortTripsMapper;
import com.freeway.web.models.OverweightCarShortTrips;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IOverweightCarShortTripsService;

/**
 * 货车重车短途查询
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class OverweightCarShortTripsService implements IOverweightCarShortTripsService {
	private @Autowired OverweightCarShortTripsMapper overweightCarShortTripsMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<OverweightCarShortTrips> findRecords(ConditionFiled fields) {
		return overweightCarShortTripsMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return overweightCarShortTripsMapper.selectCount(field);
	}
}
