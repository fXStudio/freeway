/**
 * 树节点模型对象
 */
Ext.define('CarTypeModule.model.CarType', {
	extend: 'Ext.data.Model',
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'carIncodeRecognize',
         'carExitcodeRecognize'
    ]
});