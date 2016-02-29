Ext.define('SuspiciousModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
       'SuspiciousModule.view.GridPanel'
    ],
    
    layout: 'fit',
    defaults: { split: true },
    items: [{
        xtype: 'gridpanel'
    }]
});
