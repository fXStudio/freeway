package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.CardTypeDoesNotMatchMapper;
import com.freeway.web.models.CardTypeDoesNotMatch;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ICardTypeDoesNotMatchService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 牌/型不符
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class CardTypeDoesNotMatchService implements ICardTypeDoesNotMatchService {
	private @Autowired CardTypeDoesNotMatchMapper cardTypeDoesNotMatchMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<CardTypeDoesNotMatch> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItemid("牌/型不符");
		oplog.setOpration("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
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
