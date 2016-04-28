Ext.define('FreeTimeModule.view.GridPanel', {
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
        width: 160,
        dataIndex: 'enteName'
    }, {
        header: '入口时间',
        width: 140,
        dataIndex: 'enteDate'
    }, {
        header: '出口站',
        width: 160,
        dataIndex: 'exitName'
    }, {
        header: '出口时间',
        width: 140,
        dataIndex: 'exitDate'
    }, {
        header: '入口车型',
        width: 80,
        dataIndex: 'vEnte'
    }, {
        header: '出口车型',
        width: 80,
        dataIndex: 'vExit'
    }, {
        header: '收费类型',
        width: 90,
        dataIndex: 'tollType'
    }, {
        header: '应收金额',
        width: 90,
        align: 'right',
        dataIndex: 'receivable'
    }, {
        header: '应免金额',
        width: 90,
        align: 'right',
        dataIndex: 'exemption'
    }, {
        header: '实收金额',
        width: 90,
        align: 'right',
        dataIndex: 'totalFare'
    }, {
        header: '实免金额',
        width: 90,
        align: 'right',
        dataIndex: 'solidFree'
    }, {
        header: '车牌',
        width: 100,
        dataIndex: 'carExitcodeRecognize'
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
    			xtype: 'querycriteriatoolbar',
            	store: store, 
            	label: '车牌号', 
            	paramName: 'carCode',
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