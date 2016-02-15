Ext.define('FreeTimeModule.store.FreeTime', {
    extend: 'Ext.data.Store',
    model: 'FreeTimeModule.model.FreeTimeModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/freeTimeList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});