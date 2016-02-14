/**
 * 系统登录页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'LoginModule',
    appFolder: 'javascript/modules/login', 
    views: ['Form'],// 加载视图控件
    controllers: ['Login'],// 加载控制器控件
    
    // 应用程序执行器
    launch: function() {
    	// 创建窗体对象
        var win = Ext.create('widget.window', {
	        header: {
	        	title: '用户登陆',
	            iconCls: 'login'
	        },
	        frame: false,
	        closable: false,
	        draggable: false,
	        resizable: false,
	        width: 360,
	        height: 190,
	        layout: 'fit',        
	        items: [Ext.create('LoginModule.view.Form')]
	    });
        // 显示窗体对象
        win.show();
        // 设置默认的焦点
        Ext.getCmp('username').focus(false, 100);

   		// 设置登录窗体的居中状态
	    Ext.EventManager.onWindowResize(function() {
	    	win.center();// 窗体居中        
	    });
    }
});

