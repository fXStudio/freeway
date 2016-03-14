package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.MDCardMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.TaCaroutBl;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IMDCardService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 坏卡补录
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
public class MDCardService implements IMDCardService {
	private @Autowired MDCardMapper mDCardMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param t
	 * @return
	 */
	@Override
	public FeedBackMessage add(TaCaroutBl card, ConditionFiled cf) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("坏卡、补录卡录入");
		oplog.setOperation("添加");
		oplog.setParams(JSONConvertor.object2Json(card));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
		card.setRecordNo(UUIDGenerator.random());
		mDCardMapper.insertSelective(card);

		return new FeedBackMessage(true);
	}
}
