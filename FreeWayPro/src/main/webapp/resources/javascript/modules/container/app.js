/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'MainModule',
    appFolder: 'javascript/modules/container', 
    
    // 应用程序执行器
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [{
                cls: 'docs-header',
                height: 34,
                region: 'north',
                xtype: 'box',
                el: 'header',
                border: false,
                margins: '0 0 3 0'
            }, Ext.create('Ext.tree.Panel', {
                region: 'west',
                title: '系统功能树',
                useArrows : false,//展开按钮图标是箭头还是+-
                rootVisible : false,//允许看到跟节点
                padding : 5,//不解释
                collapsible: true,
                split: true,
                autoScroll: true,
                width: 200,
                store : Ext.create('Ext.data.TreeStore', {
                    root: { expanded: true },
                    autoLoad: true,
                    fields: ['id', 'text', 'leaf', 'url'],
                    proxy: {
                        type : 'ajax',
                        actionMethods: { read: 'POST' },
                        url : 'services/systemMenuList',//请求  
                    },
                    listeners : {  
                    	load: function(records, successful, options) {
                            if (Ext.get('loading')) {
                                // 页面加载完成后去除等待窗体
                                setTimeout(function() {
                                    Ext.get('loading').remove();
                                    Ext.get('loading-mask').fadeOut({
                                        remove: true
                                    });
                                }, 1 * 1000);
                            }
                        } 
                    }
                }),
                listeners: {
                	click: function(n) {
                        var sn = this.selModel.selNode || {}; // 初始化的时候选中节点为空
                        if (n.leaf) { // 对于父菜单和重复选中菜单项不做操作
                            Ext.getCmp('doc-body').add({
                                title: n.text,
                                id: n.id,
                                iconCls: 'tabs',
                                html: '<iframe src=' + n.attributes.url + ' width="100%" height="100%"></iframe>',
                                closable: true,
                                listeners: {
                                    beforedestroy: function(comp) { // 删除iframe防止浏览器内存泄露
                                        var ifra = comp.body.dom.firstChild; // 从Dom树种获得iframe对象
                                        ifra.src = "about:blank"; // Iframe内容置为空
                                        comp.body.dom.removeChild(ifra); // 从dom树中移除Iframe对象
                                        comp = ifra = null; // 引用置空以便垃圾回收器清理资源
                                    }
                                }
                            }).show();
                        }
                    },
                    'itemclick': function (view, record, item, index, e, option) {
                        if (record.get('leaf')) {
                        	Ext.getCmp('doc-body').add({
	                            title: record.get('text'),
	                            id: record.get('id'),
	                            iconCls: 'tabs',
	                            html: '<iframe src=' + record.get('url') + ' width="100%" height="100%"></iframe>',
	                            closable: true,
	                            listeners: {
	                                beforedestroy: function(comp) { // 删除iframe防止浏览器内存泄露
	                                    var ifra = comp.body.dom.firstChild; // 从Dom树种获得iframe对象
	                                    ifra.src = "about:blank"; // Iframe内容置为空
	                                    comp.body.dom.removeChild(ifra); // 从dom树中移除Iframe对象
	                                    comp = ifra = null; // 引用置空以便垃圾回收器清理资源
	                                }
	                            }
	                        }).show();
                        }
                        else {
                            var expand = record.get('expanded')
                            if (expand) {
                                view.collapse(record);
                            }
                            else {
                                view.expand(record);
                            }
                        }
                    }
                }
            }), Ext.widget('tabpanel', {
                id: 'doc-body',
                region: 'center',
                margins: '0 2 0 0',
                activeTab: 0,
                width: 90,
                resizeTabs: false,
                enableTabScroll: true,
                items: {
                    title: '系统简介',
                    iconCls: 'tabs',
                    html: '<iframe src="describe" width="100%" height="100%"></iframe>'
                },
                plugins: Ext.create('Ext.ux.TabCloseMenu')
            })]
        });
    }
});

