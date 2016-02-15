Ext.define('TrackingModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'TrackingModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
