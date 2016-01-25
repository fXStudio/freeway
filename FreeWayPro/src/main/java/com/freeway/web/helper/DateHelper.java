package com.freeway.web.helper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 * 日期工具类
 * 
 * @author FXStudio.Ajaxfan
 */
public final class DateHelper {
	/** 日期格式化工具类 */
	private static DateFormat DATE_FMT = new SimpleDateFormat("yyyy/MM/dd");

	/**
	 * @return 当月的第一天
	 */
	public static String firstDayOfMonth() {
		Calendar cal = GregorianCalendar.getInstance();
		cal.set(Calendar.DATE, 1);

		return DATE_FMT.format(cal.getTime());
	}

	/**
	 * @return 次月的第一天
	 */
	public static String firstDayOfNextMonth() {
		Calendar cal = GregorianCalendar.getInstance();
		cal.set(Calendar.MONTH, 1);
		cal.set(Calendar.DATE, 1);

		return DATE_FMT.format(cal.getTime());
	}
}
