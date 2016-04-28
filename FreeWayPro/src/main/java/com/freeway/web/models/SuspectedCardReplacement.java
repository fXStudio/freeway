package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 换卡车辆信息查询
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "CHANGE_CARD_VIEW")
public class SuspectedCardReplacement {
	@Id
	private String recordNo;
	private String enteName;
	private String exitName;
	private String vEnte;
	private String vExit;
	private String exitDate;
	private String enteDate;
	private String carExitcodeRecognize;
	private String axisnum;
	private String totalweight;
	private String ratingweight;
	private String convertflag;
	private String carType;
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

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getConvertflag() {
		return convertflag;
	}

	public void setConvertflag(String convertflag) {
		this.convertflag = convertflag;
	}

	public String getResdes() {
		return resdes;
	}

	public void setResdes(String resdes) {
		this.resdes = resdes;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
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
}
