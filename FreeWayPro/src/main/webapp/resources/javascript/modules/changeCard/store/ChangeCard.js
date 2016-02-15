Ext.define('ChangeCardModule.store.ChangeCard', {
    extend: 'Ext.data.Store',
    model: 'ChangeCardModule.model.ChangeCardModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/changeCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});