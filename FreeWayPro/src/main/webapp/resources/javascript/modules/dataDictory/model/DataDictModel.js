/**
 * 树节点模型对象
 */
Ext.define('DataDictModule.model.DataDictModel', {
	extend: 'Ext.data.Model',
	fields: [
	    'sysid', 'dataname', 'datavalue', 'datadesc'
    ]
});