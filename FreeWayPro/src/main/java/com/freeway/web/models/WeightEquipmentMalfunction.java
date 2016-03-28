package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 计重设备异常实体类
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "ABNORMAL_RECORD_VIEW")
public class WeightEquipmentMalfunction {
	@Id
	private String recordNo;
	private String lane;
	private String enteName;
	private String exitName;
	private String enteDate;
	private String exitDate;
	private String axisnum;
	private String totalweight;
	private String ratingweight;
	private String carExitcodeRecognize;

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

	public String getAxisnum() {
		return axisnum;
	}

	public void setAxisnum(String axisnum) {
		this.axisnum = axisnum;
	}

	public String getTotalweight() {
		return totalweight;
	}

	public void setTotalweight(String totalweight) {
		this.totalweight = totalweight;
	}

	public String getRatingweight() {
		return ratingweight;
	}

	public void setRatingweight(String ratingweight) {
		this.ratingweight = ratingweight;
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
}
