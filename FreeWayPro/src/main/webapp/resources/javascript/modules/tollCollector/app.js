/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'TollCollectorModule',
    appFolder: 'javascript/modules/tollCollector', 
    stores: ['TollCollector'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getTollCollectorStore();
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [Ext.create('Ext.grid.Panel', {
                loadMask: true, // 启用数据加载时的Mask
                stripeRows: true, // 表格显示斑马线
                store: store,
                stateId: 'grid',
                tbar: Ext.create('Ext.plugins.BasicToolbar', {
                	store: store, label: '车牌号', paramName: 'carCode'
        		}),
        		columns : [ new Ext.grid.RowNumberer({ // 行号
					width : 30
				}), {
		            header: '收费员编号',
		            width: 120,
		            sortable: true,
		            dataIndex: 'tollId'
		        }, {
		            header: '出口识别车牌',
		            width: 120,
		            sortable: true,
		            dataIndex: 'carIncodeRecognize'
		        }, {
		            header: '出口车型',
		            width: 70,
		            sortable: true,
		            dataIndex: 'vExit'
		        }, {
		            header: '出口站名称',
		            width: 120,
		            sortable: true,
		            dataIndex: 'exitName'
		        }, {
		            header: '出口车道编号',
		            width: 90,
		            sortable: true,
		            dataIndex: 'lane'
		        }, {
		            header: '出口时间',
		            width: 140,
		            sortable: true,
		            dataIndex: 'exitDate'
		        }, {
		            header: '入口车型',
		            width: 70,
		            sortable: true,
		            dataIndex: 'vEnte'
		        }, {
		            header: '入口站名称',
		            width: 120,
		            sortable: true,
		            dataIndex: 'enteName'
		        }, {
		            header: '入口时间',
		            width: 140,
		            sortable: true,
		            dataIndex: 'enteDate'
		        }, {
		            header: '轴数',
		            width: 90,
		            sortable: true,
		            dataIndex: 'axisnum'
		        }, {
		            header: '轴总重',
		            width: 90,
		            sortable: true,
		            dataIndex: 'totalweight'
		        }, {
		            header: '额重',
		            width: 90,
		            sortable: true,
		            dataIndex: 'ratingweight'
		        }, {
		            header: '入口识别车牌',
		            width: 100,
		            sortable: true,
		            dataIndex: 'carIncodeRecognize'
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

