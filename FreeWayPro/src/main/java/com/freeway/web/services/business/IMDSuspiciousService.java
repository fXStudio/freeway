package com.freeway.web.services.business;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.TaSuspicious;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.abstras.query.IQuery;

public interface IMDSuspiciousService  extends  IQuery<TaSuspicious>{
	public FeedBackMessage add(TaSuspicious scar, ConditionFiled cf);
}
