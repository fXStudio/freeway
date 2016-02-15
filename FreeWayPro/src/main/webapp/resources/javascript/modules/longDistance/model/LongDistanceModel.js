Ext.define('LongDistanceModule.model.LongDistanceModel', {
	extend: 'Ext.data.Model',
	
	fields: [
         'recordNo', 'enteName', 'exitName', 'lane', 
         'vEnte', 'vExit', 'exitDate',
         'enteDate', 'axisnum', 'totalweight', 
         'ratingweight', 'actdistance',
         'carIncodeRecognize', 'carExitcodeRecognize'
    ]
});