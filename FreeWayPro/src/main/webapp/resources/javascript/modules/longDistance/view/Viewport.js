/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('LongDistanceModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'LongDistanceModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
