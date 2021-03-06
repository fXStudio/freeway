package com.freeway.web.services.system;

import com.freeway.web.models.SystemData;
import com.freeway.web.services.abstras.del.IDelete;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * @author FXStudio.Ajaxfan
 */
public interface ISystemDataService extends IQuery<SystemData>, IDelete<String> {

	/**
	 * @param sdata
	 * @return
	 */
	public Object addOrUpdate(SystemData sdata);
}
