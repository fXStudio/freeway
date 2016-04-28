Ext.define('ChangeCardModule.model.ChangeCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName',
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'carExitcodeRecognize', 
         'convertflag', 'carType','resdes',
         'axisnum', 'totalweight', 'ratingweight',
    ]
});