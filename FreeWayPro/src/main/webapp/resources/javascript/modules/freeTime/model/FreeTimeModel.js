Ext.define('FreeTimeModule.model.FreeTimeModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'vEnte', 
         'vExit', 'exitDate', 'enteDate', 'totalFare', 
         'carExitcodeRecognize', 'tollType', 'mark',
         'receivable', 'solidFree', 'exemption'
    ]
});