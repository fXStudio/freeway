/**
 * 树节点模型对象
 */
Ext.define('TrackingModule.model.TrackingModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance',
         'carIncodeRecognize', 'carExitcodeRecognize',
         'icCode'
    ]
});