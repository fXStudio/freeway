Ext.define('BadCardSearchModule.model.BadCardModel', {
	extend: 'Ext.data.Model',
	
	fields: [
	    'recordNo', 'enteName', 'lane', 'vEnte', 
        'exitName', 'icCode', 'enteDate',
        'carExitcode'
    ]
});