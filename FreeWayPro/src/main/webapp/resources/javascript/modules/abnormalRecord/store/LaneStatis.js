Ext.define('AbnormalRecordModule.store.LaneStatis', {
    extend: 'Ext.data.Store',
    model: 'AbnormalRecordModule.model.EnteStatisModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/laneStatis',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'enteName'
        }
    }
});