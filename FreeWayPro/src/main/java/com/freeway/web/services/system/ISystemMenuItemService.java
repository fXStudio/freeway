package com.freeway.web.services.system;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemMenuItem;
import com.freeway.web.services.abstras.del.IDelete;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * 系统菜单项管理
 * 
 * @author FXStudio.Ajaxfan
 */
public interface ISystemMenuItemService extends IQuery<SystemMenuItem>, IDelete<String> {

	/**
	 * 数据新增或修改
	 * 
	 * @param menu_item
	 *            数据对象
	 * @return 处理的结果
	 */
	public FeedBackMessage addOrUpdate(SystemMenuItem menu_item);
}
