Ext.define('ProcedureLogModule.store.ProcedureLog', {
    extend: 'Ext.data.Store',
    model: 'ProcedureLogModule.model.ProcedureLogModel',
    
    autoLoad: false,
    autoDestroy: true,
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