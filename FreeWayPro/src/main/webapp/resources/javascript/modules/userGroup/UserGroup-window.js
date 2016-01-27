/*
 * 创建新的功能菜单项目
 */
UserGroupWindow = function(groupId) {
    this.form = new Ext.ux.FXSTudioFormPanel({
        id: "userGroupForm",
        region: 'west',
        width: 360,
        margins: '2 3 3 3',
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
            id: 'menus',
            fieldLabel: '可访问菜单',
            name: 'menus',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'groupname',
            fieldLabel: '用户组名称',
            name: 'groupname',
            width: 240,
            allowBlank: false,
            blankText: '用户组名称不能为空'
        }, {
            xtype: 'textarea',
            fieldLabel: '菜单描述',
            name: 'remark',
            width: 240
        }, {
            xtype: 'checkbox',
            fieldLabel: '是否锁定',
            name: 'isLock',
            style: 'margin-top: 6px;'
        }]
    });

    UserGroupWindow.superclass.constructor.call(this, {
        title: '维护用户组',
        iconCls: 'feed-icon',
        id: 'userGroupWindow',
        autoHeight: true,
        width: 620,
        resizable: false,
        plain: true,
        modal: true,
        y: 50,
        autoScroll: true,
        closeAction: 'close',
        buttons: [{
            text: '提交',
            handler: this.addUserGroup,
            scope: this
        }, {
            text: '取消',
            handler: this.close.createDelegate(this, [])
        }],
        items: [{
            layout: 'border',
            height: 280,
            items: [this.form, {
                xtype: 'fieldset',
                region: 'center',
                margins: '2 3 3 0',
                title: '选择要包含的菜单项',
                items: [new Ext.tree.TreePanel({
                    id: 'menuTree',
                    useArrows: true,
                    autoScroll: true,
                    animate: false,
                    enableDD: false,
                    containerScroll: false,
                    rootVisible: false,
                    frame: false,
                    height: 230,
                    root: {
                        nodeType: 'async'
                    },
                    loader: new Ext.tree.TreeLoader({ // 从指定路径中加载tree信息
                        dataUrl: 'services/userGroupMenu/' + groupId
                    }),
                    listeners: {
                        'checkchange': function(node, checked) {
                            if (checked) {
                                node.getUI().addClass('complete');
                            } else {
                                node.getUI().removeClass('complete');
                            }
                        }
                    }
                })]
            }]
        }],
        listeners: {
            "show": function(winObj) {
                Ext.getCmp('groupname').focus(true, 100);
            }
        }
    });

    this.addEvents({
        add: true
    });
}

Ext.extend(UserGroupWindow, Ext.Window, {
    show: function() {
        UserGroupWindow.superclass.show.apply(this, arguments);
    },
    addUserGroup: function() {
        // form表单对象 
        var formObj = Ext.getCmp('userGroupForm').getForm();
        // 检查表单项的录入是否存在问题
        if (formObj.isValid()) {
            // 获得用户选中的可访问菜单ID
            Ext.each(Ext.getCmp('menuTree').getChecked(), function(node) {
                var menus = Ext.getCmp('menus');
                var val = menus.getValue();

                if (val.length > 0) {
                    val += ",";
                }
                menus.setValue(val + node.attributes.sn);
            });

            // 提交表单
            formObj.submit({
                waitMsg: '数据正在处理请稍后', // 提示信息  
                waitTitle: '提示', // 标题  
                url: 'services/userGroupModify', // 请求的url地址  
                method: 'POST', // 请求方式  
                success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                    Ext.getCmp("grid_id").getStore().reload();
                },
                failure: function(form, action) { // 添加失败后，提示用户添加异常
                    Ext.Msg.alert('提示', '系统错误，原因：' + action.result.failureReason);
                }
            });
            // 关闭当前弹出窗
            setTimeout(function() {
                Ext.getCmp("userGroupWindow").close();
            }, 100);
        }
    }
});
