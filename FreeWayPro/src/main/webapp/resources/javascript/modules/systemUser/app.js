/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'SystemUserModule',
    appFolder: 'javascript/modules/systemUser',
    controllers: ['SystemUserController', 'DeptTreePanelController', 'SystemUserWindowController'],// 控制器
    stores: ['SystemUser'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = this.getSystemUserStore();
    	// 创建窗体对象
    	Ext.create('SystemUserModule.view.SystemUserWindow');
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [Ext.create('SystemUserModule.view.SystemUserGrid', {
            	store: store,
                bbar: Ext.create('Ext.plugins.Paging', { store: store })
            })]
        });
        // 装载数据
        store.load({params: { start: 0, limit: 25 }});
        
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
    }
});
