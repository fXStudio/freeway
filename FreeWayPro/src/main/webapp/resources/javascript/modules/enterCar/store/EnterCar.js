Ext.define('EnterCarModule.store.EnterCar', {
    extend: 'Ext.data.Store',
    model: 'EnterCarModule.model.EnterCarModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/enterCarList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});