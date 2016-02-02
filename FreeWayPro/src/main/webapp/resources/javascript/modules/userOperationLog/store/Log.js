/**
 * 用户登陆日志数据源对象
 */
Ext.define('UserOperationLogModule.store.Log', {
    extend: 'Ext.data.Store',
    model: 'UserOperationLogModule.model.Log',
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userOperationLogList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'sysid',
            totalProperty: 'totalCount'
        }
    },
    listeners: {
    	load: function() {
        	Ext.getCmp("grid_id").getSelectionModel().select(0);
        }
    }
});