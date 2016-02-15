Ext.define('LoseCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'LoseCardModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
