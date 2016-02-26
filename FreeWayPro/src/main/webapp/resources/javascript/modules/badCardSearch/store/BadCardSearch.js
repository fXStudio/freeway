Ext.define('BadCardSearchModule.store.BadCardSearch', {
    extend: 'Ext.data.Store',
    model: 'BadCardSearchModule.model.BadCardModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/cardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});