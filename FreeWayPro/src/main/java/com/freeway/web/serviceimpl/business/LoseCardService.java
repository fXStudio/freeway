package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.LoseCardMapper;
import com.freeway.web.models.LoseCard;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ILoseCardService;

/**
 * 丢卡
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class LoseCardService implements ILoseCardService {
	private @Autowired LoseCardMapper loseCardMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<LoseCard> findRecords(ConditionFiled fields) {
		return loseCardMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return loseCardMapper.selectCount(field);
	}
}
