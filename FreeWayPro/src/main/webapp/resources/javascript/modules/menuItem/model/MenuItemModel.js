/**
 * 树节点模型对象
 */
Ext.define('MenuItemModule.model.MenuItemModel', {
	extend: 'Ext.data.Model',
	fields: [
	    'sysid', 'itemname', 'itemlink', 'islock'
    ]
});