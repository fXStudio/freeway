package com.freeway.web.services.abstras.statis;

import java.util.List;

import com.freeway.web.protocal.ConditionFiled;

public interface IStatis<T> {

	/**
	 * @param cf
	 * @return
	 */
	public List<T> computeStatis(ConditionFiled cf);
}
