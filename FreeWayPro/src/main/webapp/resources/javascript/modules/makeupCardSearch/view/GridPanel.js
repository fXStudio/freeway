Ext.define('MakeupCardModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.EntePicColumn", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
    	xtype: 'entepiccolumn' ,
    	width: 50
    }, {
		header : '车牌',
		width : 120,
		dataIndex : 'carIncodeRecognize'
	},{
		header : '卡号',
		width : 120,
		dataIndex : 'icCode'
	},{
		header : '入口站名称',
		width : 120,
		dataIndex : 'enteName'
	}, {
		header : '车道',
		width : 120,
		dataIndex : 'lane'
	}, {
		header : '车型',
		width : 120,
		dataIndex : 'vType'
	}, {
		header : '入站时间',
		width : 140,
		dataIndex : 'enteDate'
	}],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('MakeupCardModule.store.MakeupCard');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'querycriteriatoolbar',
            	store: store, 
            	label: '卡号', 
            	paramName: 'icCode',
            	stationHidden: false,
            	hideBlank: true,
            	hideAxisum: true,
                typeLabel: '过滤无图',
            	hideType: false
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