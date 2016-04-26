package com.freeway.web.serviceimpl.statis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.statis.PasscardStatisticsMapper;
import com.freeway.web.models.PasscardStatistics;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.statis.IPasscardStatisticsService;

/**
 * 发卡数量统计
 * 
 * @author FXStudio.Ajaxfan
 */
@Service
public class PasscardStatisticsService implements IPasscardStatisticsService {
	private @Autowired PasscardStatisticsMapper passcardStatisticsMapper;

	@Override
	public List<PasscardStatistics> computeStatis(ConditionFiled cf) {
		return passcardStatisticsMapper.computeStatis(cf);
	}
}
