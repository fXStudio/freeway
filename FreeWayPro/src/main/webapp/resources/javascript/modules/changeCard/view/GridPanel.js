Ext.define('ChangeCardModule.view.GridPanel', {
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
        header: '车辆类别',
        width: 80,
        dataIndex: 'carType'
    }, {
        header: '轴型',
        width: 50,
        dataIndex: 'axisnum'
    }, {
        header: '轴总重',
        width: 70,
        dataIndex: 'totalweight'
    }, {
        header: '限重',
        width: 50,
        dataIndex: 'ratingweight'
    },
    {
        header: '超时超速',
        width: 80,
        dataIndex: 'convertflag',
        renderer: function(value) {return value === '1' ? '超时' : '超速';}
    },
    {
        header: '超时时间/超速情况',
        width: 140,
        dataIndex: 'resdes'
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
        var store = Ext.create('ChangeCardModule.store.ChangeCard');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'querycriteriatoolbar',
                store: store,
                label: '车牌号',
                paramName: 'carCode',
            	hideAxisum: true,
            	convertflag: false
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