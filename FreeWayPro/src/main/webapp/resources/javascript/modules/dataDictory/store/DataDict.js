/**
 * 用户登陆日志数据源对象
 */
Ext.define('DataDictModule.store.DataDict', {
    extend: 'Ext.data.Store',
    model: 'DataDictModule.model.DataDictModel',
    autoLoad: false,
    autoDestroy: true,
    autoSync: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/systemDataList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    }
});