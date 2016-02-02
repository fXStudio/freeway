Ext.define('UserGroupModule.store.Tree', {
	extend: 'Ext.data.TreeStore',
    model: 'UserGroupModule.model.TreeModel',
    root: { expanded: true },
    autoLoad: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/userGroupMenu',//请求  
    }
});