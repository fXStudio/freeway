/**
 * 系统主页面
 * 
 * @Author Renjian
 */
Ext.application({
    name: 'LoginLogModule',
    appFolder: 'javascript/modules/userLoginLog', 
//    views: ['LoginLogPanel'],// 加载视图控件
//    controllers: ['TreePanelController'],// 加载控制器控件
    stores: ['LoginLogStore'],// 存储器
    
    // 应用程序执行器
    launch: function() {
    	// 存储器
    	var store = Ext.create('LoginLogModule.store.LoginLogStore');
    	
    	// 初始化页面视图
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [Ext.create('Ext.grid.Panel', {
                loadMask: true, // 启用数据加载时的Mask
                stripeRows: true, // 表格显示斑马线
                store: store,
                stateId: 'grid', // paging bar on the bottom
                tbar: [
                    "<span style='margin:0 4px 0 10px;'>登录时间:</span>", {
                        id: 'beginDate',
                        xtype: 'datefield',
                        name: 'heatStart',
                        format: 'Y/m/d',
                        width: 137,
                        editable: false,
                        value: new Date()
                    },
                    "<span style='margin:0 4px;'>起--止</span>", {
                        id: 'endDate',
                        xtype: 'datefield',
                        name: 'heatEnd',
                        format: 'Y/m/d',
                        width: 137,
                        editable: false,
            			value: Ext.Date.add(new Date(), Ext.Date.DAY, 1)
                    },
                    "<span style='margin:0 4px 0 10px;'>用户名:</span> ",
                    Ext.create('Ext.ux.form.SearchField', {
                        store: store,
                        id: 'searchField',
                        paramName: 'loginUser',
                        onTrigger1Click: function() {
                        	var proxy = this.store.getProxy();
                        	
                            if (this.hasSearch) {
                                this.el.dom.value = '';
                                Ext.getCmp("beginDate").setValue("");
                                Ext.getCmp("endDate").setValue("");
                                var o = {
            						start : 0,
                                    limit : 25
                                };
                                proxy.extraParams = proxy.extraParams || {};
                                proxy.extraParams[this.paramName] = '';
                                proxy.extraParams["beginDate"] = '';
                                proxy.extraParams["endDate"] = '';
                                this.store.reload({
                                    params: o
                                });
            	                me.triggerEl.item(0).setDisplayed('none');
                                this.hasSearch = false;
                            }
                        },
                        onTrigger2Click: function() {
                        	var proxy = this.store.getProxy();
                            var v = this.getValue();
                            var beginDate = Ext.util.Format.date(Ext.getCmp("beginDate").getValue(), 'Y/m/d');
                            var endDate = Ext.util.Format.date(Ext.getCmp("endDate").getValue(), 'Y/m/d');
                            if (v.length < 1 && beginDate.length < 1 && endDate.length < 1) {
                                this.onTrigger1Click();
                                return;
                            }
                            var o = {
            					start : 0,
                                limit : 25
                            };
                            proxy.extraParamss = this.store.baseParams || {};
                            proxy.extraParams[this.paramName] = v;
                            proxy.extraParams["beginDate"] = beginDate;
                            proxy.extraParams["endDate"] = endDate;
                            this.store.reload({
                                params: o
                            });
                            this.hasSearch = true;
                            this.triggerEl.item(0).setDisplayed('block');
                        }
                    })
                ],
                columns: [ Ext.create('Ext.grid.RowNumberer', {width: 50}), {
                    header: '用户名',
                    width: 120,
                    sortable: true,
                    dataIndex: 'username'
                }, {
                    header: '登录时间',
                    width: 160,
                    sortable: true,
                    dataIndex: 'logintime'
                }, {
                    header: 'IP地址',
                    width: 160,
                    sortable: true,
                    dataIndex: 'ip'
                }],
                bbar: Ext.create('Ext.toolbar.Paging', { // 表格底部工具条样式
                    pageSize: 25,
                    store: store, // 数据集合
                    displayInfo: true,
                    displayMsg: '当前显示 {0} - {1} &nbsp;&nbsp; 共有{2}条记录',
                    emptyMsg: "没有相关信息",
                    refreshText: "刷新"
                })
            })]
        });
        // 装载数据
        store.load({
            params: {
                start: 0,
                limit: 25
            }
        });
        
        // 禁止整个页面的右键
        Ext.getDoc().on("contextmenu", function(e) {
            e.stopEvent();
        });
    }
});

