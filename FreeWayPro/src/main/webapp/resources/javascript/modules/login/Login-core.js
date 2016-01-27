// 登录页面
Ext.onReady(function() {
    // 使用表单提示  
    Ext.QuickTips.init();
    // 提示显示在文本框边缘
    Ext.form.Field.prototype.msgTarget = 'side';

    //定义表单  
    var loginForm = new Ext.FormPanel({
        id: 'form',
        labelWidth: 55,
        labelAlign: 'right',
        defaultType: 'textfield',
        buttonAlign: 'center',
        bodyStyle: 'padding:6px 0px 0px 8px',
        border: false,
        frame: true,
        applyTo: Ext.getDom("loginForm"),
        defaults: {
            anchor: '92%'
        },
        items: [{ // 定义表单元素  
            id: 'uname',
            fieldLabel: '用户名',
            name: 'username',
            allowBlank: false
        }, {
            inputType: 'password',
            fieldLabel: '密　码',
            maxLength: 16,
            name: 'password',
            allowBlank: false
        }],
        buttons: [{
            text: '登录',
            type: 'submit',
            id: 'sb',
            handler: save
        }, {
            text: '重置',
            handler: function() {
                loginForm.form.reset();
                Ext.getCmp('uname').focus(false, 100);
            }
        }],
        keys: [{
            key: Ext.EventObject.ENTER,
            fn: save,
            scope: this
        }]
    });
    // 提交登录请求
    function save() {
        //验证合法后使用加载进度条  
        if (loginForm.form.isValid()) {
            // form表单对象 
            var formObj = loginForm.getForm();
            // 检查表单项的录入是否存在问题
            if (formObj.isValid()) {
                // 提交表单
                formObj.submit({
                    waitMsg: '数据正在处理请稍后', // 提示信息  
                    waitTitle: '提示', // 标题  
                    url: 'services/systemLogin', // 请求的url地址  
                    method: 'POST', // 请求方式  
                    success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                        // $.ajax({   
                        //      url: "http://128.127.10.191:37799/WebReport/ReportServer?op=fs_load&cmd=sso",//FineBI平台登录验证地址   
                        //      dataType: "jsonp",//跨域采用jsonp方式   
                        //      data: {"username": 'admin', "password": '123'},//将用户名密码值发送过去   
                        //      jsonp: "callback",   
                        //      timeout: 5000,//超时时间（单位：毫秒）   
                        //      success:function(data) {   
                        //             if (data.status === "success") {//验证成功      
                        //                 window.location.href = "main";  
                        //             } else if (data.status === "fail") {   
                        //                 Ext.Msg.alert('提示', 'BI系统连接失败', function() {
                        //                     Ext.getCmp('uname').focus(true, 100);
                        //                 });  
                        //             }   
                        //      },   
                        //      error: function() {
                        //         Ext.Msg.alert('提示', 'BI系统连接失败', function() {
                        //             Ext.getCmp('uname').focus(true, 100);
                        //         });   
                        //      }   
                        // }); 
                        window.location.href = "main";
                    },
                    failure: function(form, action) { // 添加失败后，提示用户添加异常
                        Ext.Msg.alert('提示', '系统错误，原因：' + action.result.failureReason, function() {
                            Ext.getCmp('uname').focus(true, 100);
                        });
                    }
                });
            }
        }
    };
    //定义窗体  
    new Ext.Window({
        id: 'win',
        layout: 'fit',
        title: '登入系统',
        width: 330,
        height: 150,
        y: Ext.getBody().getHeight() / 2 + 60,
        resizable: false,
        draggable: false,
        border: false,
        maximizable: false,
        closeAction: 'close',
        closable: false,
        items: [loginForm]
    }).show(); //显示窗体  
    Ext.getCmp('uname').focus(false, 100);

    Ext.EventManager.onWindowResize(function() {
        Ext.getCmp('win').center();
        Ext.getCmp('win').setPosition(Ext.getCmp('win').getPosition()[0], Ext.getBody().getHeight() / 2 + 60);
    });
});
