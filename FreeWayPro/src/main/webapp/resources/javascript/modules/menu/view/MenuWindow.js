Ext.define('MenuModule.view.MenuWindow', {
	extend: 'Ext.window.Window',
	title: '维护菜单',
    iconCls: 'feed-icon',
    id: 'systemDataWindow',
    autoHeight: true,
    width: 580,
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
            	 // 用户选择的菜单项列表
                var items = Ext.getCmp('items');
                // 重置文本内容
                items.setValue('');
                
                // 获得用户选中的可访问菜单ID
                Ext.each(Ext.getCmp('treePanel').getChecked(), function(record) {
                    var val = items.getValue();

                    if (val.length > 0) {
                        val += ",";
                    }
                    items.setValue(val + record.get('sn'));
                });
            	
                // 提交表单
                formObj.submit({
                    waitMsg: '数据正在处理请稍后', // 提示信息  
                    waitTitle: '提示', // 标题  
                    url: 'services/menuModify', // 请求的url地址  
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
    items: [{
    	layout: 'border',
        height: 280,
        items: [
            Ext.create('MenuModule.view.MenuForm', {region:'west', width: 280}), 
            {
	            xtype: 'fieldset',
	            region: 'center',
	            margins: '2 3 3 3',
	            frame: false,
	            title: '选择要包含的菜单项',
	            items: [ Ext.create('MenuModule.view.MenuTreePanel') ]
            }
        ]
    }],
    listeners: {
        "show": function(winObj) {
            Ext.getCmp('menuname').focus(true, 100);
        }
    }
});