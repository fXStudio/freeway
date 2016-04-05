Ext.define('AbnormalRecordModule.controller.AbnormalRecordController', {
    extend: 'Ext.app.Controller',
    
    refs: [
        {ref: 'gridPanel', selector: 'gridpanel'},
        {ref: 'pieChart', selector: 'piechart'},
        {ref: 'columnChart', selector: 'columnchart'}
    ],
    
    /**
     * Module Launch
     */
	onLaunch: function() {
	    var gridPanel = this.getGridPanel(), store = gridPanel.getStore(), 
	        pieStore = this.getPieChart().getStore(),
	        columnStore = this.getColumnChart().getStore();

	    // 设置焦点
        store.on("load", function(){
        	gridPanel.getSelectionModel().select(0);
        	var comp = Ext.getCmp('queryField');
        	if(comp) {
        		Ext.getCmp('queryField').focus(true, 100);
    		}
        	
        	// 设置试图参数
        	pieStore.getProxy().extraParams = store.getProxy().extraParams || {};
        	columnStore.getProxy().extraParams = store.getProxy().extraParams || {};
        	
        	// 加载报表试图对象
        	pieStore.load();
        	columnStore.load();
        });
	}
});