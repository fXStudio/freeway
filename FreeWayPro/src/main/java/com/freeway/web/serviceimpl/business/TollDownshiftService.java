package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.TollDownshiftMapper;
import com.freeway.web.models.TollDownshift;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ITollDownshiftService;

/**
 * 收费员降档
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class TollDownshiftService implements ITollDownshiftService {
	private @Autowired TollDownshiftMapper tollDownshiftMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<TollDownshift> findRecords(ConditionFiled fields) {
		return tollDownshiftMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return tollDownshiftMapper.selectCount(field);
	}
}
