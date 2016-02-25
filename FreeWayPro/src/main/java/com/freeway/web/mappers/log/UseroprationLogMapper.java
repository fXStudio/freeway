package com.freeway.web.mappers.log;

import com.freeway.web.mappers.inters.IMapper;
import com.freeway.web.models.UseroprationLog;

import tk.mybatis.mapper.common.base.BaseInsertMapper;

/**
 * 用户操作日志
 * 
 * @author FXStudio.Ajaxfan
 */
public interface UseroprationLogMapper extends BaseInsertMapper<UseroprationLog>, IMapper<UseroprationLog> {
}
