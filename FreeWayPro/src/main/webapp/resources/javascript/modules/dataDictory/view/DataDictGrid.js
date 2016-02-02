Ext.define('DataDictModule.view.DataDictGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.DataDictGrid',
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
        header: '字典项名称',
        width: 160,
        sortable: true,
        dataIndex: 'dataname'
    }, {
        header: '字典项值',
        width: 120,
        dataIndex: 'datavalue'
    }, {
        header: '字典项描述',
        width: 360,
        dataIndex: 'datadesc'
    }]
});