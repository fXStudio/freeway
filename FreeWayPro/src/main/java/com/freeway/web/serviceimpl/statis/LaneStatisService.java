package com.freeway.web.serviceimpl.statis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.statis.LaneStatisMapper;
import com.freeway.web.models.EnteStatis;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.statis.ILaneStatisService;

/**
 * 计重设备异常按出口车道统计数量
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
public class LaneStatisService implements ILaneStatisService {
	private @Autowired LaneStatisMapper laneStatisMapper;

	@Override
	public List<EnteStatis> computeStatis(ConditionFiled cf) {
		return laneStatisMapper.computeStatis(cf);
	}
}
