Ext.define('SystemUserModule.store.DeptTree', {
	extend: 'Ext.data.TreeStore',
	autoLoad: true,
	autoDestroy: true,
    root: { 
    	expanded: true,
    	text: "所有收费站",
    	rootVisible: false
	},
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/departmentList',//请求  
    }
});