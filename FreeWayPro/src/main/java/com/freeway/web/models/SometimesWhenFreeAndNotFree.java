package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 时免时不免
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "FREE_TIME_VIEW")
public class SometimesWhenFreeAndNotFree {
	@Id
	private String recordNo;
	private String enteName;
	private String exitName;
	private String vType;
	private String vExit;
	private String exitDate;
	private String enteDate;
	private String totalFare;
	private String tollType;
	private String receivable;
	private String exemption;
	private String solidFree;
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

	public String getTotalFare() {
		return totalFare;
	}

	public void setTotalFare(String totalFare) {
		this.totalFare = totalFare;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getTollType() {
		return tollType;
	}

	public void setTollType(String tollType) {
		this.tollType = tollType;
	}

	public String getReceivable() {
		return receivable;
	}

	public void setReceivable(String receivable) {
		this.receivable = receivable;
	}

	public String getExemption() {
		return exemption;
	}

	public void setExemption(String exemption) {
		this.exemption = exemption;
	}

	public String getSolidFree() {
		return solidFree;
	}

	public void setSolidFree(String solidFree) {
		this.solidFree = solidFree;
	}
}
