Ext.define('MenuItemModule.view.MenuItemWindow', {
	extend: 'Ext.window.Window',
	title: '维护菜单项',
    iconCls: 'feed-icon',
    id: 'systemDataWindow',
    autoHeight: true,
    width: 400,
    resizable: false,
    plain: true,
    modal: true,
    y: 100,
    autoScroll: true,
    closeAction: 'hide',
    buttons: [{
    	id: 'submit_btn',
        text: '提交',
        handler: function() {
            // form表单对象 
            var formObj = Ext.getCmp('systemDataForm').getForm();
            // 检查表单项的录入是否存在问题
            if (formObj.isValid()) {
                // 提交表单
                formObj.submit({
                    waitMsg: '数据正在处理请稍后', // 提示信息  
                    waitTitle: '提示', // 标题  
                    url: 'services/menuItemModify', // 请求的url地址  
                    method: 'POST', // 请求方式  
                    success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                        Ext.getCmp("grid_id").getStore().loadRawData();
                        Ext.getCmp("grid_id").getStore().load();
                    },
                    failure: function(form, action) { // 添加失败后，提示用户添加异常
                        Ext.Msg.alert('失败', '操作未完成，原因：录入信息错误');
                    }
                });
                // 关闭当前弹出窗
                setTimeout(function() {
                    Ext.getCmp("systemDataWindow").hide();
                }, 100);
            }
        },
        scope: this
    }, {
        text: '取消',
        handler: function(){Ext.getCmp("systemDataWindow").hide();}
    }],
    items: Ext.create('MenuItemModule.view.MenuItemForm'),
    listeners: {
        "show": function(winObj) {
            Ext.getCmp('itemname').focus(true, 100);
        }
    }
});