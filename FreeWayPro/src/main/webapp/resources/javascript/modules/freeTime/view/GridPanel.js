Ext.define('FreeTimeModule.view.GridPanel', {
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
        header: '入口识别车牌',
        width: 120,
        dataIndex: 'carIncodeRecognize'
    }, {
        header: '入口站名称',
        width: 120,
        dataIndex: 'enteName'
    }, {
        header: '出口站名称',
        width: 120,
        dataIndex: 'exitName'
    }, {
        header: '出口车道',
        width: 90,
        dataIndex: 'lane'
    }, {
        header: '入口车型',
        width: 90,
        dataIndex: 'vType'
    }, {
        header: '出口车型',
        width: 90,
        dataIndex: 'vExit'
    }, {
        header: '出口日期',
        width: 140,
        dataIndex: 'exitDate'
    }, {
        header: '入口日期',
        width: 140,
        dataIndex: 'enteDate'
    }, {
        header: '轴数',
        width: 90,
        dataIndex: 'axisnum'
    }, {
        header: '轴总数',
        width: 90,
        dataIndex: 'totalweight'
    }, {
        header: '轴总重',
        width: 90,
        dataIndex: 'ratingweight'
    }, {
        header: '实际里程',
        width: 100,
        dataIndex: 'actdistance'
    }, {
        header: '折后里程',
        width: 100,
        dataIndex: 'tolldistance'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('FreeTimeModule.store.FreeTime');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'basictoolbar',
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