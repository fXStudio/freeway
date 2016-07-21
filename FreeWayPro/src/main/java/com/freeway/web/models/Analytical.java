package com.freeway.web.models;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ETC稽查
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "st_analytical_tbl")
public class Analytical {
	@Id
	private String carImage;
	private String carSn;
	private String outDate;
	private String carType;
	private String carBrand;
	private String carFirm;
	private String carModel;
	private String carVersion;
	private String carConfidence;
	private String carColortype;

	public String getCarImage() {
		return carImage;
	}

	public void setCarImage(String carImage) {
		this.carImage = carImage;
	}

	public String getCarSn() {
		return carSn;
	}

	public void setCarSn(String carSn) {
		this.carSn = carSn;
	}

	public String getOutDate() {
		return outDate;
	}

	public void setOutDate(String outDate) {
		this.outDate = outDate;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getCarBrand() {
		return carBrand;
	}

	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}

	public String getCarFirm() {
		return carFirm;
	}

	public void setCarFirm(String carFirm) {
		this.carFirm = carFirm;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getCarVersion() {
		return carVersion;
	}

	public void setCarVersion(String carVersion) {
		this.carVersion = carVersion;
	}

	public String getCarConfidence() {
		return carConfidence;
	}

	public void setCarConfidence(String carConfidence) {
		this.carConfidence = carConfidence;
	}

	public String getCarColortype() {
		return carColortype;
	}

	public void setCarColortype(String carColortype) {
		this.carColortype = carColortype;
	}

}
