Ext.define('BackCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'BackCardModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
