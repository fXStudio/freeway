package com.freeway.web.models;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.jmx.snmp.Timestamp;

/**
 * 作业执行日志
 * 
 * @author FXStudio.Ajaxfan
 */
@Table(name = "user_scheduler_job_log")
public class UserSchedulerJobLog {
	@Id
	@Column(name = "log_id")
	private String logId;
	@Column(name = "log_date")
	private Timestamp logDate;
	private String owner;
	@Column(name = "job_name")
	private String jobName;
	@Column(name = "job_class")
	private String jobClass;
	private String operation;
	private String status;
	@Column(name = "additional_info")
	private String additionalInfo;

	public String getLogId() {
		return logId;
	}

	public void setLogId(String logId) {
		this.logId = logId;
	}

	public Timestamp getLogDate() {
		return logDate;
	}

	public void setLogDate(Timestamp logDate) {
		this.logDate = logDate;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getJobClass() {
		return jobClass;
	}

	public void setJobClass(String jobClass) {
		this.jobClass = jobClass;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}
}
