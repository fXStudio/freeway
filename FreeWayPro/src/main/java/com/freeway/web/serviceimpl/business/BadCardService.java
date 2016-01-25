package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.BadCardSearchMapper;
import com.freeway.web.models.BadCard;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IBadCardSearchService;

/**
 * 坏卡
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class BadCardService implements IBadCardSearchService {
	private @Autowired BadCardSearchMapper badCardSearchMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<BadCard> findRecords(ConditionFiled fields) {
		return badCardSearchMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return badCardSearchMapper.selectCount(field);
	}
}
