Ext.define('CarCardsModule.controller.CarCardsController', {
    extend: 'Ext.app.Controller',
    
    refs: [
        {ref: 'gridPanel', selector: 'gridpanel'},
        {ref: 'trackingWindow', selector: 'trackingwindow'}
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
        		var trackingWindow = Ext.create('CarCardsModule.view.TrackingWindow')
            	var store = Ext.getCmp('trackingGrid').getStore();
			    var proxy = store.getProxy();
   		        
   		        proxy.extraParams = store.baseParams || {};
   		        proxy.extraParams["carCode"] = record.get('carIncodeRecognize');
   		        
   		        store.reload();
            	
                trackingWindow.show(); // 显示窗体
                trackingWindow.center();// 窗体居中显示
        	}
        });
        Ext.getCmp('queryField').focus(true, 100);
	}
});