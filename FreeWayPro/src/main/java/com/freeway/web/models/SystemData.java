package com.freeway.web.models;

import javax.persistence.Id;

/**
 * @author FXStudio.Ajaxfan
 */
public class SystemData {
	@Id
	private String sysid;
	private String dataname;
	private String datavalue;
	private String datadesc;

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getDataname() {
		return dataname;
	}

	public void setDataname(String dataname) {
		this.dataname = dataname;
	}

	public String getDatavalue() {
		return datavalue;
	}

	public void setDatavalue(String datavalue) {
		this.datavalue = datavalue;
	}

	public String getDatadesc() {
		return datadesc;
	}

	public void setDatadesc(String datadesc) {
		this.datadesc = datadesc;
	}
}
