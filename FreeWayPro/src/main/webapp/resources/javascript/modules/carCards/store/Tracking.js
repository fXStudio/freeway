Ext.define('CarCardsModule.store.Tracking', {
    extend: 'Ext.data.Store',
    model: 'CarCardsModule.model.TrackingModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/trackingList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});