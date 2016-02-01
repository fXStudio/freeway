package com.freeway.web.mappers.log;

import com.freeway.web.mappers.inters.IMapper;
import com.freeway.web.models.UserloginLog;

import tk.mybatis.mapper.common.base.BaseInsertMapper;

/**
 * 用户登录日志
 * 
 * @author FXStudio.Ajaxfan
 */
public interface UserloginLogMapper extends IMapper<UserloginLog>, BaseInsertMapper<UserloginLog> {
}
