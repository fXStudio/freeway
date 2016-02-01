Ext.define('MainModule.view.TabPanel' ,{
	extend: 'Ext.tab.Panel',
	alias: 'widget.MainTabPanel',
	id: 'doc-body',
    margins: '0 2 0 0',
    activeTab: 0,
    width: 90,
    resizeTabs: false,
    enableTabScroll: true,
    items: {
        title: '系统简介',
        iconCls: 'tabs',
        html: '<iframe src="describe" width="100%" height="100%"></iframe>'
    },
    plugins: Ext.create('Ext.ux.TabCloseMenu')
});