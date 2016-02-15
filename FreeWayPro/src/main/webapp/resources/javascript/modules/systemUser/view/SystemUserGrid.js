Ext.define('SystemUserModule.view.SystemUserGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.systemusergrid',

    requires: ["Ext.plugins.Paging"],
	
    selModel: { checkOnly: true },
    defaults: { sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
        header: '用户名称',
        width: 160,
        dataIndex: 'username'
    }, {
        id: 'itemLink',
        header: '创建时间',
        width: 160,
        dataIndex: 'createtime'
    }, {
        header: '是否锁定',
        width: 95,
        renderer: function (value, p, r) {  return value === '1' ? '是' : '--'; },
        dataIndex: 'isLock'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('SystemUserModule.store.SystemUser');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: Ext.create('Ext.toolbar.Toolbar', {
                items: [{
                    text: '添加',
                    iconCls: 'add',
                    action: 'add'
                }, {
                    text: '修改',
                    iconCls: 'update',
                    action: 'modify'
                }, '-', {
                    text: '删除',
                    iconCls: 'del',
                    action: 'del'
                }]
            }),
            bbar: { // Bottom bar
                xtype: 'paging',
                store: store
            }
        });
        // Call Parent Constructor
        this.callParent(arguments);
    }
});