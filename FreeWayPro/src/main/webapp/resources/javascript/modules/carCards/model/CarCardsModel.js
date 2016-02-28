Ext.define('CarCardsModule.model.CarCardsModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'carIncode',
	    'vType', 'icCode', 'enteDate', 'tollId', 
	    'carIncodeRecognize'
    ]
});