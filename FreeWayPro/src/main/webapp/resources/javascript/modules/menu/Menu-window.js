/*
 * 创建新的功能菜单项目
 */
MenuWindow = function(id) {
    this.form = new Ext.ux.FXSTudioFormPanel({
        id: "menuForm",
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
            id: 'sysid',
            fieldLabel: '主键',
            name: 'sysid',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'items',
            fieldLabel: '菜单项',
            name: 'items',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'menuname',
            fieldLabel: '菜单名称',
            name: 'menuname',
            width: 240,
            allowBlank: false
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

    MenuWindow.superclass.constructor.call(this, {
        title: '维护菜单',
        iconCls: 'feed-icon',
        id: 'menuWindow',
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
            handler: this.addMenu,
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
                    id: 'treePanel',
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
                        dataUrl: '../services/menuItemList/' + id
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
                Ext.getCmp('menuname').focus(true, 100);
            }
        }
    });

    this.addEvents({
        add: true
    });
}

Ext.extend(MenuWindow, Ext.Window, {
    show: function() {
        MenuWindow.superclass.show.apply(this, arguments);
    },
    addMenu: function() {
        // form表单对象 
        var formObj = Ext.getCmp('menuForm').getForm();
        // 检查表单项的录入是否存在问题
        if (formObj.isValid()) {
            // 用户选择的菜单项列表
            var items = Ext.getCmp('items');
            // 获得用户选中的可访问菜单ID
            Ext.each(Ext.getCmp('treePanel').getChecked(), function(node) {
                var val = items.getValue();

                if (val.length > 0) {
                    val += ",";
                }
                items.setValue(val + node.attributes.sn);
            });
            // 如果用户没有选择项目
            if(items.getValue().length === 0){ items.setValue('-1'); }

            // 提交表单
            formObj.submit({
                waitMsg: '数据正在处理请稍后', // 提示信息  
                waitTitle: '提示', // 标题  
                url: '../services/menuModify', // 请求的url地址  
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
                Ext.getCmp("menuWindow").close();
            }, 100);
        }
    }
});
