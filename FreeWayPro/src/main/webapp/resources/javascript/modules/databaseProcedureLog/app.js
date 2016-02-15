/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'ProcedureLogModule',
    appFolder: 'javascript/modules/databaseProcedureLog', 
    controllers: ['ProcedureLogController'],// 加载控制器控件
    
    autoCreateViewport: true
});

