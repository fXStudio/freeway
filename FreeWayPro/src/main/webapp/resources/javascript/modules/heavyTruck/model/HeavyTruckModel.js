/**
 * 树节点模型对象
 */
Ext.define('HeavyTruckModule.model.HeavyTruckModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance',
         'carIncodeRecognize', 'carExitcodeRecognize'
    ]
});