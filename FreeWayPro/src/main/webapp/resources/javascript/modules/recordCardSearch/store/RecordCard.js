/**
 * 用户登陆日志数据源对象
 */
Ext.define('RecordCardModule.store.RecordCard', {
    extend: 'Ext.data.Store',
    model: 'RecordCardModule.model.RecordCard',
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