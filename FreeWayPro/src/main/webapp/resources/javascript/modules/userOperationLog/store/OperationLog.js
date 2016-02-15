Ext.define('UserOperationLogModule.store.OperationLog', {
    extend: 'Ext.data.Store',
    model: 'UserOperationLogModule.model.OperationLogModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userOperationLogList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});