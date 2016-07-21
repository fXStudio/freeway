Ext.define('AnalyticalModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'AnalyticalModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
