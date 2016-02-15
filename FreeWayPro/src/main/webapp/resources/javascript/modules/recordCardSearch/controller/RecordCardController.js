/**
 * Bad Card Search Controller
 */
Ext.define('RecordCardModule.controller.RecordCardController', {
    extend: 'Ext.app.Controller',
    
    refs: [
        {ref: 'gridPanel', selector: 'gridpanel'}
    ],
    
    /**
     * Module Launch
     */
	onLaunch: function() {
		// 获得数据源对象
	    var gridPanel = this.getGridPanel(),
	         store = gridPanel.getStore();

        // 装载数据
        store.load({params: { start: 0, limit: 25 }});

	    // 设置首行选中
        store.on("load", function(){
        	gridPanel.getSelectionModel().select(0);
        })
	}
});