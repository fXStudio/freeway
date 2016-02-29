Ext.define('LoginModule.view.Form' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.loginform',
    
    layout: 'border',
    items: [{
    	region: 'north',
    	height: 30,
        split: false,
        border: false,
        bodyStyle: 'background-color:#f5f7f9;'
    }, {
    	xtype: 'form',
    	region: 'north',
        split: false,
    	defaults: {
	    	xtype: 'textfield',
	        labelWidth: 80,
	        labelAlign: 'right',
	        anchor: '98%',
	        allowBlank: false,
	        labelStyle: 'padding-right: 5px;font-size:12pt;padding-top:4pt;'
	    },
	    items: [
	        {
	            id: 'username',
	            name: 'username',
	            fieldLabel: '用户名',
	            emptyText: '输入用户名',
	            style: 'margin-top:10px;'
	        },
	        {
	            inputType: 'password',
	            name: 'password',
	            fieldLabel: '密　码',
	            maxLength: 16,
	            emptyText: '输入密码',
	            enableKeyEvents: true
	        }
	    ],
	    buttons: [
	        {text: '重置', action: 'reset'}, 
	        {text: '登录', type: 'submit',action: 'login'}
	    ]
	 }]
});