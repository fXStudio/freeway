Ext.define('UserOperationLogModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.BasicToolbar", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
        header: '动作描述',
        width: 120,
        dataIndex: 'itemid'
    }, {
        header: '操作类型',
        width: 120,
        dataIndex: 'opration'
    }, {
        header: '操作时间',
        width: 90,
        dataIndex: 'createTime'
    }, {
        header: '执行操作参数',
        width: 120,
        dataIndex: 'params'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('UserOperationLogModule.store.OperationLog');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'basictoolbar',
            	store: store, 
            	label: '用户名', 
            	paramName: 'loginUser'
    		},
        	bbar: {// Bottom bar
        		xtype: 'paging',
        		store: store
        	}
    	});
    	// Call Parent Constructor
        this.callParent(arguments);
    }
});