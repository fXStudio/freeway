Ext.define('PasscardStatisticsModule.store.ObjectStore', {
    extend: 'Ext.data.Store',
    model: 'PasscardStatisticsModule.model.ObjectModel',
    
    autoLoad: false,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/passcardStatistics',//请求
        reader: {
            type: 'json',
            root: 'items',
            idProperty: 'stationName',
            totalProperty: 'totalCount'
        }
    }
});