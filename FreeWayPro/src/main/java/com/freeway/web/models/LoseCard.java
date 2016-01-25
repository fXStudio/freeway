package com.freeway.web.models;

import javax.persistence.Table;

/**
 * 丢卡查询
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "CAR_CARDS_VIEW")
public class LoseCard {
	/** 行标识 */
	private String recordNo;
	/** 入口站名称 */
	private String enteName;
	/** 入口车牌 */
	private String carIncode;
	/** 车道编号 */
	private String lane;
	/** 入口车型 */
	private Character vType;
	/** 入口时间 */
	private String enteDate;
	/** 入口识别全车牌 */
	private String carIncodeRecognize;
	/** IC卡号 */
	private String icCode;

	public String getIcCode() {
		return icCode;
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public String getEnteName() {
		return enteName;
	}

	public void setEnteName(String enteName) {
		this.enteName = enteName;
	}

	public String getCarIncode() {
		return carIncode;
	}

	public void setCarIncode(String carIncode) {
		this.carIncode = carIncode;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public Character getvType() {
		return vType;
	}

	public void setvType(Character vType) {
		this.vType = vType;
	}

	public String getEnteDate() {
		return enteDate;
	}

	public void setEnteDate(String enteDate) {
		this.enteDate = enteDate;
	}

	public String getCarIncodeRecognize() {
		return carIncodeRecognize;
	}

	public void setCarIncodeRecognize(String carIncodeRecognize) {
		this.carIncodeRecognize = carIncodeRecognize;
	}
}
