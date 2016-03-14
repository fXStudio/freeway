package com.freeway.web.services.business;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.TaCaroutBl;
import com.freeway.web.protocal.ConditionFiled;

/**
 * @author FXStudio.Ajaxfan
 */
public interface IMDCardService {
	public FeedBackMessage add(TaCaroutBl card, ConditionFiled cf);
}
