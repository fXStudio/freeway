Ext.define('CarCardsModule.view.TrackingWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.trackingwindow',

	requires: ["CarCardsModule.view.TrackingGrid"],
	
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
	items: [
	    {xtype: 'trackinggrid'}
	]
});