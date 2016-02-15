/**
 * 树节点模型对象
 */
Ext.define('RecordCardModule.model.RecordCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'icCode', 'enteDate', 'exitName',
        'carExitcode'
    ]
});