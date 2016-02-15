Ext.define('BadCardSearchModule.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpanel',

    requires: ["Ext.plugins.AdvanceToolbar", "Ext.plugins.Paging"],
    defaults: {
        sortable: true
    },
    columns: [{
        xtype: 'rownumberer',
        align: 'left',
        header: '序号',
        width: 50
    },
    {
        header: '车牌',
        width: 120,
        dataIndex: 'carExitcode'
    },
    {
        header: '卡号',
        width: 120,
        dataIndex: 'icCode'
    },
    {
        header: '入口站',
        width: 120,
        dataIndex: 'enteName'
    },
    {
        header: '出口站',
        width: 120,
        dataIndex: 'exitName'
    },
    {
        header: '车道',
        width: 120,
        dataIndex: 'lane'
    },
    {
        header: '车型',
        width: 120,
        dataIndex: 'vEnte'
    },
    {
        header: '入站时间',
        width: 140,
        dataIndex: 'enteDate'
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('BadCardSearchModule.store.BadCardSearch');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'advancetoolbar',
                store: store,
                label: '卡号',
                paramName: 'icCode'
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