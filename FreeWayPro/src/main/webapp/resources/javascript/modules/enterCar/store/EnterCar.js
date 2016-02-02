/**
 * 用户登陆日志数据源对象
 */
Ext.define('EnterCarModule.store.EnterCar', {
    extend: 'Ext.data.Store',
    model: 'EnterCarModule.model.EnterCar',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/enterCarList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});