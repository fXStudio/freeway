Ext.define('LoginLogModule.view.GridPanel', {
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
        header: '用户名',
        width: 120,
        dataIndex: 'username'
    }, {
        header: '登录时间',
        width: 160,
        dataIndex: 'logintime'
    }, {
        header: 'IP地址',
        width: 160,
        dataIndex: 'ip'
    }],
    
    /**
     * Component Init
     */
    initComponent: function(){
    	// Create Store Object
    	var store = Ext.create('LoginLogModule.store.LoginLog');
    	
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