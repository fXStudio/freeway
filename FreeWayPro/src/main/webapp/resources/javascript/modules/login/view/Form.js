Ext.define('LoginModule.view.Form' ,{
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    
    defaults: {
    	xtype: 'textfield',
        labelWidth: 60,
        labelAlign: 'right',
        anchor: '98%',
        allowBlank: false,
    },
    items: [
        {
            id: 'username',
            name: 'username',
            fieldLabel: '用户名',
            emptyText: '输入用户名'
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
});