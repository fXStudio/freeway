package com.freeway.web.protocal;

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
	private String stationId = "";
	/** 系统主键 */
	private String sysid;
	/** 用户名 */
	private String username;
	/** 密码 */
	private String password;
	/** 开始页码 */
	private int start;
	/** 显示数量 */
	private int limit;
	/** 登陆用户 */
	private String loginUser = "";
	/** 作业名称 */
	private String jobObjName = "";
	/** 车轴数 */
	private String axisum;
	/** 隐藏空车牌 */
	private boolean hiddenBlank;
	/** 卡类型 */
	private String cardType;

	public String getCarCode() {
		return carCode;
	}

	public void setCarCode(String carCode) {
		this.carCode = carCode;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getIcCode() {
		return icCode;
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public String getStationId() {
		return stationId;
	}

	public void setStationId(String stationId) {
		this.stationId = stationId;
	}

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
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

	public String getLoginUser() {
		return StringHelper.isNullOrEmpty(loginUser) ? "*" : loginUser;
	}

	public void setLoginUser(String loginUser) {
		this.loginUser = loginUser;
	}

	public String getJobObjName() {
		return StringHelper.isNullOrEmpty(jobObjName) ? "*" : jobObjName;
	}

	public void setJobObjName(String jobObjName) {
		this.jobObjName = jobObjName;
	}

	public String getAxisum() {
		return axisum;
	}

	public void setAxisum(String axisum) {
		this.axisum = axisum;
	}

	public boolean isHiddenBlank() {
		return hiddenBlank;
	}

	public void setHiddenBlank(boolean hiddenBlank) {
		this.hiddenBlank = hiddenBlank;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
}
