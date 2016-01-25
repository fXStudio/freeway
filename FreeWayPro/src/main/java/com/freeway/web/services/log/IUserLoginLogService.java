package com.freeway.web.services.log;

import com.freeway.web.models.UserloginLog;
import com.freeway.web.services.abstras.add.IAdd;
import com.freeway.web.services.abstras.query.IQuery;

/**
 * 用户登录日志
 * 
 * @author FXStudio.Ajaxfan
 */
public interface IUserLoginLogService extends IQuery<UserloginLog>, IAdd<UserloginLog> {
}
