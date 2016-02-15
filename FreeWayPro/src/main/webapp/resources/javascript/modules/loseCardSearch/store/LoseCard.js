Ext.define('LoseCardModule.store.LoseCard', {
    extend: 'Ext.data.Store',
    model: 'LoseCardModule.model.LoseCardModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/loseCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});