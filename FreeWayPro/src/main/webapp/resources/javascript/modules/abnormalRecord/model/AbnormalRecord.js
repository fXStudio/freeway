/**
 * 树节点模型对象
 */
Ext.define('AbnormalRecordModule.model.AbnormalRecord', {
	extend: 'Ext.data.Model',
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'vExit', 'exitDate', 'enteDate',
        'axisnum', 'totalweight', 'ratingweight',
        'carExitcodeRecognize', 'carIncodeRecognize'
    ]
});