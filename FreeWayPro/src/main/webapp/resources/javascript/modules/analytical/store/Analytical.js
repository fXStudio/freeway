Ext.define('AnalyticalModule.store.Analytical', {
    extend: 'Ext.data.Store',
    model: 'AnalyticalModule.model.AnalyticalModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/analyticalList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'carImage',
            totalProperty: 'totalCount'
        }
    }
});