Ext.define('CarTypeModule.model.CarTypeModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate', 'enteDate', 
         'tollId', 'icCode', 'carIncodeRecognize',
         'carExitcodeRecognize', 'resdes'
    ]
});