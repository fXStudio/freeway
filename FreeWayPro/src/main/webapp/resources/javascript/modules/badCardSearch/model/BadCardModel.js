Ext.define('BadCardSearchModule.model.BadCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteCode', 'lane', 'vEnte', 'vExit',
         'enteDate', 'icCode', 'exitDate', 'exitCode',
         'carIncodeRecognize', 'carExitcodeRecognize',
         'tollFare', 'tollId', 'boxId'
    ]
});