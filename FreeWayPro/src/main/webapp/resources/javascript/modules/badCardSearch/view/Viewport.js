Ext.define('BadCardSearchModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['BadCardSearchModule.view.GridPanel'],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});