package com.freeway.web.services.system;

import java.util.List;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemMenu;
import com.freeway.web.services.abstras.del.IDelete;
import com.freeway.web.services.abstras.query.IQuery;
import com.freeway.web.tree.inters.INode;

/**
 * 系统菜单维护
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemMenuService extends IQuery<SystemMenu>, IDelete<String> {
	/**
	 * 添加新的菜单及维护与菜单项的关系
	 * 
	 * @param menu
	 * @return
	 */
	public FeedBackMessage add(SystemMenu menu, String[] itemIds);

	/**
	 * 更新菜单
	 * 
	 * @param menuComplex
	 * @return
	 */
	public FeedBackMessage update(SystemMenu menu, String[] itemIds);

	/**
	 * 展开菜单
	 * 
	 * @param sysid
	 * @return
	 */
	public List<INode> extratMenus(String sysid);
}
