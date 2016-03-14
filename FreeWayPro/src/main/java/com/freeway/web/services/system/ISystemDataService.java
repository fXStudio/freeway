package com.freeway.web.services.system;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemData;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * @author FXStudio.Ajaxfan
 */
public interface ISystemDataService extends IQuery<SystemData> {
	public Object addOrUpdate(SystemData sdata, ConditionFiled cf);

	public FeedBackMessage del(String t, ConditionFiled cf);
}
