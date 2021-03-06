package com.freeway.web.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 菜单项
 * 
 * @author FXStudio.Ajaxfan
 */
public class SystemMenuItem {
	@GeneratedValue(generator = "UUID")
	@Id
	private String sysid;
	private String itemname;
	private String itemlink;
	private char islock = '0';

	public String getItemlink() {
		return itemlink;
	}

	public void setItemlink(String itemlink) {
		this.itemlink = itemlink;
	}

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public char getIslock() {
		return islock;
	}

	public void setIslock(char islock) {
		this.islock = islock;
	}

}
