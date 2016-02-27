Ext.define('HeavyTruckModule.model.HeavyTruckModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance', 'carExitcodeRecognize'
    ]
});