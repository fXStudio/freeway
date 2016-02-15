/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('CarTypeModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'CarTypeModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
