/**
 * 树节点模型对象
 */
Ext.define('LongDistanceModule.model.LongDistance', {
	extend: 'Ext.data.Model',
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance',
         'carIncodeRecognize', 'carExitcodeRecognize'
    ]
});