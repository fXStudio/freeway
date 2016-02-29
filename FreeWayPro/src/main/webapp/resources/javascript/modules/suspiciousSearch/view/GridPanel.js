Ext.define('SuspiciousModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "SuspiciousModule.view.Toolbar", 
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
        header: '车牌',
        width: 100,
        dataIndex: 'carExitcodeRecognize'
    }, {
        header: '车型',
        width: 60,
        dataIndex: 'vType'
    }, {
        header: '偷逃费类型',
        width: 120,
        dataIndex: 'violationType'
    }, {
        header: '情况说明',
        width: 100,
        dataIndex: 'remark',
        flex: 1
    }],
    listeners: {
    	afterrender: function(){
    		Ext.getDom('searchBtn').click();
    	}
    },
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('SuspiciousModule.store.SuspiciousStore');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'suspicioustoolbar',
            	store: store, 
            	label: '车牌号', 
            	paramName: 'carCode'
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