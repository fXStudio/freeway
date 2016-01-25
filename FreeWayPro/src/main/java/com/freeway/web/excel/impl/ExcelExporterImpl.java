package com.freeway.web.excel.impl;

import java.io.IOException;
import java.io.OutputStream;

import org.springframework.stereotype.Component;

import com.freeway.web.excel.base.BaseExcelParser;
import com.freeway.web.excel.inters.IExcelExporter;

/**
 * 文件的导出操作
 */
@Component("excelExporter")
final class ExcelExporterImpl extends BaseExcelParser implements IExcelExporter {
	/**
	 * 导出模板Excel文件
	 * 
	 * @param out
	 */
	@Override
	public synchronized void export(String filePath, OutputStream out) throws IOException {
		createWorkbook(this.getClass().getResourceAsStream(filePath)).write(out);
	}
}
