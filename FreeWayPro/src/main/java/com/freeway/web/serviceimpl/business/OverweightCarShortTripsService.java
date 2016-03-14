package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.OverweightCarShortTripsMapper;
import com.freeway.web.models.OverweightCarShortTrips;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IOverweightCarShortTripsService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 货车重车短途查询
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class OverweightCarShortTripsService implements IOverweightCarShortTripsService {
	private @Autowired OverweightCarShortTripsMapper overweightCarShortTripsMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<OverweightCarShortTrips> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("货车重车短途查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(fields.getIp());
		oplog.setUserid(fields.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

		return overweightCarShortTripsMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return overweightCarShortTripsMapper.selectCount(field);
	}
}
