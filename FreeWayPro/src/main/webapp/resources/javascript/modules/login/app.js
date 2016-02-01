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
	        title: '登入系统',
	        header: {
	            titlePosition: 2,
	            titleAlign: 'left'
	        },
	        frame: false,
	        closable: false,
	        draggable: false,
	        resizeable: false,
	        bodyPadding: 2,
	        width: 320,
	        height: 180,
//	        y: Ext.getBody().getHeight() / 2 + 60,
	        layout: 'fit',
	        items: [new LoginModule.view.Form()]
	    });
        // 显示窗体对象
        win.show();
        // 设置默认的焦点
        Ext.getCmp('username').focus(false, 100);

   		// 设置登录窗体的居中状态
	    Ext.EventManager.onWindowResize(function() {
	    	win.center();// 窗体居中
//	    	win.setPosition(win.getPosition()[0], Ext.getBody().getHeight() / 2 + 60);
	    });
    }
});

