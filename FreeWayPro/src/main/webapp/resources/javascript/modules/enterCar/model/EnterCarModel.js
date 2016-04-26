Ext.define('EnterCarModule.model.EnterCarModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'exitName','exitDate', 'carExitcodeRecognize',
	    'lane', 'tollId', 'intollId'
    ]
});