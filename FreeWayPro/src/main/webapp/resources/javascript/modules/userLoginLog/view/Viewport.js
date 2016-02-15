Ext.define('LoginLogModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'LoginLogModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
