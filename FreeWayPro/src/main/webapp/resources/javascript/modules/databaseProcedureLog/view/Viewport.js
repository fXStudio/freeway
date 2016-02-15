/**
 * Car Type Moudle View Layout
 * 
 * @Author Renj
 */
Ext.define('ProcedureLogModule.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ProcedureLogModule.view.GridPanel'
    ],

    layout: 'fit',
    items: {
        xtype: 'gridpanel'
    }
});
