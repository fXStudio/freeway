/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'MainModule',// 模块名称
    appFolder: 'javascript/modules/container',// 模块文件路径 
    views: ['TreePanel', 'TabPanel'],// 加载视图控件
    controllers: ['TreePanelController'],// 加载控制器控件
    stores: ['TreeStore'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 菜单树数据源对象
    	var store = Ext.create('MainModule.store.TreeStore');
    	
    	// 页面布局设置
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: Ext.getBody(),
            frame: false,
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
        

        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
    }
});

