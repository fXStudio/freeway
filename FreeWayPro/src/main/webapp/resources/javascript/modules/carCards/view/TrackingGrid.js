Ext.define('CarCardsModule.view.TrackingGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.trackinggrid',
	
	requires: [
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    mask: true,
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
		header : '出入',
		width : 50,
		dataIndex : 'tollType'
	}, {
		header : '站名',
		width : 120,
		dataIndex : 'tollname'
	}, {
		header : '日期',
		width : 140,
		dataIndex : 'tollDate'
	}, {
		header : '卡号',
		width : 80,
		dataIndex : 'icCode'
	}, {
		header : '车道',
		width : 50,
		dataIndex : 'lane'
	}, {
		header : '全车牌',
		width : 100,
		dataIndex : 'carRecognize'
	}, {
		header : '三位车牌',
		width : 80,
		dataIndex : 'carCode'
	}, {
		header : '车型',
		width : 50,
		dataIndex : 'vType'
	}, {
		header : '收费员编号',
		width : 100,
		dataIndex : 'tollid'
	}],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('CarCardsModule.store.Tracking');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
        	bbar: {// Bottom bar
        		xtype: 'paging',
        		store: store
        	}
    	});
    	// Call Parent Constructor
        this.callParent(arguments);
    }
});