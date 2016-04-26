package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 闯关车数据
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "ENTER_CAR_VIEW")
public class VehiclePastTheCheckpoint {
	@Id
	private String recordNo;
	private String exitName;
	private String lane;
	private String tollId;
	private String intollId;
	private String exitDate;
	private String carExitcodeRecognize;

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public String getExitName() {
		return exitName;
	}

	public void setExitName(String exitName) {
		this.exitName = exitName;
	}

	public String getExitDate() {
		return exitDate;
	}

	public void setExitDate(String exitDate) {
		this.exitDate = exitDate;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public String getTollId() {
		return tollId;
	}

	public void setTollId(String tollId) {
		this.tollId = tollId;
	}

	public String getIntollId() {
		return intollId;
	}

	public void setIntollId(String intollId) {
		this.intollId = intollId;
	}
}
