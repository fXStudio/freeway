/**
 * 树节点模型对象
 */
Ext.define('MainModule.model.TreeModel', {
	extend: 'Ext.data.Model',
	fields: ['sn', 'text', 'leaf', 'url']
});