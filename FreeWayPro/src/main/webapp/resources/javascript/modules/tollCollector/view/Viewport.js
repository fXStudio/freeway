/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('TollCollectorModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'TollCollectorModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
