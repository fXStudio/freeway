/**
 * 树节点模型对象
 */
Ext.define('ChangeCardModule.model.ChangeCard', {
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