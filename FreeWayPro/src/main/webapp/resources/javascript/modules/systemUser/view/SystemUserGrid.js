Ext.define('SystemUserModule.view.SystemUserGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.SystemUserGrid',
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
        header: '用户名称',
        width: 160,
        sortable: true,
        dataIndex: 'username'
    }, {
        header: '部门编号',
        width: 120,
        dataIndex: 'depid'
    }, {
        id: 'itemLink',
        header: '创建时间',
        width: 160,
        dataIndex: 'createtime'
    }, {
        header: '是否锁定',
        width: 75,
        sortable: true,
        renderer: function (value, p, r) {
            return value === 'on' ? '是' : '--';
        },
        dataIndex: 'isLock'
    }]
});