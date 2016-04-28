Ext.define('HeavyTruckModule.model.HeavyTruckModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'snCode', 'enteName', 'exitName', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 'ucar',
         'ratingweight', 'actdistance', 'carExitcodeRecognize'
    ]
});