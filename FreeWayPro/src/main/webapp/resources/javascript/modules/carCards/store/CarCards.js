Ext.define('CarCardsModule.store.CarCards', {
    extend: 'Ext.data.Store',
    model: 'CarCardsModule.model.CarCardsModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/carCardsList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});