Docs = {};
/**
 * FXStudio 树菜单面板
 * @Author Ajaxfan
 */
FXTreePanel = function() {
    FXTreePanel.superclass.constructor.call(this, {
        id: 'fx-tree', // 面板ID
        region: 'west', // 在布局面板中的位置
        split: true, // 是否可收缩
        header: false, // 不显示面板头
        width: 200, // 面板的默认宽度
        minSize: 175, // 面板的最小宽度
        maxSize: 500, // 面板的最大宽度
        collapsible: true, // 树是否能够收缩
        margins: '0 0 0 5', // 树边距
        cmargins: '0 0 0 0', // 节点边距
        rootVisible: false, // 根节点不可见
        lines: false, // 不显示线条
        autoScroll: true, // 根据宽度自动出现滚动条
        animCollapse: false, // 不显示收缩树的动画效果
        animate: false, // 不启用树的动画效果
        collapseMode: 'mini', // 收缩模式(最小收起)
        loader: new Ext.tree.TreeLoader({ // 从指定路径中加载tree信息
            dataUrl: 'service/systemMenuList',
            listeners: {
                load: function(f, node, response) {
                    // 展开所有节点，因为extjs的树在初始化时子节点并没有注册到dom中
                    // 所有需要作如下动作来注册dom信息
                    node.expand(true);
                    // 收起除顶级节点以外的所有节点
                    node.collapseChildNodes(true);

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
        root: new Ext.tree.AsyncTreeNode({ // 顶级节点
            id: '0',
            text: '系统功能菜单',
            expanded: true, // 默认展开
            expandable: true, // 无论是否有子节点都显示图标
            singleClickExpand: false // 双击展开节点
        }),
        collapseFirst: false // 不收起首层节点
    });

    // 树节点的展开样式
    this.getSelectionModel().on('beforeselect', function(sm, node) {
        return node.isLeaf();
    });
};

Ext.extend(FXTreePanel, Ext.tree.TreePanel, {
    initComponent: function() {
        this.hiddenPkgs = [];
        Ext.apply(this, {
            tbar: [' ',
                new Ext.form.TextField({
                    width: 120,
                    emptyText: '查询用例',
                    enableKeyEvents: true, // 允许键盘时间
                    listeners: {
                        render: function(f) { // 渲染器监听
                            this.filter = new Ext.tree.TreeFilter(this, {
                                clearBlank: true,
                                autoClear: true
                            });
                        },
                        keydown: {
                            fn: this.filterTree,
                            buffer: 350,
                            scope: this
                        },
                        scope: this
                    }
                }), ' ', ' ', {
                    iconCls: 'icon-expand-all',
                    tooltip: '展开所用节点',
                    handler: function() {
                        this.root.expand(true);
                    },
                    scope: this
                }, '-', {
                    iconCls: 'icon-collapse-all',
                    tooltip: '收起所有节点',
                    handler: function() {
                        this.root.collapse(true);
                    },
                    scope: this
                }
            ]
        })
        FXTreePanel.superclass.initComponent.call(this);
    },
    filterTree: function(t, e) {
        var text = t.getValue();
        Ext.each(this.hiddenPkgs, function(n) {
            n.ui.show();
        });
        if (!text) {
            this.filter.clear();
            return;
        }
        this.expandAll();

        var re = new RegExp('^' + text, 'i');
        this.filter.filterBy(function(n) {
            // return !n.attributes.isClass || re.test(n.text);
            return !n.attributes.leaf || n.text.indexOf(text) > -1;
        });

        // hide empty packages that weren't filtered
        this.hiddenPkgs = [];
        var me = this;
        this.root.cascade(function(n) {
            if (!n.attributes.leaf && n.ui.ctNode.offsetHeight < 3) {
                n.ui.hide();
                me.hiddenPkgs.push(n);
            }
        });
    },
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
        }
    }
});

MainPanel = function() {
    MainPanel.superclass.constructor.call(this, {
        id: 'doc-body',
        region: 'center',
        margins: '0 2 0 0',
        resizeTabs: false,
        minTabWidth: 135,
        tabWidth: 135,
        plugins: new Ext.ux.TabCloseMenu(),
        enableTabScroll: true,
        activeTab: 0,
        items: {
            title: '系统简介',
            html: '<iframe src="describe" width="100%" height="100%"></iframe>',
            iconCls: 'icon-docs'
        }
    });
};

Ext.extend(MainPanel, Ext.TabPanel, {
    initEvents: function() {
        MainPanel.superclass.initEvents.call(this);
        this.body.on('click', this.onClick, this);
    },

    onClick: function(e, target) {
        if (target = e.getTarget('a:not(.exi)', 3)) {
            var cls = Ext.fly(target).getAttributeNS('ext', 'cls');
            e.stopEvent();
            if (cls) {
                var member = Ext.fly(target).getAttributeNS('ext', 'member');
                this.loadClass(target.href, cls, member);
            } else if (target.className == 'inner-link') {
                this.getActiveTab().scrollToSection(target.href.split('#')[1]);
            } else {
                window.open(target.href);
            }
        } else if (target = e.getTarget('.micon', 2)) {
            e.stopEvent();
            var tr = Ext.fly(target.parentNode);
            if (tr.hasClass('expandable')) {
                tr.toggleClass('expanded');
            }
        }
    },

    loadClass: function(href, cls, member) {
        var id = 'docs-' + cls;
        var tab = this.getComponent(id);
        if (tab) {
            this.setActiveTab(tab);
            if (member) {
                tab.scrollToMember(member);
            }
        } else {
            var autoLoad = {
                url: href
            };
            if (member) {
                autoLoad.callback = function() {
                    Ext.getCmp(id).scrollToMember(member);
                }
            }
            var p = this.add(new DocPanel({
                id: id,
                cclass: cls,
                autoLoad: autoLoad,
                iconCls: Docs.icons[cls]
            }));
            this.setActiveTab(p);
        }
    }
});

Ext.onReady(function() {
    // 排除Mask文件无法正常显示的问题
    Ext.BLANK_IMAGE_URL = "../plugins/ext/resources/images/default/s.gif";
    // 使Tip提示可用
    Ext.QuickTips.init();
    // 在控件右边显示错误提示
    Ext.form.Field.prototype.msgTarget = 'side';

    // 构建视图对象
    new Ext.Viewport({
        layout: 'border',
        items: [{
            cls: 'docs-header',
            height: 34,
            region: 'north',
            xtype: 'box',
            el: 'header',
            border: false,
            margins: '0 0 3 0'
        }, new FXTreePanel(), new MainPanel()]
    }).doLayout();
});

// 不让浏览器记录访问的历史信息
Ext.Ajax.on('requestcomplete', function(ajax, xhr, o) {
    if (typeof urchinTracker == 'function' && o && o.url) {
        urchinTracker(o.url);
    }
});
