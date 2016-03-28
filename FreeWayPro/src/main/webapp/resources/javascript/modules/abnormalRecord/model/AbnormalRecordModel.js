Ext.define('AbnormalRecordModule.model.AbnormalRecordModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'lane', 'enteName',  'exitDate', 'enteDate',
        'exitName', 'axisnum', 'totalweight', 'ratingweight',
        'carExitcodeRecognize'
    ]
});