package com.freeway.web.mappers.inters;

import java.util.List;

import com.freeway.web.protocal.ConditionFiled;

/**
 * 系统的Mapper接口
 * 
 * @author FXStudio.Ajaxfan
 */
public interface IMapper<T> {
	/**
	 * 查询数据
	 * 
	 * @param fields
	 * @return
	 */
	public List<T> findByCondition(ConditionFiled fields);
	
	/**
	 * @param fields TODO
	 * @return 数据的数量
	 */
	public Integer selectCount(ConditionFiled fields);
}
