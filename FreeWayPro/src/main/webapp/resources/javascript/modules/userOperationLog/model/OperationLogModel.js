Ext.define('UserOperationLogModule.model.OperationLogModel', {
	extend: 'Ext.data.Model',
	
	fields: [
        'sysid', 'userid', 'item', 
        'opration', 'createTime', 'params'
    ]
});