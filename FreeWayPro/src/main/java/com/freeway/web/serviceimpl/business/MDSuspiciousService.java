package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.md.TaSuspiciousMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.TaSuspicious;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IMDSuspiciousService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * @author FXStudio.Ajaxfan
 */
@Service
public class MDSuspiciousService implements IMDSuspiciousService {
	private @Autowired TaSuspiciousMapper taSuspiciousMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	@Override
	public FeedBackMessage add(TaSuspicious scar, ConditionFiled cf) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("可疑车辆手工录入");
		oplog.setOperation("添加");
		oplog.setParams(JSONConvertor.object2Json(scar));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());

		// 记录系统的操作日志
		useroprationLogService.add(oplog);

		scar.setRecordNo(UUIDGenerator.random());
		taSuspiciousMapper.insertSelective(scar);

		return new FeedBackMessage(true);
	}

	@Override
	public List<TaSuspicious> findRecords(ConditionFiled cf) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("手工录入可疑车辆查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(cf));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());

		// 记录系统的操作日志
		useroprationLogService.add(oplog);

		return taSuspiciousMapper.findByCondition(cf);
	}

	@Override
	public Integer getSize(ConditionFiled cf) {
		return taSuspiciousMapper.selectCount(cf);
	}
}
