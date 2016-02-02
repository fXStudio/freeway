/**
 * 用户登陆日志数据源对象
 */
Ext.define('CarTypeModule.store.CarType', {
    extend: 'Ext.data.Store',
    model: 'CarTypeModule.model.CarType',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/carTypeList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});