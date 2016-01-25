package com.freeway.web.protocal;

import com.freeway.web.helper.DateHelper;
import com.freeway.web.helper.StringHelper;

/**
 * 数据过滤条件字段
 * 
 * @author FXStudio.Ajaxfan
 */
public class ConditionFiled {
	/** 车牌号 */
	private String carCode = "";
	/** 开始日期 */
	private String beginDate;
	/** 结束日期 */
	private String endDate;
	/** IC卡号 */
	private String icCode = "";
	/** 出口收费站名称 */
	private String exitName = "";
	/** 系统主键 */
	private String sysid;
	/** 入口站 */
	private String enteName = "";
	/** 用户名 */
	private String username;
	/** 密码 */
	private String password;
	/** 开始页码 */
	private int start;
	/** 显示数量 */
	private int limit;

	public String getCarCode() {
		return carCode + "$";
	}

	public void setCarCode(String carCode) {
		this.carCode = carCode;
	}

	public String getBeginDate() {
		if (StringHelper.isNullOrEmpty(beginDate)) {
			setBeginDate(DateHelper.firstDayOfMonth());
		}
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		if (StringHelper.isNullOrEmpty(endDate)) {
			setEndDate(DateHelper.firstDayOfNextMonth());
		}
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getIcCode() {
		return icCode + "$";
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public String getExitName() {
		return exitName + "$";
	}

	public void setExitName(String exitName) {
		this.exitName = exitName;
	}

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getEnteName() {
		return enteName + "$";
	}

	public void setEnteName(String enteName) {
		this.enteName = enteName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return start + limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
}
