/**
 * 系统登录
 * 
 * @Author Ajaxfan
 */
Ext.application({
    name: 'LoginModule',
    appFolder: 'javascript/modules/login', 
    views: ['Window'],// 加载视图控件
    controllers: ['LoginController'],// 加载控制器控件
    
    // 应用程序执行器
    launch: function() {
    	// 创建窗体对象
        var win = Ext.create('widget.loginWindow');
        // 显示窗体对象
        win.show();
        // 居中显示
        win.center(); 
        // 设置默认的焦点
        Ext.getCmp('username').focus(false, 100);
   		// 设置登录窗体的居中状态
	    Ext.EventManager.onWindowResize(function() { win.center(); });
    }
});

