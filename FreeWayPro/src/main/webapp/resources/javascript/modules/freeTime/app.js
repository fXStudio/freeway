/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'FreeTimeModule',
    appFolder: 'javascript/modules/freeTime', 
    controllers: ['FreeTimeController'],// 加载控制器控件
    
    autoCreateViewport: true
});

