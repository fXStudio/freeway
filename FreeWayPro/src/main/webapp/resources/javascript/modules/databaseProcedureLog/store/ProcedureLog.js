/**
 * 用户登陆日志数据源对象
 */
Ext.define('ProcedureLogModule.store.ProcedureLog', {
    extend: 'Ext.data.Store',
    model: 'ProcedureLogModule.model.ProcedureLog',
    autoLoad: false,
    autoDestroy: true,
    root: { expanded: true },
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userSchedulerJobLogList',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'logId',
            totalProperty: 'totalCount'
        }
    }
});