package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.TollDownshiftMapper;
import com.freeway.web.models.TollDownshift;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.ITollDownshiftService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 收费员降档
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class TollDownshiftService implements ITollDownshiftService {
	private @Autowired TollDownshiftMapper tollDownshiftMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<TollDownshift> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("收费员降档查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(fields.getIp());
		oplog.setUserid(fields.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

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
