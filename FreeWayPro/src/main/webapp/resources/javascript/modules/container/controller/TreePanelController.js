/**
 * 导航树菜单的监控器
 */
Ext.define('MainModule.controller.TreePanelController', {
    extend: 'Ext.app.Controller',
	
    // Cotroller的业务处理
    init: function() {
	    this.control({
	    	'MainTreePanel': {
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
                    } else {
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
        })
        // 创建数据源的监听
        Ext.getStore('TreeStore').on('load', function(records, successful, options) {
        	// 页面加载完成后去除等待窗体
            if (Ext.get('loading')) {
                setTimeout(function() {
                    Ext.get('loading').remove();
                    Ext.get('loading-mask').fadeOut({
                        remove: true
                    });
                }, 1 * 1000);
            }
        });
    }
});