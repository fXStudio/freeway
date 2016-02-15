Ext.define('FreeTimeModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'FreeTimeModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
