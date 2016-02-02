/**
 * 用户登陆日志数据源对象
 */
Ext.define('ChangeCardModule.store.ChangeCard', {
    extend: 'Ext.data.Store',
    model: 'ChangeCardModule.model.ChangeCard',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/changeCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});