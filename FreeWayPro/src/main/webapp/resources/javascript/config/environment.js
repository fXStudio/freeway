// 开启ADM功能，关闭脚本缓存
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths:{
    	'Ext.ux': 'javascript/extjs/ux/'
    }
});

// 开启Cookie记录功能，有效期为7日
Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
    expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7))
}));

// 初始化提示功能，设定提示位置为字段边缘
Ext.tip.QuickTipManager.init();
Ext.form.Field.prototype.msgTarget = 'side';