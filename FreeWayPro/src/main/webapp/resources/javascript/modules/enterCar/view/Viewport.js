/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('EnterCarModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'EnterCarModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
