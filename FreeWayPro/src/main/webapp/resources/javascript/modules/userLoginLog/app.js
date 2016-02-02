/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'LoginLogModule',
    appFolder: 'javascript/modules/userLoginLog', 
    stores: ['Log'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getLogStore();
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [Ext.create('Ext.grid.Panel', {
            	id: 'grid_id',
                loadMask: true, // 启用数据加载时的Mask
                stripeRows: true, // 表格显示斑马线
                store: store,
                stateId: 'grid',
                tbar: Ext.create('Ext.plugins.BasicToolbar', {
                	store: store, label: '用户名', paramName: 'loginUser'
        		}),
                columns: [ Ext.create('Ext.grid.RowNumberer', {width: 50}), {
                    header: '用户名',
                    width: 120,
                    sortable: true,
                    dataIndex: 'username'
                }, {
                    header: '登录时间',
                    width: 160,
                    sortable: true,
                    dataIndex: 'logintime'
                }, {
                    header: 'IP地址',
                    width: 160,
                    sortable: true,
                    dataIndex: 'ip'
                }],
                bbar: Ext.create('Ext.plugins.Paging', { store: store })
            })]
        });
        // 装载数据
        store.load({params: { start: 0, limit: 25 }});
        
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
    }
});

