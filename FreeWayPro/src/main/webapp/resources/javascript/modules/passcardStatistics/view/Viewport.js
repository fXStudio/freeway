Ext.define('PasscardStatisticsModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['PasscardStatisticsModule.view.GridPanel'],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});