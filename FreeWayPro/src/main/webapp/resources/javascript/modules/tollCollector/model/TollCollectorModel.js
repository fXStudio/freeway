/**
 * 树节点模型对象
 */
Ext.define('TollCollectorModule.model.TollCollectorModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'exitName', 'lane',
	    'vEnte', 'vExit', 'exitDate', 'enteDate',
	    'axisnum', 'totalweight', 'ratingweight', 
	    'carIncodeRecognize', 'carExitcodeRecognize',
	    'tollId'
    ]
});