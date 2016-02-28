package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 收费员降档
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "TOLL_COLLECTOR_VIEW")
public class TollDownshift {
	@Id
	private String recordNo;
	private String enteName;
	private String exitName;
	private String vEnte;
	private String vExit;
	private String exitDate;
	private String enteDate;
	private String totalfare;
	private String rateInterval;
	private String carExitcodeRecognize;
	private String tollId;

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

	public String getTotalfare() {
		return totalfare;
	}

	public void setTotalfare(String totalfare) {
		this.totalfare = totalfare;
	}

	public String getRateInterval() {
		return rateInterval;
	}

	public void setRateInterval(String rateInterval) {
		this.rateInterval = rateInterval;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getTollId() {
		return tollId;
	}

	public void setTollId(String tollId) {
		this.tollId = tollId;
	}
}
