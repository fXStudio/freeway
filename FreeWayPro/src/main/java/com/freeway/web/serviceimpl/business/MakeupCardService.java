package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.MakeupCardMapper;
import com.freeway.web.models.LoseCard;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IMakeupCardService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 信息补录
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class MakeupCardService implements IMakeupCardService {
	private @Autowired MakeupCardMapper makeupCardMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<LoseCard> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("信息补录查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(fields.getIp());
		oplog.setUserid(fields.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

		return makeupCardMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return makeupCardMapper.selectCount(field);
	}
}
