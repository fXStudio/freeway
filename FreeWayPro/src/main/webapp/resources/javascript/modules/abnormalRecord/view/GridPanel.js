Ext.define('AbnormalRecordModule.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpanel',

    requires: ["Ext.plugins.AdvanceToolbar", "Ext.plugins.Paging"],

    defaults: {
        sortable: true
    },
    columns: [{
        xtype: 'rownumberer',
        align: 'center',
        header: '序号',
        width: 50
    },
    {
        header: '入口识别车牌',
        width: 120,
        dataIndex: 'carIncodeRecognize'
    },
    {
        header: '入口站名称',
        width: 120,
        dataIndex: 'enteName'
    },
    {
        header: '车道编号',
        width: 90,
        dataIndex: 'lane'
    },
    {
        header: '入口时间',
        width: 140,
        dataIndex: 'enteDate'
    },
    {
        header: '出口站名称',
        width: 120,
        dataIndex: 'exitName'
    },
    {
        header: '出口时间',
        width: 140,
        dataIndex: 'exitDate'
    },
    {
        header: '轴数',
        width: 90,
        dataIndex: 'axisnum'
    },
    {
        header: '轴总数',
        width: 90,
        dataIndex: 'totalweight'
    },
    {
        header: '轴总重',
        width: 90,
        dataIndex: 'ratingweight'
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
                xtype: 'advancetoolbar',
                store: store,
                label: '车牌号',
                paramName: 'carCode'
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