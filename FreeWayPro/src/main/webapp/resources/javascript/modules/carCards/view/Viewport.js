Ext.define('CarCardsModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['CarCardsModule.view.GridPanel'],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});