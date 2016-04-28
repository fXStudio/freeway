Ext.define('CarCardsModule.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpanel',

    requires: [
       "Ext.plugins.SimpleToolbar",
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
        header: '收费站',
        width: 120,
        dataIndex: 'enteName'
    },
    {
        header: '日期',
        width: 140,
        dataIndex: 'enteDate'
    },
    {
        header: '卡号',
        width: 80,
        dataIndex: 'icCode'
    },
    {
        header: '车道',
        width: 60,
        dataIndex: 'lane'
    },
    {
        header: '全车牌',
        width: 100,
        dataIndex: 'carIncodeRecognize',
        renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
            var carCode = store.getAt(rowIndex).get('carIncodeRecognize');  
        
            return '<a href="#"> '+ carCode + '</a>';  
        
        } 
    },
    {
        header: '三位车牌',
        width: 80,
        dataIndex: 'carIncode'
    },
    {
        header: '车型',
        width: 60,
        dataIndex: 'vType'
    },
    {
        header: '收费员编号',
        width: 100,
        dataIndex: 'tollId'
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('CarCardsModule.store.CarCards');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'simpletoolbar',
                store: store,
                label: '车牌号',
                paramName: 'carCode',
                hideAxisum: true
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