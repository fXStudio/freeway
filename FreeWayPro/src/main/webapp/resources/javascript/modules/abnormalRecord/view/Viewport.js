Ext.define('AbnormalRecordModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [ 
       'AbnormalRecordModule.view.GridPanel',
       'AbnormalRecordModule.view.PieChart',
       'AbnormalRecordModule.view.ColumnChart'
    ],

    layout: 'border',
    items: [{
        xtype: 'gridpanel',
        region: 'center'
    }, {
    	title: '计重设备异常统计报表',
    	xtype: 'panel',
    	layout: 'border',
    	region: 'south',
        collapsible: true,
        split: true,  
        collapsed: true,
    	height: 300,
    	items:[{
 	       xtype: 'piechart',
 	       region: 'west',
 	       width: 200
 	    },{
 	 	    xtype: 'columnchart',
 	 	    region: 'center'
    	}]
    }]
});
