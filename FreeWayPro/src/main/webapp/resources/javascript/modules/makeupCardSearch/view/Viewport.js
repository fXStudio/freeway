Ext.define('MakeupCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MakeupCardModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
