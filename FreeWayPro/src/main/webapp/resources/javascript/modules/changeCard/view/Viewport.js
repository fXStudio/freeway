/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('ChangeCardModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ChangeCardModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
