Ext.define('AbnormalRecordModule.store.AbnormalRecord', {
    extend: 'Ext.data.Store',
    model: 'AbnormalRecordModule.model.AbnormalRecordModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/abnormalRecordList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});