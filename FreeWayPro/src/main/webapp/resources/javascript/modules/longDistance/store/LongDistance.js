Ext.define('LongDistanceModule.store.LongDistance', {
    extend: 'Ext.data.Store',
    model: 'LongDistanceModule.model.LongDistanceModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/longDistanceList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});