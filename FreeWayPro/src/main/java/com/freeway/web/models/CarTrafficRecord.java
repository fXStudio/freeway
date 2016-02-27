package com.freeway.web.models;

import javax.persistence.Table;

/**
 * 追踪信息管理
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "TRACKING_VIEW")
public class CarTrafficRecord {
	private String recordNo;
	private String tollType;
	private String tollname;
	private String tollDate;
	private String icCode;
	private String lane;
	private String carRecognize;
	private String carCode;
	private String vType;
	private String tollid;

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public String getTollType() {
		return tollType;
	}

	public void setTollType(String tollType) {
		this.tollType = tollType;
	}

	public String getTollname() {
		return tollname;
	}

	public void setTollname(String tollname) {
		this.tollname = tollname;
	}

	public String getTollDate() {
		return tollDate;
	}

	public void setTollDate(String tollDate) {
		this.tollDate = tollDate;
	}

	public String getIcCode() {
		return icCode;
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public String getCarRecognize() {
		return carRecognize;
	}

	public void setCarRecognize(String carRecognize) {
		this.carRecognize = carRecognize;
	}

	public String getCarCode() {
		return carCode;
	}

	public void setCarCode(String carCode) {
		this.carCode = carCode;
	}

	public String getvType() {
		return vType;
	}

	public void setvType(String vType) {
		this.vType = vType;
	}

	public String getTollid() {
		return tollid;
	}

	public void setTollid(String tollid) {
		this.tollid = tollid;
	}
}
