Ext.define('TrackingModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.BasicToolbar", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'left',
        header: '序号',
    	width: 50
	}, {
		header : '卡号',
		width : 100,
		dataIndex : 'icCode'
	}, {
		header : '出口识别车牌',
		width : 120,
		dataIndex : 'carExitcodeRecognize'
	}, {
		header : '入口站名称',
		width : 120,
		dataIndex : 'enteName'
	}, {
		header : '入口车型',
		width : 90,
		dataIndex : 'vEnte'
	}, {
		header : '入口时间',
		width : 140,
		dataIndex : 'enteDate'
	}, {
		header : '出口站名称',
		width : 120,
		dataIndex : 'exitName'
	}, {
		header : '出口车型',
		width : 90,
		dataIndex : 'vExit'
	}, {
		header : '出口时间',
		width : 140,
		dataIndex : 'exitDate'
	}, {
		header : '轴数',
		width : 90,
		dataIndex : 'axisnum'
	}, {
		header : '轴总重',
		width : 90,
		dataIndex : 'totalweight'
	}, {
		header : '额重',
		width : 90,
		dataIndex : 'ratingweight'
	}, {
		header : '实际里程',
		width : 100,
		dataIndex : 'actdistance'
	}],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('TrackingModule.store.Tracking');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'basictoolbar',
            	store: store, 
            	label: '卡号', 
            	paramName: 'icCode'
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