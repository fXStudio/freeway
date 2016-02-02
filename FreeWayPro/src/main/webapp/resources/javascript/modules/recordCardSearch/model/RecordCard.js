/**
 * 树节点模型对象
 */
Ext.define('RecordCardModule.model.RecordCard', {
	extend: 'Ext.data.Model',
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'icCode', 'enteDate', 'exitName',
        'carExitcode'
    ]
});