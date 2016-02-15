Ext.define('AbnormalRecordModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'AbnormalRecordModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
