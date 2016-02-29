Ext.define('MDSuspiciousModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
       'MDSuspiciousModule.view.MDSuspiciousForm',
       'MDSuspiciousModule.view.GridPanel'
    ],
    
    layout: 'border',
    defaults: { split: true },
    items: [{
        xtype: 'gridpanel',
    	region: 'center'
    }, {
    	region: 'south',
    	xtype: 'mdbadcardform',
        split: false,
        collapsible: false,
        height: 180
    }]
});
