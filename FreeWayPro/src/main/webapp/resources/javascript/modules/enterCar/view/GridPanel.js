/**
 * Car Type Grid Panel
 * 
 * @Author Renj
 */
Ext.define('EnterCarModule.view.GridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridpanel',
	
	requires: [
       "Ext.plugins.AdvanceToolbar", 
       "Ext.plugins.Paging"
	],
    defaults:{ sortable: true },
    columns: [{ 
    	xtype: 'rownumberer',
    	align: 'left',
        header: '序号',
    	width: 50
	}, {
        header: '出口车牌',
        width: 100,
        sortable: true,
        dataIndex: 'carExitcode'
    }, {
        header: '入口车型',
        width: 90,
        sortable: true,
        dataIndex: 'vEnte'
    }, {
        header: '入口站名称',
        width: 160,
        sortable: true,
        dataIndex: 'enteName'
    }, {
        header: '入口时间',
        width: 140,
        sortable: true,
        dataIndex: 'enteDate'
    }, {
        header: '出口车型',
        width: 90,
        sortable: true,
        dataIndex: 'vExit'
    }, {
        header: '出口站名称',
        width: 160,
        sortable: true,
        dataIndex: 'exitName'
    }, {
        header: '出口时间',
        width: 140,
        sortable: true,
        dataIndex: 'exitDate'
    }, {
        header: '轴数',
        width: 90,
        sortable: true,
        dataIndex: 'axisnum'
    }, {
        header: '轴总重',
        width: 90,
        sortable: true,
        dataIndex: 'totalweight'
    }, {
        header: '额重',
        width: 90,
        sortable: true,
        dataIndex: 'ratingweight'
    }, {
        header: '入口识别车牌',
        width: 120,
        sortable: true,
        dataIndex: 'carIncodeRecognize'
    }],
    
    /**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('EnterCarModule.store.EnterCar');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		store: store,
    		tbar: {// Top bar
    			xtype: 'advancetoolbar',
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