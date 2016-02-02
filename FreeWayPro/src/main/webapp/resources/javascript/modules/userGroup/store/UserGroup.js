/**
 * 用户登陆日志数据源对象
 */
Ext.define('UserGroupModule.store.UserGroup', {
    extend: 'Ext.data.Store',
    model: 'UserGroupModule.model.UserGroupModel',
    autoLoad: false,
    autoDestroy: true,
    autoSync: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userGroupList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});