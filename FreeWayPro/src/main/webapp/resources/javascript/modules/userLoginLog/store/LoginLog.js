Ext.define('LoginLogModule.store.LoginLog', {
    extend: 'Ext.data.Store',
    model: 'LoginLogModule.model.LoginLogModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userLoginLogList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});