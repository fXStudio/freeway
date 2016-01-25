package com.freeway.web.serviceimpl.system;

import java.util.List;
import java.util.UUID;

import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.helper.StringHelper;
import com.freeway.web.mappers.system.SystemDataMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemData;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemDataService;

/**
 * 数据字典
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemDataService implements ISystemDataService {
	private @Autowired SystemDataMapper systemDataMapper;

	/**
	 * @param cf
	 * @return
	 */
	@Override
	public List<SystemData> findRecords(ConditionFiled cf) {
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
	public FeedBackMessage del(String t) {
		return new FeedBackMessage(systemDataMapper.deleteByPrimaryKey(t) > 0);
	}

	/**
	 * @param sdata
	 * @return
	 */
	@Override
	@Transactional
	public Object addOrUpdate(SystemData sdata) {
		if (StringHelper.isNullOrEmpty(sdata.getSysid())) {
			sdata.setSysid(UUID.randomUUID().toString().replaceAll("-", ""));
			return new FeedBackMessage(systemDataMapper.insertSelective(sdata) > 0);
		}
		return new FeedBackMessage(systemDataMapper.updateByPrimaryKey(sdata) > 0);
	}
}
