Ext.define('RecordCardModule.model.RecordCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 'vExit',
        'enteDate', 'icCode', 'enteDate', 'exitName',
        'carIncodeRecognize', 'carExitcodeRecognize',
        'tollFare', 'tollId', 'boxId'
    ]
});