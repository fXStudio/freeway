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
}
