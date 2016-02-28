Ext.define('TollCollectorModule.model.TollCollectorModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'exitName', 'tollId',
	    'vEnte', 'vExit', 'exitDate', 'enteDate',
	    'totalfare', 'rateInterval', 'carExitcodeRecognize'
    ]
});