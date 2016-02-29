/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'MDBadCardModule',
    appFolder: 'javascript/modules/mdBadCard',
    
    // 应用程序执行器
    launch: function() {
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: Ext.create('MDBadCardModule.view.MDBadCardForm'),
            listeners: {
            	afterrender: function(){Ext.getCmp('carInCode').focus(true, 100);}
            }
        });
        
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
    }
});

