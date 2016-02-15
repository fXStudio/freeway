Ext.define('AbnormalRecordModule.model.AbnormalRecordModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'vExit', 'exitDate', 'enteDate',
        'axisnum', 'totalweight', 'ratingweight',
        'carExitcodeRecognize', 'carIncodeRecognize'
    ]
});