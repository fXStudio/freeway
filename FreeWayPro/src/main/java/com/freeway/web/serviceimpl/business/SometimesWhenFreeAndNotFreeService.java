package com.freeway.web.serviceimpl.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.SometimesWhenFreeAndNotFreeMapper;
import com.freeway.web.models.SometimesWhenFreeAndNotFree;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ISometimesWhenFreeAndNotFreeService;

/**
 * 时免时不免服务接口
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SometimesWhenFreeAndNotFreeService implements ISometimesWhenFreeAndNotFreeService {
	private @Autowired SometimesWhenFreeAndNotFreeMapper sometimesWhenFreeAndNotFreeMapper;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<SometimesWhenFreeAndNotFree> findRecords(ConditionFiled fields) {
		return sometimesWhenFreeAndNotFreeMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return sometimesWhenFreeAndNotFreeMapper.selectCount(field);
	}
}
