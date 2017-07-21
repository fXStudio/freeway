Ext.define('LoseCardModule.view.TrackingWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.trackingwindow',
	
	title: '车辆通行记录',
    iconCls: 'feed-icon',
    resizable: false,
    modal: true,
    width: 680,
    height: 400,
    y: 100,
    autoScroll: true,
    closeAction: 'hide',
    layout: 'fit', 
	
	/**
     * Component Init
     */
    initComponent: function() {
    	// Create Store Object
    	var store = Ext.create('LoseCardModule.store.Tracking');
    	
    	// Copy properties to Origin Object
    	Ext.apply(this, {
    		items: Ext.create('LoseCardModule.view.TrackingGrid', {
    			id: 'trackingGrid',
        		store: store,
            	bbar: {// Bottom bar
            		xtype: 'paging',
            		store: store
            	}
    		})
    	});
    	// Call Parent Constructor
        this.callParent(arguments);
    }
});