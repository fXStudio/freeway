Ext.define('CarCardsModule.model.TrackingModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'tollType', 'tollname', 'tollDate', 
         'icCode', 'lane', 'carRecognize',
         'carCode', 'vType', 'tollid'
    ]
});