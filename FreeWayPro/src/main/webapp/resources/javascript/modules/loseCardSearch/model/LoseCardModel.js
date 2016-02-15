/**
 * 树节点模型对象
 */
Ext.define('LoseCardModule.model.LoseCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'icCode', 'enteDate',
        'carIncodeRecognize'
    ]
});