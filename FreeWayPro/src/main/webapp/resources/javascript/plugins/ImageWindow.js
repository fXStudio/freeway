Ext.define('Ext.plugins.ImageWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.imagewindow',
	
	title: '车辆快照',
    iconCls: 'feed-icon',
    resizable: false,
    modal: true,
    y: 40,
    closeAction: 'close'
});