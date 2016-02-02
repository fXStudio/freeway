/**
 * 用户登陆日志数据源对象
 */
Ext.define('TollCollectorModule.store.TollCollector', {
    extend: 'Ext.data.Store',
    model: 'TollCollectorModule.model.TollCollector',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/tollCollectorList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'recordNo',
            totalProperty: 'totalCount'
        }
    },
    listeners: {
    	load: function() {
        	Ext.getCmp("grid_id").getSelectionModel().select(0);
        }
    }
});