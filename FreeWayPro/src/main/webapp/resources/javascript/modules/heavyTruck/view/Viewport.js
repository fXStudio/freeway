/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('HeavyTruckModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'HeavyTruckModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
