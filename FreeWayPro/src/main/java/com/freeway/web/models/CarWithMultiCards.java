package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 一车多卡查询
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "CAR_CARDS_VIEW")
public class CarWithMultiCards {
	@Id
	private String recordNo;
	private String enteName;
	private String carIncode;
	private String lane;
	private Character vType;
	private String enteDate;
	private String carIncodeRecognize;
	private String icCode;
	private String tollId;

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

	public String getTollId() {
		return tollId;
	}

	public void setTollId(String tollId) {
		this.tollId = tollId;
	}
}
