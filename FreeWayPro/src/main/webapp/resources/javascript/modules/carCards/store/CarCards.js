/**
 * 用户登陆日志数据源对象
 */
Ext.define('CarCardsModule.store.CarCards', {
    extend: 'Ext.data.Store',
    model: 'CarCardsModule.model.CarCards',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/carCardsList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});