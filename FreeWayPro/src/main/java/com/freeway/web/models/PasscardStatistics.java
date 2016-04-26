package com.freeway.web.models;

import javax.persistence.Table;

/**
 * 发卡统计功能
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "passcard_statistics_view")
public class PasscardStatistics {
	private String stationName;
	private String incards;
	private String outcards;
	private String cardsdate;

	public String getIncards() {
		return incards;
	}

	public void setIncards(String incards) {
		this.incards = incards;
	}

	public String getOutcards() {
		return outcards;
	}

	public void setOutcards(String outcards) {
		this.outcards = outcards;
	}

	public String getCardsdate() {
		return cardsdate;
	}

	public void setCardsdate(String cardsdate) {
		this.cardsdate = cardsdate;
	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
}
