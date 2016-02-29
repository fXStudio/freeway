package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 偷逃费类型
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "TA_Suspicious")
public class TaSuspicious {
	@Id
	private String recordNo;
	private String vType;
	private String carExitcodeRecognize;
	private String remark;
	private String violationType;

	public String getRecordNo() {
		return recordNo;
	}

	public void setRecordNo(String recordNo) {
		this.recordNo = recordNo;
	}

	public String getvType() {
		return vType;
	}

	public void setvType(String vType) {
		this.vType = vType;
	}

	public String getCarExitcodeRecognize() {
		return carExitcodeRecognize;
	}

	public void setCarExitcodeRecognize(String carExitcodeRecognize) {
		this.carExitcodeRecognize = carExitcodeRecognize;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getViolationType() {
		return violationType;
	}

	public void setViolationType(String violationType) {
		this.violationType = violationType;
	}
}
