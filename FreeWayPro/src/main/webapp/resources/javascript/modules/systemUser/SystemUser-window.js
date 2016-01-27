/**
 * 遍历树
 */
function deepNode(branch){
    // 选中所有的子节点
    branch.expand();
    for(var i = 0; i < branch.childNodes.length; i++) {
        var node = branch.childNodes[i];
        if(!node.isLeaf()) {
            deepNode(node);
        }
        setNodeChecked(node);
    }
    setNodeChecked(branch);return;
}

/**
 * 设置选中节点
 */
function setNodeChecked(node) {
    node.attributes.checked = true; 
    node.ui.checkbox.checked = true;
    node.getUI().addClass('complete');
}

/*
 * 创建新用户
 */
SystemUserWindow = function(userSn) {
    // Form表单对象
    this.form = new Ext.ux.FXSTudioFormPanel({
        id: "systemUserForm",
        border: false, // 不显示边线
        labelWidth: 65, // label的默认宽度
        defaultType: 'textfield',
        labelAlign: 'right',
        frame: true,
        items: [{
            fieldLabel: '主键',
            name: 'sysid',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'depid',
            fieldLabel: '部门',
            name: 'depid',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            fieldLabel: '主键',
            id: 'groupid',
            name: 'groupid',
            width: 60,
            hidden: true,
            hideLabel: true
        }, {
            id: 'username',
            fieldLabel: '用户名称',
            name: 'username',
            width: 380,
            allowBlank: false
        }, {
            fieldLabel: '用户密码',
            inputType: 'password',
            name: 'password',
            width: 380,
            allowBlank: false
        }, {
            xtype: 'checkbox',
            fieldLabel: '是否锁定',
            name: 'isLock'
        }]
    });

    // 创建新用户的窗体
    SystemUserWindow.superclass.constructor.call(this, {
        title: '维护用户',
        iconCls: 'feed-icon',
        id: 'systemUserWindow',
        autoHeight: true,
        width: 500,
        resizable: false,
        plain: true,
        modal: true,
        y: 40,
        autoScroll: true,
        closeAction: 'close',
        items: [this.form, {
            xtype: 'fieldset',
            title: '用户权限设置',
            style: 'margin-top:10px;',
            items: [new Ext.TabPanel({
                width: 460,
                height: 200,
                activeTab: 0,
                items: [new Ext.Panel({
                    title: '用户组',
                    anchor: '100%',
                    items: [{
                        xtype: 'itemselector',
                        name: 'userGroupSelector',
                        id: 'userGroupSelector',
                        hideLabel: true,
                        bodyStyle: 'margin:0px 5px 0px 5px;',
                        imagePath: '../plugins/ext/resources/images/ux/',
                        multiselects: [{
                            id: 'userGroupFromMultiselect',
                            width: 220,
                            height: '150',
                            legend: '可选用户组',
                            store: new Ext.data.Store({
                                autoLoad: true,
                                autoDestroy: true,
                                proxy: new Ext.data.HttpProxy({
                                    method: 'POST',
                                    url: 'services/userGroupFromArray/' + userSn
                                }),
                                reader: new Ext.data.JsonReader({}, ['groupname', 'sysid'])
                            }),
                            displayField: 'groupname',
                            valueField: 'sysid'
                        }, {
                            id: 'userGroupToMultiselect',
                            width: 215,
                            height: '150',
                            legend: '已选用户组',
                            store: new Ext.data.Store({
                                autoLoad: true,
                                autoDestroy: true,
                                proxy: new Ext.data.HttpProxy({
                                    method: 'POST',
                                    url: 'services/userGroupToArray/' + userSn
                                }),
                                reader: new Ext.data.JsonReader({}, ['groupname', 'sysid'])
                            }),
                            displayField: 'groupname',
                            valueField: 'sysid'
                        }],
                        listeners: {
                            'beforeMoveRecord': function() {
                                Ext.getCmp('userGroupSelector').reset();
                            }
                        }
                    }],
                    bbar: ['->', '<b class="tips">* 用户只能属于唯一用户组</b>']
                }), new Ext.Panel({
                    title: '用户所属部门',
                    anchor: '100%',
                    items: [new Ext.tree.TreePanel({
                    id: 'deptTree',
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
                        dataUrl: 'services/departmentList/'+ userSn
                    }),
                    listeners: {
                        'checkchange': function(node, checked) {
                            // 取消掉前面选中的所有
                            Ext.each(Ext.getCmp('deptTree').getChecked(), function(node) {
                                node.attributes.checked = false;
                                node.ui.checkbox.checked = false;
                                node.getUI().removeClass('complete');
                            });
                            deepNode(node);
                        }
                    }
                })]
                })]
            })]
        }],
        buttons: [{
            text: '提交',
            handler: this.addSystemUser,
            scope: this
        }, {
            text: '取消',
            handler: this.close.createDelegate(this, [])
        }],
        listeners: {
            "show": function(winObj) {
                Ext.getCmp('username').focus(true, 100);
            }
        }
    });
}

// 新用户的创建与修改
Ext.extend(SystemUserWindow, Ext.Window, {
    show: function() {
        SystemUserWindow.superclass.show.apply(this, arguments);
    },
    getPrivileged: function(name) {
        var dom = Ext.getDom(name);
        return dom ? dom.value : '';
    },
    addSystemUser: function() {
        // form表单对象 
        var formObj = Ext.getCmp('systemUserForm').getForm();
        // 检查表单项的录入是否存在问题
        if (formObj.isValid()) {
            /** 权限信息 */
            Ext.getCmp('groupid').setValue(this.getPrivileged('userGroupSelector')); // 用户组

            // 获得用户选中的可访问菜单ID
            var depid = Ext.getCmp('depid');
            var nodes = Ext.getCmp('deptTree').getChecked();
            depid.setValue(nodes.length > 0 ? nodes[0].attributes.sn : depid.getValue());

            // 提交表单
            formObj.submit({
                waitMsg: '数据正在处理请稍后', // 提示信息  
                waitTitle: '提示', // 标题  
                url: 'services/systemUserModify', // 请求的url地址  
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
                Ext.getCmp("systemUserWindow").close();
            }, 100);
        }
    }
});
