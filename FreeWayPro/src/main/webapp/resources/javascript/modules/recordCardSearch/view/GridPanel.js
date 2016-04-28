Ext.define('RecordCardModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.PicColumn", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{
        xtype: 'rownumberer',
        align: 'center',
        header: '序号',
        width: 50
    }, {
    	xtype: 'piccolumn' 
    }, {
        header: '入口站',
        width: 200,
        dataIndex: 'enteCode'
    }, {
        header: '入口时间',
        width: 140,
        dataIndex: 'enteDate'
    }, {
        header: '入口车型',
        width: 80,
        dataIndex: 'vEnte'
    }, {
        header: '入口车牌',
        width: 100,
        dataIndex: 'carIncodeRecognize'
    }, {
        header: '车道',
        width: 80,
        dataIndex: 'lane'
    }, {
        header: 'IC卡号',
        width: 80,
        dataIndex: 'icCode'
    }, {
        header: '出口站',
        width: 200,
        dataIndex: 'exitCode'
    }, {
        header: '出口时间',
        width: 140,
        dataIndex: 'exitDate'
    }, {
        header: '出口车型',
        width: 80,
        dataIndex: 'vExit'
    }, {
        header: '出口车牌',
        width: 100,
        dataIndex: 'carExitcodeRecognize'
    }, {
        header: '收费员编号',
        width: 100,
        dataIndex: 'tollId'
    }, {
        header: '费率',
        width: 80,
        dataIndex: 'tollFare'
    }, {
        header: '箱号',
        width: 100,
        dataIndex: 'boxId'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('RecordCardModule.store.RecordCard');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'querycriteriatoolbar',
            	store: store, 
            	label: '卡号', 
            	cardType: '补录卡', 
            	paramName: 'icCode',
            	stationHidden: false,
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