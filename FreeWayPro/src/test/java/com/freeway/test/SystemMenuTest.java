package com.freeway.test;

import java.util.UUID;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.SystemMenu;
import com.freeway.web.services.system.ISystemMenuService;

public class SystemMenuTest {

	@Test
	public void serviceTest() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath*:spring-*.xml");
		// ISystemMenuService dao = (ISystemMenuService)
		// context.getBean("systemMenuService");
		//
		// Example condition = new Example(SystemMenu.class);
		// Criteria criteria = condition.createCriteria();
		// // criteria.andEqualTo("itemname", "wer");
		// condition.setOrderByClause("itemname desc");

		// PageInfo info = new
		// PageInfo(dao.findByConditionAndRowBounds(condition, new RowBounds(1,
		// 10)));

		// System.out.println(info.getTotal());
		// System.out.println(info.getPageNum());
		// System.out.println(info.getPageSize());
		// System.out.println(info.getNextPage());
		// System.out.println(((SystemMenuItem)info.getList().get(0)).getItemname());

		// System.out.println(dao.findByCondition(1, 10, condition).size());
		// del(dao);

		// System.out.println(add(dao).getFailureReason());

		context.close();
	}

	private FeedBackMessage add(ISystemMenuService dao) {
		SystemMenu menu = new SystemMenu();
		menu.setSysid(UUID.randomUUID().toString().replaceAll("-", ""));
		menu.setMenuname("系统管理员");
		menu.setRemark("拥有系统中的所有权限");

		return dao.add(menu, new String[] { "783da8a74ac9445a87b05eabc37d148a", "0458afae0c7f4a7fa0a7c7223a773dc5" });
	}

	private void del(ISystemMenuService dao) {
		dao.del("1f8c7393eed44d36a04ec755e08106c9");
	}

	private FeedBackMessage update(ISystemMenuService dao) {
		SystemMenu menu = new SystemMenu();
		menu.setSysid("3f1258c2c16a4bd8a79cdcf3f8dc0375");
		menu.setMenuname("系统管理员112");
		menu.setRemark("拥有系统中的所有权限");
		
		return dao.update(menu, new String[] { "783da8a74ac9445a87b05eabc37d148a"});
	}
}
