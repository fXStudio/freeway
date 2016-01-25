package com.freeway.web.services.system;

import java.util.List;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroup;
import com.freeway.web.services.abstras.del.IDelete;
import com.freeway.web.services.abstras.query.IQuery;
import com.freeway.web.tree.inters.INode;

/**
 * 系统用户组
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemGroupService extends IQuery<SystemGroup>, IDelete<String> {
	/**
	 * 添加用户组
	 * 
	 * @param menuItem
	 * @return
	 */
	public FeedBackMessage add(SystemGroup group, String[] menuIds);

	/**
	 * 修改用户组
	 * 
	 * @param menuItem
	 * @return
	 */
	public FeedBackMessage update(SystemGroup group, String[] menuIds);

	/**
	 * 系统菜单
	 * 
	 * @param groupId
	 * @return
	 */
	public List<INode> getSystemMenu(String groupId);
}
