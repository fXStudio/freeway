Ext.define('TollCollectorModule.store.TollCollector', {
    extend: 'Ext.data.Store',
    model: 'TollCollectorModule.model.TollCollectorModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/tollCollectorList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});