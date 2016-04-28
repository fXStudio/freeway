package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 货车轻车长途数据
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "LONG_DISTANCE_VIEW")
public class LighterCarLongDistanceRunning {
	@Id
	private String recordNo;
	private Double snCode;
	private String enteName;
	private String exitName;
	private String exitDate;
	private String enteDate;
	private String ucar;
	private String axisnum;
	private String totalweight;
	private String ratingweight;
	private String actdistance;
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

	public String getExitDate() {
		return exitDate;
	}

	public void setExitDate(String exitDate) {
		this.exitDate = exitDate;
	}

	public String getEnteDate() {
		return enteDate;
	}

	public void setEnteDate(String enteDate) {
		this.enteDate = enteDate;
	}

	public String getActdistance() {
		return actdistance;
	}

	public void setActdistance(String actdistance) {
		this.actdistance = actdistance;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
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

	public String getAxisnum() {
		return axisnum;
	}

	public void setAxisnum(String axisnum) {
		this.axisnum = axisnum;
	}

	public Double getSnCode() {
		return snCode;
	}

	public void setSnCode(Double snCode) {
		this.snCode = snCode;
	}

	public String getUcar() {
		return ucar;
	}

	public void setUcar(String ucar) {
		this.ucar = ucar;
	}
}
