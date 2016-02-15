Ext.define('UserOperationLogModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'UserOperationLogModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
