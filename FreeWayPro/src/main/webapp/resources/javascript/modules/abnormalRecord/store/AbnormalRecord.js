/**
 * 用户登陆日志数据源对象
 */
Ext.define('AbnormalRecordModule.store.AbnormalRecord', {
    extend: 'Ext.data.Store',
    model: 'AbnormalRecordModule.model.AbnormalRecord',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/abnormalRecordList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});