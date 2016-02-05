/**
 * 用户登陆日志数据源对象
 */
Ext.define('SystemUserModule.store.SystemUser', {
    extend: 'Ext.data.Store',
    model: 'SystemUserModule.model.SystemUserModel',
    autoLoad: false,
    autoDestroy: true,
    autoSync: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/systemUserList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});