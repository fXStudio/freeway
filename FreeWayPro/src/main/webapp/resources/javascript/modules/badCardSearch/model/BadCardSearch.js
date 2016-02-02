/**
 * 树节点模型对象
 */
Ext.define('BadCardSearchModule.model.BadCardSearch', {
	extend: 'Ext.data.Model',
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'exitName', 'icCode', 'enteDate',
        'carExitcode'
    ]
});