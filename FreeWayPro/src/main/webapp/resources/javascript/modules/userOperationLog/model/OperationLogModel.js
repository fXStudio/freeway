Ext.define('UserOperationLogModule.model.OperationLogModel', {
	extend: 'Ext.data.Model',
	
	fields: [
        'sysid', 'userid', 'item', 'ip', 
        'operation', 'createTime', 'params'
    ]
});