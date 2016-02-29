Ext.define('MDSuspiciousModule.store.SuspiciousStore', {
    extend: 'Ext.data.Store',
    model: 'MDSuspiciousModule.model.SuspiciousModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/suspiciousList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});