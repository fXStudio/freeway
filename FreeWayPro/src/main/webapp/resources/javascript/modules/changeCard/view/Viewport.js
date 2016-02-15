Ext.define('ChangeCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['ChangeCardModule.view.GridPanel'],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
