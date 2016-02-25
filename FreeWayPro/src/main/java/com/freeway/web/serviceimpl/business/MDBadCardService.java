package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.MDBadCardMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.BadCard;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.services.business.IMDBadCardService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 坏卡补录
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
public class MDBadCardService implements IMDBadCardService {
	private @Autowired MDBadCardMapper mDBadCardMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param t
	 * @return
	 */
	@Override
	public FeedBackMessage add(BadCard badCard) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItemid("坏卡补录");
		oplog.setOpration("添加");
		oplog.setParams(JSONConvertor.object2Json(badCard));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
		badCard.setRecordNo(UUID.randomUUID().toString().replaceAll("-", ""));
		mDBadCardMapper.insertSelective(badCard);

		return new FeedBackMessage(true);
	}
}
