/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'UserGroupModule',
    appFolder: 'javascript/modules/userGroup',
    controllers: ['UserGroupController'],// 控制器
    stores: ['UserGroup'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getUserGroupStore();
    	store.on('load', function(obj, records){
    		reloadGroupUsers(records[0]);
    	});
    	// 创建窗体对象
    	Ext.create('UserGroupModule.view.UserGroupWindow');
    	
    	var userGroupStore = new Ext.data.Store({
    		autoLoad: false,
    	    autoDestroy: true,
    	    autoSync: true,
    	    root: { expanded: true },
    	    proxy: {
    	        type : 'ajax',
    	        actionMethods: { read: 'POST' },
    	        url : 'services/groupUserList',//请求
    	        reader: {
    	            type: 'json',
    	            root: 'items',
    	            idProperty: 'sysid',
    	            totalProperty: 'totalCount'
    	        }
    	    },
            fields: [{ // 数据集字段
                name: 'username'
            }, {
                name: 'isLock'
            }, {
                name: 'sysid'
            }]
        });
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'border',
    	    defaults: {
                split: true
    	    },
            items: [Ext.create('UserGroupModule.view.UserGroupGrid', {
            	store: store,
            	region: 'north', 
            	height: 300,
                bbar: Ext.create('Ext.plugins.Paging', { store: store }),
                listeners: {
                    itemclick: function(obj, record, e) {
                    	reloadGroupUsers(record);
                    }
                }
            }), new Ext.grid.GridPanel({
                id: 'groupUsers',
                store: userGroupStore, // 绑定数据集
                loadMask: true, // 启用数据加载时的Mask
                stripeRows: true, // 表格显示斑马线
                stateId: 'grid', // paging bar on the bottom
                region: 'center',
                selModel: { checkOnly: true },
                tbar: [
                    '<strong>组内用户列表</strong>'
                ],
                columns: [new Ext.grid.RowNumberer({ // 行号
                    width: 30
                }), {
                    header: '用户名称',
                    width: 160,
                    sortable: true,
                    dataIndex: 'username'
                }, {
                    header: '锁定',
                    width: 75,
                    sortable: true,
                    renderer: function (value, p, r) {
                        return value === 'on' ? '是' : '--';
                    }
,
                    dataIndex: 'isLock'
                }],
                bbar: Ext.create('Ext.plugins.Paging', { store: userGroupStore })
            })]
        });
        // 装载数据
        store.load({params: { start: 0, limit: 25 }});
        
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
        
        
        function reloadGroupUsers(record) { // 数据集合默认选中第一行
            // 检查记录是否存在
            if (record) {
                var storeObj = Ext.getCmp("groupUsers").getStore();
                storeObj.load({// 加载表单数据
                    params: {
                    	sysid: record.get("sysid"),
                        start: 0,
                        limit: 5
                    }
                });
            }
        }
    }
});

