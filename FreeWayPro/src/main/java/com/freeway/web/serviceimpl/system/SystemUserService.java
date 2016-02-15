package com.freeway.web.serviceimpl.system;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.helper.MD5Converter;
import com.freeway.web.helper.StringHelper;
import com.freeway.web.helper.UUIDGenerator;
import com.freeway.web.mappers.system.SystemGroupMapper;
import com.freeway.web.mappers.system.SystemUserMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemGroup;
import com.freeway.web.models.SystemUser;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemUserService;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

/**
 * 系统用户
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemUserService implements ISystemUserService {
	private @Autowired SystemUserMapper systemUserMapper;
	private @Autowired SystemGroupMapper systemGroupMapper;

	/**
	 * @param user
	 * @return
	 */
	@Override
	public FeedBackMessage addOrUpdate(SystemUser user) {
		if (StringHelper.isNullOrEmpty(user.getSysid())) {
			user.setSysid(UUIDGenerator.random());
			user.setPassword(MD5Converter.string2MD5(user.getPassword()));
			systemUserMapper.insertSelective(user);
		} else {
			// 判断用户是否修改了密码
			Example condition = new Example(SystemUser.class);
			Criteria criteria = condition.createCriteria();
			criteria.andEqualTo("sysid", user.getSysid());
			criteria.andEqualTo("password", user.getPassword());

			// 只有在密码被修改的情况下，才能执行密码加密操作
			if (systemUserMapper.selectByExample(condition).size() == 0) {
				user.setPassword(MD5Converter.string2MD5(user.getPassword()));
			}
			systemUserMapper.updateByPrimaryKey(user);
		}
		return new FeedBackMessage(true);
	}

	/**
	 * 删除用户信息
	 *
	 * @param sysid
	 *            用户Id
	 * @return 消息
	 */
	@Override
	@Transactional
	public FeedBackMessage del(String sysid) {
		return new FeedBackMessage(systemUserMapper.deleteByPrimaryKey(sysid) > 0);
	}

	/**
	 * 待选用户组
	 *
	 * @param userID
	 * @return
	 */
	@Override
	public List<SystemGroup> getUserGroups(String userId) {
		// 用户信息
		SystemUser user = systemUserMapper.selectByPrimaryKey(userId);

		// 获得全部的用户组信息
		List<SystemGroup> list = systemGroupMapper.selectAll();

		// 判断用户组是否被选中
		if (user != null) {
			for (SystemGroup group : list) {
				if (group.getSysid().equals(user.getGroupid())) {
					group.setRemark("true");
				}
			}
		}
		return list;
	}

	/**
	 * 查询用户登录信息
	 * 
	 * @param fields
	 * @return
	 */
	@Override
	public List<SystemUser> findRecords(ConditionFiled cf) {
		Example condition = new Example(SystemUser.class);
		condition.setOrderByClause("createtime");
		Criteria criteria = condition.createCriteria();
		// 按组搜索用户
		if (!StringHelper.isNullOrEmpty(cf.getSysid())) {
			criteria.andEqualTo("groupid", cf.getSysid());
			return systemUserMapper.selectByExampleAndRowBounds(condition,
					new RowBounds(cf.getStart(), cf.getLimit() - cf.getStart()));
		}
		// 查找全部的用户
		else if (StringHelper.isNullOrEmpty(cf.getUsername()) && StringHelper.isNullOrEmpty((cf.getPassword()))) {
			criteria.andNotEqualTo("visible", "1");// 超级管理员账户不可见
			return systemUserMapper.selectByExampleAndRowBounds(condition,
					new RowBounds(cf.getStart(), cf.getLimit() - cf.getStart()));
		}
		// 查找特定的用户信息
		criteria.andEqualTo("username", cf.getUsername());
		criteria.andEqualTo("password", MD5Converter.string2MD5(cf.getPassword()));

		return systemUserMapper.selectByExample(condition);
	}

	/**
	 * 未实现的接口方法
	 * 
	 * @param cf
	 * @return
	 */
	@Override
	@Deprecated
	public Integer getSize(ConditionFiled cf) {
		throw new UnsupportedOperationException();
	}
}
