/**
 * 用户登陆日志数据源对象
 */
Ext.define('LoseCardModule.store.LoseCard', {
    extend: 'Ext.data.Store',
    model: 'LoseCardModule.model.LoseCard',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/loseCardList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});