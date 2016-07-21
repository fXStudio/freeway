Ext.define('AnalyticalModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.ImageColumn", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'center',
        header: '序号',
    	width: 50
	}, {
    	xtype: 'imageccolumn' ,
    	width: 50
    }, {
        header: '车牌',
        width: 100,
        dataIndex: 'carSn'
    }, {
        header: '出口时间',
        width: 160,
        dataIndex: 'outDate'
    }, {
        header: '车型',
        width: 100,
        dataIndex: 'carType'
    }, {
        header: '品牌',
        width: 100,
        dataIndex: 'carBrand'
    }, {
        header: '型号',
        width: 100,
        dataIndex: 'carFirm'
    }, {
        header: '具体车型',
        width: 100,
        dataIndex: 'carModel'
    }, {
        header: '款型',
        width: 90,
        dataIndex: 'carVersion'
    }, {
        header: '信誉',
        width: 90,
        align: 'right',
        dataIndex: 'carConfidence'
    }, {
        header: '颜色',
        width: 90,
        align: 'right',
        dataIndex: 'carColortype'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('AnalyticalModule.store.Analytical');
    	
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