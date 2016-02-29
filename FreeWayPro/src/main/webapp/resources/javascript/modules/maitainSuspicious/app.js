/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'MDSuspiciousModule',
    appFolder: 'javascript/modules/maitainSuspicious',

    autoCreateViewport: true,
    // 应用程序执行器
    launch: function() {
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) { e.stopEvent(); });
    }
});

