Ext.define('MakeupCardModule.store.MakeupCard', {
    extend: 'Ext.data.Store',
    model: 'MakeupCardModule.model.MakeupCardModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/makeupCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});