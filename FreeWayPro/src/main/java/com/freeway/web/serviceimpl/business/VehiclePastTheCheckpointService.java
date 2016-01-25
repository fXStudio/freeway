package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.VehiclePastTheCheckpointMapper;
import com.freeway.web.models.VehiclePastTheCheckpoint;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IVehiclePastTheCheckpointService;

/**
 * 闯关车
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class VehiclePastTheCheckpointService implements IVehiclePastTheCheckpointService {
	private @Autowired VehiclePastTheCheckpointMapper vehiclePastTheCheckpointMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<VehiclePastTheCheckpoint> findRecords(ConditionFiled fields) {
		return vehiclePastTheCheckpointMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return vehiclePastTheCheckpointMapper.selectCount(field);
	}
}
