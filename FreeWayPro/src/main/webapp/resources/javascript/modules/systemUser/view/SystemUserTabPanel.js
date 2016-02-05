Ext.define('SystemUserModule.view.SystemUserTabPanel', {
	extend: 'Ext.tab.Panel',
	id: 'systemUserTabPanel',
	items: [
	    // 用户所在组的维护功功能
	    {
	    	title: '所属用户组',
	    	layout: 'fit',
	    	items: Ext.create('Ext.ux.form.ItemSelector', {
	            	name: 'itemselector',
	                id: 'itemselector-field',
	                imagePath: 'javascript/extjs/ux/css/images/',
	                store: Ext.create('Ext.data.Store', {
	                	model: 'SystemUserModule.model.SystemUserModel',
	                    autoLoad: true,
	                    autoDestroy: true,
	                    autoSync: true,
	                    root: { expanded: true },
	                    proxy: {
	                        type : 'ajax',
	                        actionMethods: { read: 'POST' },
	                        url : 'services/systemUserList',//请求
	                        reader: {
	                            type: 'json',
	                            root: 'items',
	                            idProperty: 'sysid',
	                            totalProperty: 'totalCount'
	                        }
	                    }
	                }),
	                displayField: 'username',
	                valueField: 'sysid',
	                allowBlank: true,
	                msgTarget: 'side',
	                fromTitle: '可选用户组',
	                toTitle: '已选用户组'
	            })
	    }, 
	    // 用户所属部门的树菜单
	    Ext.create('Ext.tree.TreePanel', {
	        id: 'deptTree',
	        title: '所属部门',
	        useArrows: true,
	        autoScroll: true,
	        containerScroll: false,
	        rootVisible: false,
	        frame: false,
	        border:false,
	        height: 230,
	        store: Ext.create('SystemUserModule.store.DeptTree')
	    })
    ]
});