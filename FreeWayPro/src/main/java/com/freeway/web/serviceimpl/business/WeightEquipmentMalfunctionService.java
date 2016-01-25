package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.WeightEquipmentMalfunctionMapper;
import com.freeway.web.models.WeightEquipmentMalfunction;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IWeightEquipmentMalfunctionService;

/**
 * 计重设备异常
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class WeightEquipmentMalfunctionService implements IWeightEquipmentMalfunctionService {
	private @Autowired WeightEquipmentMalfunctionMapper weightEquipmentMalfunctionMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<WeightEquipmentMalfunction> findRecords(ConditionFiled fields) {
		return weightEquipmentMalfunctionMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return weightEquipmentMalfunctionMapper.selectCount(field);
	}
}
