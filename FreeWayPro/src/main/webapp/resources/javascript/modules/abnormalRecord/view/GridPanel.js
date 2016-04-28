Ext.define('AbnormalRecordModule.view.GridPanel', {
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
        header: '车道',
        width: 50,
        dataIndex: 'lane'
    },
    {
        header: '入口时间',
        width: 140,
        dataIndex: 'enteDate'
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
        header: '轴型',
        width: 60,
        dataIndex: 'axisnum'
    },
    {
        header: '轴总重',
        width: 70,
        dataIndex: 'totalweight'
    },
    {
        header: '限重',
        width: 90,
        dataIndex: 'ratingweight'
    },
    {
        header: '车牌',
        width: 100,
        dataIndex: 'carExitcodeRecognize'
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('AbnormalRecordModule.store.AbnormalRecord');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'querycriteriatoolbar',
                store: store,
                label: '车牌号',
                paramName: 'carCode',
                stationHidden: false
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