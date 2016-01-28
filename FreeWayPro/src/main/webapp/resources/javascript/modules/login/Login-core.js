Ext.require([
    'Ext.window.*',
    'Ext.tip.*'
]);
Ext.onReady(function(){
    // 使用表单提示  
    Ext.QuickTips.init();
    // 提示显示在文本框边缘
    Ext.form.Field.prototype.msgTarget = 'side';
    // 排除Mask文件无法正常显示的问题
    Ext.BLANK_IMAGE_URL = "";

    // 登录窗口
    Ext.create('widget.window', {
        id: 'win',
        title: '登入系统',
        header: {
            titlePosition: 2,
            titleAlign: 'center'
        },
        closable: false,
        width: 330,
        height: 200,
        y: Ext.getBody().getHeight() / 2 + 60,
        layout: 'fit',
        items: [{
            xtype: 'form',
            frame: false,
            defaultType: 'textfield',
            bodyStyle: 'padding:12px 0px 0px 12px',
            defaults: {
                labelWidth: 55,
                labelAlign: 'right',
                anchor: '98%'
            },
            items: [
                {
                    allowBlank: false,
                    fieldLabel: '用户名',
                    name: 'user',
                    emptyText: '输入用户名'
                },
                {
                    allowBlank: false,
                    fieldLabel: '密码',
                    name: 'pass',
                    emptyText: '输入密码',
                    inputType: 'password'
                }
            ],
            
            buttons: [
                { text:'Register' },
                { text:'Login' }
            ]
        }]
    }).show();

    Ext.EventManager.onWindowResize(function() {
        Ext.getCmp('win').center();
        Ext.getCmp('win').setPosition(Ext.getCmp('win').getPosition()[0], Ext.getBody().getHeight() / 2 + 60);
    });
});