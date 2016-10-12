var rowIndex;


/**
 * 比对信息
 */
Ext.define('AnalyticalModule.view.CompareColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.comparecolumn',

	header: '详情',
	align: 'center',
	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
	     return '<img src="images/compare.png"></img>'; 
	},
	listeners: {
		'click': function(){
			// 当前记录的索引
			rowIndex = arguments[2];
			
			// 数据面板，通过数据面板对象可以获得Store对象，后面的记录切换就是通过Store实现的
			var store = Ext.getCmp("gridPanel").getStore();
		    var kwcarexlistform = Ext.create('AnalyticalModule.view.KWCarexlistForm');
		    var mysqlform = Ext.create('AnalyticalModule.view.MYSqlForm');
		    
		    // 创建按钮对象，可以实现数据的前向移动
		    var prebutton = Ext.create('Ext.Button', {
		    	text: '上一条', 
    	        listeners: {
    	           click: function() {
    	        	   rowIndex = Math.max(--rowIndex, 0);
    	    		   win.loadData();
    	           }
	         	}
		    });
		    // 创建按钮对象，可以实现数据的后向移动
		    var nextbutton = Ext.create('Ext.Button', {
		    	text: '下一条', 
	        	listeners: {
	        		click: function() {
	    	        	rowIndex = Math.min(++rowIndex, store.count());
    	    		    win.loadData();
    	            }
	        	}
		    });
		    
		    // 数据比对窗体对象
		    var win = Ext.create('AnalyticalModule.view.CompareWindow', {
		    	height: 380,
		    	layout: {
		            type: 'hbox',
		            align: 'stretch'
		        },
		    	items: [kwcarexlistform, {
		        	bodyStyle:'background-color:lightGray;',
		            items:[{
		            	id: 'review',
			        	html: createImageUrl(store.getAt(arguments[2]))
		            }]
		        }, mysqlform],
		        // 数据加载器，用来初始化比对窗内的数据
		        loadData: function(){
		        	var record = store.getAt(rowIndex);
		        	
		        	// 如果当前的行索引为0，则表示指针已经达到起始位，不能继续向上移动
		        	prebutton.setDisabled(rowIndex === 0);
		        	// 如果当前的行索引为数据总行数，则表示指针已经达到终止位，不能继续向下移动
		        	nextbutton.setDisabled(rowIndex === store.count() - 1);
		        	// 加载左侧ETC记录信息
	    		    kwcarexlistform.loadRecord(record);
	    		    // 加载右侧识别系统信息
	    		    mysqlform.loadRecord(record);
	    		    
	    		    // 中间的预览图区，由于初始化时DOM元素还没有被渲染，所以这里需要加一个校验
	    		    if(Ext.getCmp('review').getEl()) {
 	    		   		Ext.getCmp('review').getEl().dom.innerHTML = createImageUrl(store.getAt(rowIndex));
	    		    }
		        },
		        // 底部工具栏
		        bbar: [
		            prebutton,
        	        '<span style="display:inline-block;width:675px;text-align:center;color:gray">1. 单击图片可查看大图 | 2. 通过两端按钮可以快速浏览本页内的数据</span>', 
        	        nextbutton
        	    ],
        	    listeners: {
        	    	keydown: function(){
        	    		alert(111);
        	    	}
        	    }
		    });
		    // 初始化数据并显示窗体
		    win.loadData();
		    win.show();
		}
	}
})

// 生成图片的URL信息
function createImageUrl(record){
	return '<image width="340" height="300" src="http://localhost:8080/ImageEngine/img/' 
	+ record.get('carImage') 
	+ '" onerror="javascript:this.src=\'images/nopicture.gif\'" onclick="showLarge(this)">' + '</image>'
}