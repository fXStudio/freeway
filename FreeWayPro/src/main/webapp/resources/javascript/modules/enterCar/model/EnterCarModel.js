Ext.define('EnterCarModule.model.EnterCarModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'exitName', 'lane', 'vEnte', 
        'vExit', 'exitDate', 'enteDate',
        'axisnum', 'totalweight', 'ratingweight',
        'carExitcodeRecognize', 'carIncodeRecognize', 'carExitcode'
    ]
});