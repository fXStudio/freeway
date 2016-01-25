package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.CarWithMultiCardsMapper;
import com.freeway.web.models.CarWithMultiCards;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ICarWithMultiCardsService;

/**
 * 一车多卡
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class CarWithMultiCardsService implements ICarWithMultiCardsService {
	private @Autowired CarWithMultiCardsMapper carWithMultiCardsMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<CarWithMultiCards> findRecords(ConditionFiled fields) {
		return carWithMultiCardsMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return carWithMultiCardsMapper.selectCount(field);
	}
}
