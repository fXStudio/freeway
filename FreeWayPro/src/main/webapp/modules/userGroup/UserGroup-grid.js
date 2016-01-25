/*
 * 创建用户组
 */
Ext.onReady(function() {
    // 排除Mask文件无法正常显示的问题
    Ext.BLANK_IMAGE_URL = "../plugins/ext/resources/images/default/s.gif";
    // 使Tip提示可用
    Ext.QuickTips.init();
    // 在控件右边显示错误提示
    Ext.form.Field.prototype.msgTarget = 'side';

    // 创建数据集合
    var store = new Ext.data.JsonStore({
        totalProperty: 'totalCount', // 总的记录条数
        root: 'items', // 返回的json串中，用来存放菜单项信息的数据
        idProperty: 'sysid', // 行标识
        autoDestroy: true, // 数据集自动销毁
        url: '../services/userGroupList', // 数据服务
        fields: [{ // 数据集字段
            name: 'groupname'
        }, {
            name: 'remark'
        }, {
            name: 'sysid'
        }],
        listeners: {
            load: function() {
                // 设置默认选中行
                Ext.getCmp("grid_id").getSelectionModel().selectRow(0, true);
                // 重新加载组用户表
                reloadGroupUsers();
            }
        }
    });
    // 装载数据
    store.load({
        params: {
            start: 0,
            limit: 25
        }
    });

    var userGroupStore = new Ext.data.JsonStore({
        totalProperty: 'totalCount', // 总的记录条数
        root: 'items', // 返回的json串中，用来存放菜单项信息的数据
        idProperty: 'sysid', // 行标识
        autoDestroy: true, // 数据集自动销毁
        url: '../services/groupUserList', // 数据服务
        baseParams: {
            start: 0,
            limit: 5
        },
        fields: [{ // 数据集字段
            name: 'username'
        }, {
            name: 'isLock'
        }, {
            name: 'sysid'
        }]
    });

    // 创建表格对象
    var grid = new Ext.grid.GridPanel({
        id: 'grid_id',
        store: store, // 绑定数据集
        loadMask: true, // 启用数据加载时的Mask
        stripeRows: true, // 表格显示斑马线
        stateId: 'grid', // paging bar on the bottom
        region: 'north',
        height: 300,
        sm: new Ext.grid.RowSelectionModel({
            singleSelect: true
        }),
        tbar: new Ext.Toolbar({
            items: [{
                text: '添加',
                handler: addUserGroup,
                iconCls: 'add'
            }, {
                text: '修改',
                handler: updateUserGroup,
                iconCls: 'update'
            }, '-', {
                text: '删除',
                handler: deleteUserGroup,
                iconCls: 'del'
            }, '->', {
                xtype: 'label',
                html: '<span style="margin:5px 6px;font-size:9pt;color:gray;">用户组维护</span>'
            }]
        }),
        columns: [new Ext.grid.RowNumberer({ // 行号
            width: 30
        }), {
            header: '用户组名称',
            width: 160,
            sortable: true,
            dataIndex: 'groupname'
        }, {
            id: 'itemLink',
            header: '菜单描述',
            width: 300,
            dataIndex: 'remark'
        }],
        bbar: new Ext.PagingToolbar({ // 表格底部工具条样式
            pageSize: 25,
            store: store, // 数据集合
            displayInfo: true,
            displayMsg: '当前显示 {0} - {1} &nbsp;&nbsp; 共有{2}条记录',
            emptyMsg: "没有相关信息",
            refreshText: "刷新"
        }),
        listeners: {
            // 表格右键菜单
            contextmenu: function(e) {
                menu.showAt(e.getXY());
            },
            rowclick: function(grid, rowIndex, e) {
                reloadGroupUsers();
            }
        }
    });

    var viewport = new Ext.Viewport({
        layout: 'border',
        defaults: {
            split: true
        },
        items: [grid, new Ext.grid.GridPanel({
            id: 'groupUsers',
            store: userGroupStore, // 绑定数据集
            loadMask: true, // 启用数据加载时的Mask
            stripeRows: true, // 表格显示斑马线
            stateId: 'grid', // paging bar on the bottom
            region: 'center',
            sm: new Ext.grid.RowSelectionModel({
                singleSelect: true
            }),
            tbar: [
                '<strong>组内用户列表</strong>'
            ],
            columns: [new Ext.grid.RowNumberer({ // 行号
                width: 30
            }), {
                header: '用户名称',
                width: 160,
                sortable: true,
                dataIndex: 'username'
            }, {
                header: '是否锁定',
                width: 75,
                sortable: true,
                renderer: renderLock,
                dataIndex: 'isLock'
            }],
            bbar: new Ext.PagingToolbar({ // 表格底部工具条样式
                pageSize: 5,
                store: userGroupStore, // 数据集合
                displayInfo: true,
                displayMsg: '当前显示 {0} - {1} &nbsp;&nbsp; 共有{2}条记录',
                emptyMsg: "没有相关信息",
                refreshText: "刷新"
            })
        })]
    });

    // 禁止整个页面的右键
    Ext.getDoc().on("contextmenu", function(e) {
        e.stopEvent();
    });

    // 弹出菜单对象
    var menu = new Ext.menu.Menu({
        items: [{
            iconCls: 'add',
            text: '添加',
            handler: addUserGroup,
            scope: this
        }, {
            text: '修改',
            iconCls: 'update',
            handler: updateUserGroup,
            scope: this
        }, '-', {
            iconCls: 'del',
            text: '删除',
            handler: deleteUserGroup,
            scope: this
        }]
    });

    // 菜单锁定状态列的绘画
    function renderLock(value, p, r) {
        return value === 'on' ? '是' : '--';
    }

    function reloadGroupUsers() { // 数据集合默认选中第一行
        // 当前选中记录
        var record = Ext.getCmp("grid_id").getSelectionModel().getSelected();

        // 检查记录是否存在
        if (record) {
            var storeObj = Ext.getCmp("groupUsers").getStore();
            // 设置组ID
            storeObj.setBaseParam("sysid", record.get("sysid"));
            storeObj.load({// 加载表单数据
                params: {
                	sysid: record.get("sysid"),
                    start: 0,
                    limit: 5
                }
            }, false);
        }
    }
});
