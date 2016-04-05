package com.freeway.web.mappers.inters;

import java.util.List;

import com.freeway.web.protocal.ConditionFiled;

public interface IStatisMapper<T> {

	/**
	 * 统计数据
	 * 
	 * @param fields
	 * @return
	 */
	public List<T> computeStatis(ConditionFiled fields);
}
