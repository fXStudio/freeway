Ext.define('DataDictModule.view.DataDictGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.datadictgrid',
	
    requires: ["Ext.plugins.Paging"],
	
    selModel: { checkOnly: true },
    defaults: { sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
        header: '字典项名称',
        width: 160,
        dataIndex: 'dataname'
    }, {
        header: '字典项值',
        width: 120,
        dataIndex: 'datavalue'
    }, {
        header: '字典项描述',
        width: 360,
        dataIndex: 'datadesc'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('DataDictModule.store.DataDict');

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