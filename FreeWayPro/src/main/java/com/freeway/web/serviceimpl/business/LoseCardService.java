package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.LoseCardMapper;
import com.freeway.web.models.LoseCard;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ILoseCardService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 丢卡
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class LoseCardService implements ILoseCardService {
	private @Autowired LoseCardMapper loseCardMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<LoseCard> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("丢卡查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(fields.getIp());
		oplog.setUserid(fields.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

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
