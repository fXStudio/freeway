package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.CardTypeDoesNotMatchMapper;
import com.freeway.web.models.CardTypeDoesNotMatch;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ICardTypeDoesNotMatchService;

/**
 * 牌/型不符
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class CardTypeDoesNotMatchService implements ICardTypeDoesNotMatchService {
	private @Autowired CardTypeDoesNotMatchMapper cardTypeDoesNotMatchMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<CardTypeDoesNotMatch> findRecords(ConditionFiled fields) {
		return cardTypeDoesNotMatchMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return cardTypeDoesNotMatchMapper.selectCount(field);
	}
}
