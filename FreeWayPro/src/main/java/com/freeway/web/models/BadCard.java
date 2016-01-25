package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 坏卡录入
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "ta_carout_bl")
public class BadCard {
	@Id
	private String recordNo;
	private int snCode;
	private String carIncode;
	private String carExitcode;
	private String exitCode;
	private String enteCode;
	private String lane;
	private String vType;
	private String vExit;
	private String tollId;
	private String boxId;
	private String exitDate;
	private String exitTime;
	private String enteDate;
	private String enteTime;
	private String icCode;
	private String tollFare;
	private String tollType;
	private String vEnte;

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public int getSnCode() {
		return snCode;
	}

	public void setSnCode(int snCode) {
		this.snCode = snCode;
	}

	public String getCarIncode() {
		return carIncode;
	}

	public void setCarIncode(String carIncode) {
		this.carIncode = carIncode;
	}

	public String getCarExitcode() {
		return carExitcode;
	}

	public void setCarExitcode(String carExitcode) {
		this.carExitcode = carExitcode;
	}

	public String getExitCode() {
		return exitCode;
	}

	public void setExitCode(String exitCode) {
		this.exitCode = exitCode;
	}

	public String getEnteCode() {
		return enteCode;
	}

	public void setEnteCode(String enteCode) {
		this.enteCode = enteCode;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public String getvType() {
		return vType;
	}

	public void setvType(String vType) {
		this.vType = vType;
	}

	public String getvExit() {
		return vExit;
	}

	public void setvExit(String vExit) {
		this.vExit = vExit;
	}

	public String getTollId() {
		return tollId;
	}

	public void setTollId(String tollId) {
		this.tollId = tollId;
	}

	public String getBoxId() {
		return boxId;
	}

	public void setBoxId(String boxId) {
		this.boxId = boxId;
	}

	public String getExitDate() {
		return exitDate;
	}

	public void setExitDate(String exitDate) {
		this.exitDate = exitDate;
	}

	public String getExitTime() {
		return exitTime;
	}

	public void setExitTime(String exitTime) {
		this.exitTime = exitTime;
	}

	public String getEnteDate() {
		return enteDate;
	}

	public void setEnteDate(String enteDate) {
		this.enteDate = enteDate;
	}

	public String getEnteTime() {
		return enteTime;
	}

	public void setEnteTime(String enteTime) {
		this.enteTime = enteTime;
	}

	public String getIcCode() {
		return icCode;
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public String getTollFare() {
		return tollFare;
	}

	public void setTollFare(String tollFare) {
		this.tollFare = tollFare;
	}

	public String getTollType() {
		return tollType;
	}

	public void setTollType(String tollType) {
		this.tollType = tollType;
	}

	public String getvEnte() {
		return vEnte;
	}

	public void setvEnte(String vEnte) {
		this.vEnte = vEnte;
	}
}
