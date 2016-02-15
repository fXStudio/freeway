Ext.define('RecordCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'RecordCardModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
