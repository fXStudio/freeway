package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 牌/型不符
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "CAR_TYPE_VIEW")
public class CardTypeDoesNotMatch {
	@Id
	private String recordNo;
	private String enteName;
	private String exitName;
	private String tollId;
	private String icCode;
	private String lane;
	private String vEnte;
	private String vExit;
	private String enteDate;
	private String exitDate;
	private String carIncodeRecognize;
	private String carExitcodeRecognize;
	private String resdes;

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

	public String getExitName() {
		return exitName;
	}

	public void setExitName(String exitName) {
		this.exitName = exitName;
	}

	public String getTollId() {
		return tollId;
	}

	public void setTollId(String tollId) {
		this.tollId = tollId;
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

	public String getvEnte() {
		return vEnte;
	}

	public void setvEnte(String vEnte) {
		this.vEnte = vEnte;
	}

	public String getvExit() {
		return vExit;
	}

	public void setvExit(String vExit) {
		this.vExit = vExit;
	}

	public String getEnteDate() {
		return enteDate;
	}

	public void setEnteDate(String enteDate) {
		this.enteDate = enteDate;
	}

	public String getExitDate() {
		return exitDate;
	}

	public void setExitDate(String exitDate) {
		this.exitDate = exitDate;
	}

	public String getCarIncodeRecognize() {
		return carIncodeRecognize;
	}

	public void setCarIncodeRecognize(String carIncodeRecognize) {
		this.carIncodeRecognize = carIncodeRecognize;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getResdes() {
		return resdes;
	}

	public void setResdes(String resdes) {
		this.resdes = resdes;
	}
}
