/**
 * 树节点模型对象
 */
Ext.define('UserOperationLogModule.model.Log', {
	extend: 'Ext.data.Model',
	fields: ['sysid', 'userid', 'itemid', 'opration', 'createTime', 'params']
});