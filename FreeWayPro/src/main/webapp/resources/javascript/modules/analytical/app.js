/**
 * 显示预览大图
 * @param obj
 */
function showLarge(obj){
	var win = Ext.create('AnalyticalModule.view.CompareWindow', {
		title: '车辆快照',
	    resizable: false,
		items: [{  
			id: 'img',
		    xtype: 'box',
		    autoEl: {  
		        tag: 'img',
		        src: obj.src
		    }
		}],
	    listeners: {
	    	maximize: function(obj, size){
	    		Ext.getCmp("img").setWidth(win.getWidth());
	    		Ext.getCmp("img").setHeight(win.getHeight());
	    	},
	    	show: function(){
	    		Ext.getCmp("img").getEl().dom.src = obj.src; 
	    	}
	    }
	});
	win.show();
	win.maximize();
}

/**
 * ETC稽查
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'AnalyticalModule',
    appFolder: 'javascript/modules/analytical', 
    controllers: ['AnalyticalController'],// 加载控制器控件
    
    autoCreateViewport: true
});


