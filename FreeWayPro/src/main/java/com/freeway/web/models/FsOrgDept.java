package com.freeway.web.models;

import javax.persistence.Id;

/**
 * 收费站
 * 
 * @author FXStudio.Ajaxfan
 */
public class FsOrgDept {
	@Id
	private String sysid;
	private String deptName;
	private String deptParantRowid;
	private char activeFlag;
	private String ssxq;
	private char depttype;
	private String bmjc;
	private String stationDepMap;

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getDeptParantRowid() {
		return deptParantRowid;
	}

	public void setDeptParantRowid(String deptParantRowid) {
		this.deptParantRowid = deptParantRowid;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	public String getSsxq() {
		return ssxq;
	}

	public void setSsxq(String ssxq) {
		this.ssxq = ssxq;
	}

	public char getDepttype() {
		return depttype;
	}

	public void setDepttype(char depttype) {
		this.depttype = depttype;
	}

	public String getBmjc() {
		return bmjc;
	}

	public void setBmjc(String bmjc) {
		this.bmjc = bmjc;
	}

	public String getStationDepMap() {
		return stationDepMap;
	}

	public void setStationDepMap(String stationDepMap) {
		this.stationDepMap = stationDepMap;
	}
}
