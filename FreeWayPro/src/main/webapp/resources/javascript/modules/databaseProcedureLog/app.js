/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'ProcedureLogModule',
    appFolder: 'javascript/modules/databaseProcedureLog', 
    stores: ['ProcedureLog'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getProcedureLogStore();
    	
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
                	store: store, label: '作业名称', paramName: 'jobObjName'
        		}),
        		columns : [ new Ext.grid.RowNumberer({ // 行号
					width : 30
				}), {
		            header: '日志编号',
		            width: 120,
		            sortable: true,
		            dataIndex: 'logId'
		        }, {
		            header: '记录时间',
		            width: 120,
		            sortable: true,
		            dataIndex: 'logDate'
		        }, {
		            header: '作业名称',
		            width: 90,
		            sortable: true,
		            dataIndex: 'jobName'
		        }, {
		            header: '作业类',
		            width: 140,
		            sortable: true,
		            dataIndex: 'jobClass'
		        }, {
		            header: '操作',
		            width: 120,
		            sortable: true,
		            dataIndex: 'operation'
		        }, {
		            header: '状态',
		            width: 140,
		            sortable: true,
		            dataIndex: 'status'
		        }, {
		            header: '附属信息',
		            width: 90,
		            sortable: true,
		            dataIndex: 'additionalInfo'
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

