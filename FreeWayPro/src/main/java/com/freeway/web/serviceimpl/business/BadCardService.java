package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.BadCardSearchMapper;
import com.freeway.web.models.BadCard;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IBadCardSearchService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 坏卡
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class BadCardService implements IBadCardSearchService {
	private @Autowired BadCardSearchMapper badCardSearchMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<BadCard> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("坏卡查询");
		oplog.setOpration("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

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
