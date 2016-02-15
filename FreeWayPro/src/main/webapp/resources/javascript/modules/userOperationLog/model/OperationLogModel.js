Ext.define('UserOperationLogModule.model.OperationLogModel', {
	extend: 'Ext.data.Model',
	
	fields: [
        'sysid', 'userid', 'itemid', 
        'opration', 'createTime', 'params'
    ]
});