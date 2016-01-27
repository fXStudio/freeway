/*!
 * 菜单项维护
 */
Ext.onReady(function() {
	// 排除Mask文件无法正常显示的问题
	Ext.BLANK_IMAGE_URL = "javascript/plugins/ext/resources/images/default/s.gif";// 使Tip提示可用
    Ext.QuickTips.init();
    // 在控件右边显示错误提示
    Ext.form.Field.prototype.msgTarget = 'side';

    // 创建数据集合
    var store = new Ext.data.JsonStore({
        totalProperty: 'totalCount', // 总的记录条数
        root: 'items', // 返回的json串中，用来存放菜单项信息的数据
        idProperty: 'sysid', // 行标识
        autoDestroy: true, // 数据集自动销毁
        url: 'services/systemDataList', // 数据服务
        fields: [{ // 数据集字段
            name: 'dataname'
        }, {
            name: 'datavalue'
        }, {
            name: 'datadesc'
        }, {
            name: 'sysid'
        }],
        listeners: {
            load: function() { // 数据集合默认选中第一行
                Ext.getCmp("grid_id").getSelectionModel().selectRow(0, true);
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
    // 创建表格对象
    var grid = new Ext.grid.GridPanel({
        id: 'grid_id',
        store: store, // 绑定数据集
        loadMask: true, // 启用数据加载时的Mask
        stripeRows: true, // 表格显示斑马线
        stateId: 'grid', // paging bar on the bottom
        width: 300,
        height: 300,
        sm: new Ext.grid.RowSelectionModel({
            singleSelect: true
        }),
        tbar: new Ext.Toolbar({
            items: [{
                text: '添加',
                handler: addSystemData,
                iconCls: 'add'
            }, {
                text: '修改',
                handler: updateSystemData,
                iconCls: 'update'
            }, '-', {
                text: '删除',
                handler: deleteSystemData,
                iconCls: 'del'
            }, '->', {
                xtype: 'label',
                html: '<span style="margin:5px 6px;font-size:9pt;color:gray;">维护字典项/span>'
            }]
        }),
        columns: [new Ext.grid.RowNumberer({ // 行号
            width: 30
        }), {
            header: '字典项名称',
            width: 160,
            sortable: true,
            dataIndex: 'dataname'
        }, {
            id: 'itemLink',
            header: '字典项值',
            width: 200,
            dataIndex: 'datavalue'
        }, {
            id: 'itemLink',
            header: '字典项描述',
            width: 200,
            dataIndex: 'datadesc'
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
            }
        }
    });

    var viewport = new Ext.Viewport({
        layout: 'fit',
        items: [grid]
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
            handler: addSystemData,
            scope: this
        }, {
            text: '修改',
            iconCls: 'update',
            handler: updateSystemData,
            scope: this
        }, '-', {
            iconCls: 'del',
            text: '删除',
            handler: deleteSystemData,
            scope: this
        }]
    });
});
