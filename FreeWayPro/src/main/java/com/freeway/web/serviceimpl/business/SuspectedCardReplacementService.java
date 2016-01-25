package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.SuspectedCardReplacementMapper;
import com.freeway.web.models.SuspectedCardReplacement;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ISuspectedCardReplacementService;

/**
 * 疑似换卡车辆
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SuspectedCardReplacementService implements ISuspectedCardReplacementService {
	private @Autowired SuspectedCardReplacementMapper suspectedCardReplacementMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<SuspectedCardReplacement> findRecords(ConditionFiled fields) {
		return suspectedCardReplacementMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return suspectedCardReplacementMapper.selectCount(field);
	}
}
