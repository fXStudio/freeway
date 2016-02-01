/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'MainModule',
    appFolder: 'javascript/modules/container', 
    views: ['TreePanel', 'TabPanel'],// 加载视图控件
    controllers: ['TreePanelController'],// 加载控制器控件
    stores: ['TreeStore'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	var store = Ext.create('MainModule.store.TreeStore');
    	
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [{
                cls: 'docs-header',
                height: 34,
                region: 'north',
                xtype: 'box',
                el: 'header',
                border: false,
                margins: '0 0 3 0'
            }, Ext.widget('MainTreePanel', {
                   region: 'west', 
            	   store: store
    		   }), 
               Ext.widget('MainTabPanel', {region: 'center'})]
        });
    }
});

