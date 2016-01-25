package com.freeway.web.serviceimpl.system;

import java.util.List;
import java.util.UUID;

import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freeway.web.helper.StringHelper;
import com.freeway.web.mappers.system.SystemMenuItemMapper;
import com.freeway.web.mappers.system.SystemMenuMenuitemMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemMenuItem;
import com.freeway.web.models.SystemMenuMenuitem;
import com.freeway.web.protocal.ConditionFiled;
import com.freeway.web.services.system.ISystemMenuItemService;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

/**
 * 系统菜单项
 *
 * @author FXStudio.Ajaxfan
 */
@Service
final class SystemMenuItemService implements ISystemMenuItemService {
	private @Autowired SystemMenuItemMapper systemMenuItemMapper;
	private @Autowired SystemMenuMenuitemMapper systemMenuMenuitemMapper;

	/**
	 * 通过主键来删除数据
	 *
	 * @param sysid
	 *            系统逐渐
	 * @return 消息
	 */
	@Override
	@Transactional
	public FeedBackMessage del(String sysid) {
		// 删除前需要判断菜单项是否被关联
		if (relationExists(sysid)) {
			return new FeedBackMessage(false, "菜单项被引用，不能删除!");
		}

		// 删除菜单项
		if (systemMenuItemMapper.deleteByPrimaryKey(sysid) > 0) {
			return new FeedBackMessage(true);
		}
		return new FeedBackMessage(false, "没有找到要删除的数据!");
	}

	/**
	 * 数据的添加或删除
	 *
	 * @param menu_item
	 * @return
	 */
	@Override
	@Transactional
	public FeedBackMessage addOrUpdate(SystemMenuItem menu_item) {
		// 更新失败提示
		if (itemDuplicate(menu_item)) {
			return new FeedBackMessage(false, "菜单名重复");
		}

		// 如果sysid为空，则视为添加操作，否则为修改操作
		if (StringHelper.isNullOrEmpty(menu_item.getSysid())) {// 新增数据
			menu_item.setSysid(UUID.randomUUID().toString().replaceAll("-", ""));
			systemMenuItemMapper.insert(menu_item);
		} else {// 更新操作
			systemMenuItemMapper.updateByPrimaryKey(menu_item);
		}
		return new FeedBackMessage(true);
	}

	/**
	 * 所有的菜单项记录
	 * 
	 * @param cf
	 * @return
	 */
	@Override
	public List<SystemMenuItem> findRecords(ConditionFiled cf) {
		return systemMenuItemMapper.selectByExampleAndRowBounds(null,
				new RowBounds(cf.getStart(), cf.getLimit() - cf.getStart()));
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

	// -------------------------------------------------- Private Methond
	/**
	 * 是否存在关联
	 * 
	 * @param sysid
	 * @return
	 */
	private boolean relationExists(String sysid) {
		Example condition = new Example(SystemMenuMenuitem.class);
		condition.createCriteria().andEqualTo("itemid", sysid);

		// 判断菜单项是否存在关联
		return systemMenuMenuitemMapper.selectByExample(condition).size() > 0;
	}

	/**
	 * 是否存在关联
	 * 
	 * @param sysid
	 * @return
	 */
	private boolean itemDuplicate(SystemMenuItem menu_item) {
		Example condition = new Example(SystemMenuItem.class);
		Criteria criteria = condition.createCriteria();

		// 如果是变更，则避免变更后的菜单名重复
		if (!StringHelper.isNullOrEmpty(menu_item.getSysid())) {
			criteria.andNotEqualTo("sysid", menu_item.getSysid());
		}
		// 菜单名作为条件
		criteria.andEqualTo("itemname", menu_item.getItemname());

		// 判断菜单项是否存在关联
		return systemMenuItemMapper.selectByExample(condition).size() > 0;
	}
}
