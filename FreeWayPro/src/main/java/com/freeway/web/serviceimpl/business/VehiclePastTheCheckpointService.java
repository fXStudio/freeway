package com.freeway.web.serviceimpl.business;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.business.VehiclePastTheCheckpointMapper;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.models.VehiclePastTheCheckpoint;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.business.IVehiclePastTheCheckpointService;
import com.freeway.web.services.log.IUseroprationLogService;

/**
 * 闯关车
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class VehiclePastTheCheckpointService implements IVehiclePastTheCheckpointService {
	private @Autowired VehiclePastTheCheckpointMapper vehiclePastTheCheckpointMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param fields
	 * @return
	 */
	@Override
	public List<VehiclePastTheCheckpoint> findRecords(ConditionFiled fields) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("闯关车查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(fields));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(fields.getIp());
		oplog.setUserid(fields.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
		return vehiclePastTheCheckpointMapper.findByCondition(fields);
	}

	/**
	 * @param field
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled field) {
		return vehiclePastTheCheckpointMapper.selectCount(field);
	}
}
