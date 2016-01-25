package com.freeway.web.services.log;

import com.freeway.web.models.UseroprationLog;
import com.freeway.web.services.abstras.add.IAdd;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * 用户操作日志
 * 
 * @author FXStudio.Ajaxfan
 */
public interface IUseroprationLogService extends IQuery<UseroprationLog>, IAdd<UseroprationLog> {
}
