/**
 * Login Window
 * 
 * @Author Ajaxfan
 */
Ext.define('LoginModule.view.Window', {
	extend: 'Ext.window.Window',
    alias: 'widget.loginWindow',
    
    requires: ['LoginModule.view.Form'],
    
    header: {
    	title: '用户登陆',
        iconCls: 'login'
    },
    closable: false,
    draggable: false,
    resizable: false,
    width: 360,
    height: 190,
    layout: 'fit',   
    items: {xtype: 'loginform'}
})