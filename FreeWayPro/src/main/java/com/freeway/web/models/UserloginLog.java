package com.freeway.web.models;

import java.sql.Timestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户登录日志
 * 
 * @author FXStudio.Ajaxfan
 */
public class UserloginLog {
	@GeneratedValue(generator = "UUID")
	@Id
	private String sysid;
	private String userid;
	private Timestamp logintime;
	private String ip;
	private String machine;

	public String getSysid() {
		return sysid;
	}

	public void setSysid(String sysid) {
		this.sysid = sysid;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	public Timestamp getLogintime() {
		return logintime;
	}

	public void setLogintime(Timestamp logintime) {
		this.logintime = logintime;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getMachine() {
		return machine;
	}

	public void setMachine(String machine) {
		this.machine = machine;
	}
}
