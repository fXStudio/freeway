Ext.define('AbnormalRecordModule.store.EnteStatis', {
    extend: 'Ext.data.Store',
    model: 'AbnormalRecordModule.model.EnteStatisModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/enteStatis',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'enteName'
        }
    }
});