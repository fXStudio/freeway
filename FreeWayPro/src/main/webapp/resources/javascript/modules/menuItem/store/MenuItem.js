/**
 * 用户登陆日志数据源对象
 */
Ext.define('MenuItemModule.store.MenuItem', {
    extend: 'Ext.data.Store',
    model: 'MenuItemModule.model.MenuItemModel',
    autoLoad: false,
    autoDestroy: true,
    autoSync: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/menuItemList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});