/**
 * 树节点模型对象
 */
Ext.define('EnterCarModule.model.EnterCar', {
	extend: 'Ext.data.Model',
	fields: [
	    'recordNo', 'enteName', 'exitName', 'lane', 'vEnte', 
        'vExit', 'exitDate', 'enteDate',
        'axisnum', 'totalweight', 'ratingweight',
        'carExitcodeRecognize', 'carIncodeRecognize', 'carExitcode'
    ]
});