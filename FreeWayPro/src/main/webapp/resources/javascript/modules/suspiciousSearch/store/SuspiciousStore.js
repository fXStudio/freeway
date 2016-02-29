Ext.define('SuspiciousModule.store.SuspiciousStore', {
    extend: 'Ext.data.Store',
    model: 'SuspiciousModule.model.SuspiciousModel',
    
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