Ext.define('ChangeCardModule.model.ChangeCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance',
         'tolldistance', 'carIncodeRecognize',
         'icCode'
    ]
});