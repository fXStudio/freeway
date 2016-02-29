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
        width: 80,
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
                items: [
                   '<span style="color:red;padding-right:5px;">* 数据字典项用于后台作业, 修改前需仔细核对说明.</span>', '->', 
                   {
	                    text: '修改',
	                    width: 90,
	                    iconCls: 'update',
	                    action: 'modify'
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