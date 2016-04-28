Ext.define('CarTypeModule.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpanel',

    requires: [
       "Ext.plugins.QueryCriteriaToolbar", 
       "Ext.plugins.PicColumn", 
       "Ext.plugins.Paging"
   ],
    
    defaults: {
        sortable: true
    },
    columns: [{
        xtype: 'rownumberer',
        align: 'center',
        header: '序号',
        width: 50
    }, {
    	xtype: 'piccolumn' 
    },
    {
        header: '入口站',
        width: 120,
        dataIndex: 'enteName'
    },
    {
        header: '入口时间',
        width: 140,
        dataIndex: 'enteDate'
    },
    {
        header: '入口车型',
        width: 80,
        dataIndex: 'vEnte'
    },
    {
        header: '出口站',
        width: 120,
        dataIndex: 'exitName'
    },
    {
        header: '出口时间',
        width: 140,
        dataIndex: 'exitDate'
    },
    {
        header: '出口车型',
        width: 80,
        dataIndex: 'vExit'
    },
    {
        header: '车道',
        width: 60,
        dataIndex: 'lane'
    },
    {
        header: '收费员编号',
        width: 100,
        dataIndex: 'tollId'
    },
    {
        header: 'IC卡号',
        width: 80,
        dataIndex: 'icCode'
    },
    {
        header: '入口车牌',
        width: 100,
        dataIndex: 'carIncodeRecognize'
    },
    {
        header: '出口车牌',
        width: 100,
        dataIndex: 'carExitcodeRecognize'
    }, {
        header: '类型',
        width: 80,
    	dataIndex: 'resdes'
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('CarTypeModule.store.CarType');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'querycriteriatoolbar',
                store: store,
                label: '车牌号',
                paramName: 'carCode',
                hideAxisum: true,
                cartype: false
            },
            bbar: { // Bottom bar
                xtype: 'paging',
                store: store
            }
        });
        // Call Parent Constructor
        this.callParent(arguments);
    }
});