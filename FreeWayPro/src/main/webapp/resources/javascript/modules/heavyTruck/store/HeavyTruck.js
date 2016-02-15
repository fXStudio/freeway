Ext.define('HeavyTruckModule.store.HeavyTruck', {
    extend: 'Ext.data.Store',
    model: 'HeavyTruckModule.model.HeavyTruckModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/heavyTruckList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});