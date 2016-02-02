/**
 * 树节点模型对象
 */
Ext.define('ProcedureLogModule.model.ProcedureLog', {
	extend: 'Ext.data.Model',
	fields: [
	    'logId', 'logDate', 'owner', 'jobName', 
        'jobClass', 'operation', 'status',
        'additionalInfo'
    ]
});