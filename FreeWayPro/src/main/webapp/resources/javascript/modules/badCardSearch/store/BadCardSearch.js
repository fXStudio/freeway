/**
 * 用户登陆日志数据源对象
 */
Ext.define('BadCardSearchModule.store.BadCardSearch', {
    extend: 'Ext.data.Store',
    model: 'BadCardSearchModule.model.BadCardSearch',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/badCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});