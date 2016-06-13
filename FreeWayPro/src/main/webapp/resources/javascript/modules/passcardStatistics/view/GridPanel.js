Ext.define('PasscardStatisticsModule.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpanel',

    requires: ["Ext.plugins.QueryCriteriaToolbar", "Ext.plugins.Paging"],
    defaults: {
        sortable: true
    },
    columns: [{
        header: '收费站',
        width: 200,
        dataIndex: 'stationName'
    }, {
        header: '入口发卡数',
        width: 100,
        dataIndex: 'incards'
    }, {
        header: '出口收卡数',
        width: 100,
        dataIndex: 'outcards'
    }, {
        header: '收/发卡日期',
        width: 140,
        dataIndex: 'cardsdate'
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('PasscardStatisticsModule.store.ObjectStore');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            tbar: { // Top bar
                xtype: 'querycriteriatoolbar',
                store: store,
                hideInput: true,
            	cardType: '坏卡', 
                paramName: 'icCode',
                stationHidden: false,
            	hideBlank: true,
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