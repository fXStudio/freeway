Ext.define('ProcedureLogModule.model.ProcedureLogModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'logId', 'logDate', 'owner', 'jobName', 
        'jobClass', 'operation', 'status',
        'additionalInfo'
    ]
});