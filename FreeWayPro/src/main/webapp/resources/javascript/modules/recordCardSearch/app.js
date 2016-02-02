/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'RecordCardModule',
    appFolder: 'javascript/modules/recordCardSearch', 
    stores: ['RecordCard'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getRecordCardStore();
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [Ext.create('Ext.grid.Panel', {
                loadMask: true, // 启用数据加载时的Mask
                stripeRows: true, // 表格显示斑马线
                store: store,
                stateId: 'grid',
                tbar: Ext.create('Ext.plugins.BasicToolbar', {
                	store: store, label: '卡号', paramName: 'icCode'
        		}),
        		columns : [ new Ext.grid.RowNumberer({ // 行号
					width : 30
				}), {
					header : '车牌',
					width : 120,
					sortable : true,
					dataIndex : 'carExitcode'
				},{
					header : '卡号',
					width : 120,
					sortable : true,
					dataIndex : 'icCode'
				},{
					header : '入口站',
					width : 120,
					sortable : true,
					dataIndex : 'enteName'
				},{
					header : '出口站',
					width : 120,
					sortable : true,
					dataIndex : 'exitName'
				}, {
					header : '车道',
					width : 120,
					sortable : true,
					dataIndex : 'lane'
				}, {
					header : '车型',
					width : 120,
					sortable : true,
					dataIndex : 'vEnte'
				}, {
					header : '入站时间',
					width : 140,
					sortable : true,
					dataIndex : 'enteDate'
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

