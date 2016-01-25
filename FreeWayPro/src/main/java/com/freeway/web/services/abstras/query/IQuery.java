package com.freeway.web.services.abstras.query;

import java.util.List;

import com.freeway.web.protocal.ConditionFiled;

/**
 * @author FXStudio.Ajaxfan
 */
public interface IQuery<T> {
	/**
	 * @param cf
	 * @return
	 */
	public List<T> findRecords(ConditionFiled cf);
	
	/**
	 * @param cf
	 * @return
	 */
	public Integer getSize(ConditionFiled cf);
}
