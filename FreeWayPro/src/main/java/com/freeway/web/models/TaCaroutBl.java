package com.freeway.web.models;

import javax.persistence.Id;

/**
 * 补卡
 * 
 * @author FXStudio.Ajaxfan
 */
public class TaCaroutBl {
	@Id
	private String recordNo;
	private String exitCode;
	private String lane;
	private char vExit;
	private String tollId;
	private String boxId;
	private String exitDate;
	private String enteCode;
	private String enteDate;
	private String icCode;
	private int tollFare;
	private char vEnte;
	private String carIncodeRecognize;
	private String carExitcodeRecognize;
	private String cardType;

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public String getExitCode() {
		return exitCode;
	}

	public void setExitCode(String exitCode) {
		this.exitCode = exitCode;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public char getvExit() {
		return vExit;
	}

	public void setvExit(char vExit) {
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

	public String getEnteCode() {
		return enteCode;
	}

	public void setEnteCode(String enteCode) {
		this.enteCode = enteCode;
	}

	public String getEnteDate() {
		return enteDate;
	}

	public void setEnteDate(String enteDate) {
		this.enteDate = enteDate;
	}

	public String getIcCode() {
		return icCode;
	}

	public void setIcCode(String icCode) {
		this.icCode = icCode;
	}

	public int getTollFare() {
		return tollFare;
	}

	public void setTollFare(int tollFare) {
		this.tollFare = tollFare;
	}

	public char getvEnte() {
		return vEnte;
	}

	public void setvEnte(char vEnte) {
		this.vEnte = vEnte;
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

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
}
