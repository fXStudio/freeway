Ext.define('AbnormalRecordModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [ 
       'AbnormalRecordModule.view.GridPanel',
       'AbnormalRecordModule.view.PieChart'
    ],

    layout: 'border',
    items: [{
        xtype: 'gridpanel',
        region: 'center'
    }, {
    	xtype: 'panel',
    	layout: 'fit',
    	region: 'east',
    	width: 200,
    	items:[{
 	       xtype: 'piechart'
    	}]
    }]
});
