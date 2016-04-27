Ext.define('CarCardsModule.controller.CarCardsController', {
    extend: 'Ext.app.Controller',
    
    refs: [
        {ref: 'gridPanel', selector: 'gridpanel'},
        {ref: 'trackingWindow', selector: 'trackingwindow'},
        {ref: 'trackingGrid', selector: 'trackinggrid'}
    ],
    
    /**
     * Module Launch
     */
	onLaunch: function() {
	    var gridPanel = this.getGridPanel(), 
	        store = gridPanel.getStore(),
         	trackingWindow = this.getTrackingWindow(),
         	el = this;

	    // 设置焦点
        store.on("load", function(){
        	gridPanel.getSelectionModel().select(0);
        	var comp = Ext.getCmp('queryField');
        	if(comp) {
        		Ext.getCmp('queryField').focus(true, 100);
    		}
        });
        
        // 查看车流量信息
        gridPanel.on("cellclick", function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
        	// 只在超链接列上触发事件
        	if(e.target.tagName === 'A') {
            	// 判断窗体对象是否存在, 如果不存在，就创建一个新的窗体对象
            	if(!trackingWindow){trackingWindow = Ext.create('CarCardsModule.view.TrackingWindow');}
            	
            	// 设置查询参数
            	el.getTrackingGrid().getStore().load({
	                params: {icCode: record.get('carIncodeRecognize')}
        		});
                trackingWindow.show(); // 显示窗体
                trackingWindow.center();// 窗体居中显示
        	}
        });
        Ext.getCmp('queryField').focus(true, 100);
	}
});