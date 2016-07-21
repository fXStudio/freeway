Ext.define('AnalyticalModule.model.AnalyticalModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'carImage', 'carSn', 'outDate', 'carType', 
         'carBrand', 'carFirm', 'carModel', 'carVersion', 
         'carConfidence', 'carColortype'
    ]
});