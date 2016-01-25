package com.freeway.web.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 菜单
 * 
 * @author FXStudio.Ajaxfan
 */
public class SystemMenu {
	@GeneratedValue(generator = "UUID")
	@Id
	private String sysid;
	private String menuname;
	private String remark;
	private char islock = '0';

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getMenuname() {
		return menuname;
	}

	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public char getIslock() {
		return islock;
	}

	public void setIslock(char islock) {
		this.islock = islock;
	}
}
