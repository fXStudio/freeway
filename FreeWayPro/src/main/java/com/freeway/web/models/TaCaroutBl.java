package com.freeway.web.models;

import java.sql.Timestamp;

import javax.persistence.Id;

/**
 * 补卡
 * 
 * @author FXStudio.Ajaxfan
 */
public class TaCaroutBl {
	@Id
	private String recordNo;
	private int snCode;
	private String carIncode;
	private String carExitcode;
	private String exitCode;
	private String lane;
	private char vType;
	private char vExit;
	private String tollId;
	private String boxId;
	private String exitDate;
	private String exitTime;
	private String enteDate;
	private String enteTime;
	private String icCode;
	private int tollFare;
	private String tollType;
	private String acceCode;
	private String admId;
	private char send;
	private String intollId;
	private char vEnte;
	private String tagid;
	private int restFare;
	private String acceGuid;
	private String carFinalcode;
	private String admCarcode;
	private int mark;
	private int axisnum;
	private int totalweight;
	private int ratingweight;
	private int actdistance;
	private int tolldistance;
	private int exceedrate;
	private int basefare;
	private int exceedfare;
	private int totalfare;
	private String carIncodeRecognize;
	private String carExitcodeRecognize;
	private String ticketPrintSign;
	private String carspeed;
	private int fareIn;
	private int fareOut;
	private char convertflag;
	private Timestamp flushdate;

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

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public char getvType() {
		return vType;
	}

	public void setvType(char vType) {
		this.vType = vType;
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

	public int getTollFare() {
		return tollFare;
	}

	public void setTollFare(int tollFare) {
		this.tollFare = tollFare;
	}

	public String getTollType() {
		return tollType;
	}

	public void setTollType(String tollType) {
		this.tollType = tollType;
	}

	public String getAcceCode() {
		return acceCode;
	}

	public void setAcceCode(String acceCode) {
		this.acceCode = acceCode;
	}

	public String getAdmId() {
		return admId;
	}

	public void setAdmId(String admId) {
		this.admId = admId;
	}

	public char getSend() {
		return send;
	}

	public void setSend(char send) {
		this.send = send;
	}

	public String getIntollId() {
		return intollId;
	}

	public void setIntollId(String intollId) {
		this.intollId = intollId;
	}

	public char getvEnte() {
		return vEnte;
	}

	public void setvEnte(char vEnte) {
		this.vEnte = vEnte;
	}

	public String getTagid() {
		return tagid;
	}

	public void setTagid(String tagid) {
		this.tagid = tagid;
	}

	public int getRestFare() {
		return restFare;
	}

	public void setRestFare(int restFare) {
		this.restFare = restFare;
	}

	public String getAcceGuid() {
		return acceGuid;
	}

	public void setAcceGuid(String acceGuid) {
		this.acceGuid = acceGuid;
	}

	public String getCarFinalcode() {
		return carFinalcode;
	}

	public void setCarFinalcode(String carFinalcode) {
		this.carFinalcode = carFinalcode;
	}

	public String getAdmCarcode() {
		return admCarcode;
	}

	public void setAdmCarcode(String admCarcode) {
		this.admCarcode = admCarcode;
	}

	public int getMark() {
		return mark;
	}

	public void setMark(int mark) {
		this.mark = mark;
	}

	public int getAxisnum() {
		return axisnum;
	}

	public void setAxisnum(int axisnum) {
		this.axisnum = axisnum;
	}

	public int getTotalweight() {
		return totalweight;
	}

	public void setTotalweight(int totalweight) {
		this.totalweight = totalweight;
	}

	public int getRatingweight() {
		return ratingweight;
	}

	public void setRatingweight(int ratingweight) {
		this.ratingweight = ratingweight;
	}

	public int getActdistance() {
		return actdistance;
	}

	public void setActdistance(int actdistance) {
		this.actdistance = actdistance;
	}

	public int getTolldistance() {
		return tolldistance;
	}

	public void setTolldistance(int tolldistance) {
		this.tolldistance = tolldistance;
	}

	public int getExceedrate() {
		return exceedrate;
	}

	public void setExceedrate(int exceedrate) {
		this.exceedrate = exceedrate;
	}

	public int getBasefare() {
		return basefare;
	}

	public void setBasefare(int basefare) {
		this.basefare = basefare;
	}

	public int getExceedfare() {
		return exceedfare;
	}

	public void setExceedfare(int exceedfare) {
		this.exceedfare = exceedfare;
	}

	public int getTotalfare() {
		return totalfare;
	}

	public void setTotalfare(int totalfare) {
		this.totalfare = totalfare;
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

	public String getTicketPrintSign() {
		return ticketPrintSign;
	}

	public void setTicketPrintSign(String ticketPrintSign) {
		this.ticketPrintSign = ticketPrintSign;
	}

	public String getCarspeed() {
		return carspeed;
	}

	public void setCarspeed(String carspeed) {
		this.carspeed = carspeed;
	}

	public int getFareIn() {
		return fareIn;
	}

	public void setFareIn(int fareIn) {
		this.fareIn = fareIn;
	}

	public int getFareOut() {
		return fareOut;
	}

	public void setFareOut(int fareOut) {
		this.fareOut = fareOut;
	}

	public char getConvertflag() {
		return convertflag;
	}

	public void setConvertflag(char convertflag) {
		this.convertflag = convertflag;
	}

	public Timestamp getFlushdate() {
		return flushdate;
	}

	public void setFlushdate(Timestamp flushdate) {
		this.flushdate = flushdate;
	}

}
