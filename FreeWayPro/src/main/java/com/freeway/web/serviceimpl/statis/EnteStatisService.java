package com.freeway.web.serviceimpl.statis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.statis.EnteStatisMapper;
import com.freeway.web.models.EnteStatis;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.statis.IEnteStatisService;

/**
 * 计重设备异常按出口统计数量
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
public class EnteStatisService implements IEnteStatisService {
	private @Autowired EnteStatisMapper enteStatisMapper;

	@Override
	public List<EnteStatis> computeStatis(ConditionFiled cf) {
		return enteStatisMapper.computeStatis(cf);
	}
}
