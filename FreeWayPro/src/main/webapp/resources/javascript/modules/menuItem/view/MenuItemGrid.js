Ext.define('MenuItemModule.view.MenuItemGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.MenuItemGrid',
	id: 'grid_id',
    loadMask: true,
    stripeRows: true,
    stateId: 'grid',
    width: 300,
    height: 300,
    selModel: { checkOnly: true },
    tbar: Ext.create('Ext.toolbar.Toolbar', {
        items: [{
        	id: 'add_btn',
            text: '添加',
            iconCls: 'add'
        }, {
        	id: 'modify_btn',
            text: '修改',
            iconCls: 'update'
        }, '-', {
        	id: 'del_btn',
            text: '删除',
            iconCls: 'del'
        }]
    }),
    columns: [Ext.create('Ext.grid.RowNumberer', { // 行号
        width: 30
    }), {
        header: '菜单项名称',
        width: 240,
        sortable: true,
        dataIndex: 'itemname'
    }, {
        id: 'itemLink',
        header: '访问路径',
        width: 300,
        dataIndex: 'itemlink'
    }, {
        header: '锁定',
        width: 75,
        sortable: true,
        renderer: function (value, p, r) {
            return value === 'on' ? '是' : '--';
        },
        dataIndex: 'islock'
    }]
});