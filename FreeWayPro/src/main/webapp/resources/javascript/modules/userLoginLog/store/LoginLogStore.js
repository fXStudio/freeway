/**
 * 用户登陆日志数据源对象
 */
Ext.define('LoginLogModule.store.LoginLogStore', {
    extend: 'Ext.data.Store',
    model: 'LoginLogModule.model.LoginLogModel',
    autoDestroy: true,
    root: { expanded: true },
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