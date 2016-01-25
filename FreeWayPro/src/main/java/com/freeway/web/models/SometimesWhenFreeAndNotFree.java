package com.freeway.web.models;

import javax.persistence.Table;

/**
 * 时免时不免
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "FREE_TIME_VIEW")
public class SometimesWhenFreeAndNotFree {
	/** 行标识 */
	private String recordNo;
	/** 入口站名称 */
	private String enteName;
	/** 出口站名称 */
	private String exitName;
	/** 车道编号 */
	private String lane;
	/** 入口类型 */
	private Character vType;
	/** 出口类型 */
	private Character vExit;
	/** 入口时间 */
	private String exitDate;
	/** 出口时间 */
	private String enteDate;
	/** 轴数 */
	private Long axisnum;
	/** 轴总重 */
	private Long totalweight;
	/** 额定重量 */
	private Long ratingweight;
	/** 入口识别车牌 */
	private String carIncodeRecognize;
	/** 出口识别车牌 */
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

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public Character getvType() {
		return vType;
	}

	public void setvType(Character vType) {
		this.vType = vType;
	}

	public Character getvExit() {
		return vExit;
	}

	public void setvExit(Character vExit) {
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

	public Long getAxisnum() {
		return axisnum;
	}

	public void setAxisnum(Long axisnum) {
		this.axisnum = axisnum;
	}

	public Long getTotalweight() {
		return totalweight;
	}

	public void setTotalweight(Long totalweight) {
		this.totalweight = totalweight;
	}

	public Long getRatingweight() {
		return ratingweight;
	}

	public void setRatingweight(Long ratingweight) {
		this.ratingweight = ratingweight;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getCarIncodeRecognize() {
		return carIncodeRecognize;
	}

	public void setCarIncodeRecognize(String carIncodeRecognize) {
		this.carIncodeRecognize = carIncodeRecognize;
	}
}
