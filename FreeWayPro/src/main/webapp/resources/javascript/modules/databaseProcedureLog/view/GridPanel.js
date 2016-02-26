Ext.define('ProcedureLogModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
        header: '日志编号',
        width: 90,
        dataIndex: 'logId'
    }, {
        header: '记录时间',
        width: 160,
        dataIndex: 'logDate'
    }, {
        header: '作业名称',
        width: 140,
        dataIndex: 'jobName'
    }, {
        header: '作业类',
        width: 200,
        dataIndex: 'jobClass'
    }, {
        header: '操作',
        width: 90,
        dataIndex: 'operation'
    }, {
        header: '状态',
        width: 140,
        dataIndex: 'status'
    }, {
        header: '附属信息',
        width: 90,
        dataIndex: 'additionalInfo'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('ProcedureLogModule.store.ProcedureLog');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'querycriteriatoolbar',
            	store: store, 
            	label: '作业名', 
            	paramName: 'jobObjName',
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