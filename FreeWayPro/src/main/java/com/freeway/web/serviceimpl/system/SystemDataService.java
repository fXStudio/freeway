package com.freeway.web.serviceimpl.system;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.helper.JSONConvertor;
import com.freeway.web.helper.StringHelper;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.system.SystemDataMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemData;
import com.freeway.web.models.UseroprationLog;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.log.IUseroprationLogService;
import com.freeway.web.services.system.ISystemDataService;

/**
 * 数据字典
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemDataService implements ISystemDataService {
	private @Autowired SystemDataMapper systemDataMapper;
	private @Autowired IUseroprationLogService useroprationLogService;

	/**
	 * @param cf
	 * @return
	 */
	@Override
	public List<SystemData> findRecords(ConditionFiled cf) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("数据字典查询");
		oplog.setOperation("查询");
		oplog.setParams(JSONConvertor.object2Json(cf));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);

		return systemDataMapper.selectByExampleAndRowBounds(null,
				new RowBounds(cf.getStart(), cf.getLimit() - cf.getStart()));
	}

	/**
	 * @param cf
	 * @return
	 */
	@Override
	public Integer getSize(ConditionFiled cf) {
		throw new UnsupportedOperationException();
	}

	/**
	 * @param t
	 * @return
	 */
	@Override
	@Transactional
	public FeedBackMessage del(String t, ConditionFiled cf) {
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("删除数据字典项");
		oplog.setOperation("删除");
		oplog.setParams("{sysid:" + t + "}");
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
		return new FeedBackMessage(systemDataMapper.deleteByPrimaryKey(t) > 0);
	}

	/**
	 * @param sdata
	 * @return
	 */
	@Override
	@Transactional
	public Object addOrUpdate(SystemData sdata, ConditionFiled cf) {
		if (StringHelper.isNullOrEmpty(sdata.getSysid())) {
			UseroprationLog oplog = new UseroprationLog();
			oplog.setSysid(UUIDGenerator.random());
			oplog.setItem("添加数据字典项");
			oplog.setOperation("添加");
			oplog.setParams(JSONConvertor.object2Json(sdata));
			oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
			oplog.setIp(cf.getIp());
			oplog.setUserid(cf.getLoginUser());
			
			// 记录系统的操作日志
			useroprationLogService.add(oplog);
			
			sdata.setSysid(UUID.randomUUID().toString().replaceAll("-", ""));
			return new FeedBackMessage(systemDataMapper.insertSelective(sdata) > 0);
		}
		UseroprationLog oplog = new UseroprationLog();
		oplog.setSysid(UUIDGenerator.random());
		oplog.setItem("修改数据字典项");
		oplog.setOperation("修改");
		oplog.setParams(JSONConvertor.object2Json(sdata));
		oplog.setCreateTime(new Timestamp(System.currentTimeMillis()));
		oplog.setIp(cf.getIp());
		oplog.setUserid(cf.getLoginUser());
		
		// 记录系统的操作日志
		useroprationLogService.add(oplog);
		
		return new FeedBackMessage(systemDataMapper.updateByPrimaryKey(sdata) > 0);
	}
}
