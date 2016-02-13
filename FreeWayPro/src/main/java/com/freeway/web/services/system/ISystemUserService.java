package com.freeway.web.services.system;

import java.util.List;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroup;
import com.freeway.web.models.SystemUser;
import com.freeway.web.services.abstras.del.IDelete;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * 系统用户
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemUserService extends IQuery<SystemUser>, IDelete<String> {
	/**
	 * @param user
	 * @return
	 */
	public FeedBackMessage addOrUpdate(SystemUser user);

	/**
	 * 待选用户组
	 * 
	 * @param userID
	 * @return
	 */
	public List<SystemGroup> getUserGroups(String userId);
}
