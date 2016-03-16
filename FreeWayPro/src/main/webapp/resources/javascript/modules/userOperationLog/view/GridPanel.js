Ext.define('UserOperationLogModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    layout: 'fit',
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
        header: '用户名',
        width: 120,
        dataIndex: 'userid'
    }, {
        header: '动作描述',
        width: 140,
        dataIndex: 'item'
    }, {
        header: '类型',
        width: 50,
        dataIndex: 'operation'
    }, {
        header: 'IP地址',
        width: 120,
        dataIndex: 'ip'
    }, {
        header: '操作时间',
        width: 140,
        dataIndex: 'createTime'
    }, {
        header: '执行操作参数',
        width: 200,
        dataIndex: 'params',
        flex: 1
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
    			xtype: 'querycriteriatoolbar',
            	store: store, 
            	label: '用户名', 
            	paramName: 'loginUser',
            	hideBlank: true,
            	hideAxisum: true
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