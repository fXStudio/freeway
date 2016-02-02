/**
 * 用户登陆日志数据源对象
 */
Ext.define('TrackingModule.store.Tracking', {
    extend: 'Ext.data.Store',
    model: 'TrackingModule.model.Tracking',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/trackingList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    }
});