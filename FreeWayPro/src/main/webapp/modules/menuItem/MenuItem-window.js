/*
 * 创建新的功能菜单项目
 */
MenuItemWindow = function() {
    this.form = new Ext.ux.FXSTudioFormPanel({
        id: "menuItemForm",
        border: false, // 不显示边线
        labelWidth: 75, // label的默认宽度
        defaultType: 'textfield', // 默认的组件类型
        defaults: { // 组件的默认样式配置
            cls: 'fxstudio-window-inner-margin3',
            labelStyle: 'margin-top:3px;'
        },
        bodyCssClass: 'fxstudio-window-innerComponent', // 组件体的默认配置
        items: [{
            fieldLabel: '主键',
            name: 'sysid',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'itemname',
            fieldLabel: '菜单名称',
            name: 'itemname',
            width: 240,
            allowBlank: false,
            blankText: '菜单名称不能为空'
        }, {
            fieldLabel: '访问路径',
            name: 'itemlink',
            width: 360,
            allowBlank: false,
            blankText: '菜单访问地址不能为空'
        }, {
            xtype: 'checkbox',
            fieldLabel: '是否锁定',
            name: 'isLock',
            style: 'margin-top: 6px;'
        }]
    });

    MenuItemWindow.superclass.constructor.call(this, {
        title: '维护菜单项',
        iconCls: 'feed-icon',
        id: 'menuItemWindow',
        autoHeight: true,
        width: 500,
        resizable: false,
        plain: true,
        modal: true,
        y: 100,
        autoScroll: true,
        closeAction: 'close',
        buttons: [{
            text: '提交',
            handler: this.addMenuItem,
            scope: this
        }, {
            text: '取消',
            handler: this.close.createDelegate(this, [])
        }],
        items: this.form,
        listeners: {
            "show": function(winObj) {
                Ext.getCmp('itemname').focus(true, 100);
            }
        }
    });

    this.addEvents({
        add: true
    });
}

Ext.extend(MenuItemWindow, Ext.Window, {
    show: function() {
        MenuItemWindow.superclass.show.apply(this, arguments);
    },
    addMenuItem: function() {
        // form表单对象 
        var formObj = Ext.getCmp('menuItemForm').getForm();
        // 检查表单项的录入是否存在问题
        if (formObj.isValid()) {
            // 提交表单
            formObj.submit({
                waitMsg: '数据正在处理请稍后', // 提示信息  
                waitTitle: '提示', // 标题  
                url: '../services/menuItemModify', // 请求的url地址  
                method: 'POST', // 请求方式  
                success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                    Ext.getCmp("grid_id").getStore().reload();
                },
                failure: function(form, action) { // 添加失败后，提示用户添加异常
                    Ext.Msg.alert('失败', '操作未完成，原因：录入信息错误');
                }
            });
            // 关闭当前弹出窗
            setTimeout(function() {
                Ext.getCmp("menuItemWindow").close();
            }, 100);
        }
    }
});
