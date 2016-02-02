/**
 * 树节点模型对象
 */
Ext.define('MenuModule.model.MenuModel', {
	extend: 'Ext.data.Model',
	fields: [
	    'sysid', 'menuname', 'remark', 'islock'
    ]
});