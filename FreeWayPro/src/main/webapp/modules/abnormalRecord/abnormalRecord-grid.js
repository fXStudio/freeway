/*!
 * 异常原因汇总
 */
Ext
		.onReady(function() {
			// 排除Mask文件无法正常显示的问题
			Ext.BLANK_IMAGE_URL = "../plugins/ext/resources/images/default/s.gif";
			Ext.chart.Chart.CHART_URL = '../plugins/ext/resources/charts.swf';
			// 使Tip提示可用
			Ext.QuickTips.init();
			// 在控件右边显示错误提示
			Ext.form.Field.prototype.msgTarget = 'side';

			// 创建数据集合
			var store = new Ext.data.JsonStore({
				totalProperty : 'totalCount', // 总的记录条数
				root : 'items', // 返回的json串中，用来存放菜单项信息的数据
				idProperty : 'recordNo', // 行标识
				autoDestroy : true, // 数据集自动销毁
				url : '../services/abnormalRecordList', // 数据服务
				fields: [{ // 数据集字段
		            name: 'enteName'
		        }, { // 数据集字段
		            name: 'exitName'
		        }, {
		            name: 'lane'
		        }, {
		            name: 'vEnte'
		        }, {
		            name: 'vExit'
		        }, {
		            name: 'exitDate'
		        }, {
		            name: 'enteDate'
		        }, {
		            name: 'axisnum'
		        }, {
		            name: 'totalweight'
		        }, {
		            name: 'ratingweight'
		        }, {
		            name: 'carExitcodeRecognize'
		        }, {
		            name: 'carIncodeRecognize'
		        }],
				listeners : {
					load : function() { // 数据集合默认选中第一行
						Ext.getCmp("searchField").focus();
					}
				}
			});
			// 装载数据
			store.load({
				params : {
					start : 0,
					limit : 25
				}
			});
			// 创建表格对象
			var grid = new Ext.grid.GridPanel(
					{
						id : 'grid_id',
						store : store, // 绑定数据集
						loadMask : true, // 启用数据加载时的Mask
						stripeRows : true, // 表格显示斑马线
						stateId : 'grid', // paging bar on the bottom
						region : 'center',
						sm : new Ext.grid.RowSelectionModel({
							singleSelect : true
						}),
						tbar : [
								"<span style='margin:0 4px 0 10px;'>时间:</span>",
								{
									id : 'beginDate',
									xtype : 'datefield',
									name : 'heatStart',
									format : 'Y-m-d',
									width : 100,
									editable : false,
									value: new Date() 
								},
								"<span style='margin:0 4px;'>起--止</span>",
								{
									id : 'endDate',
									xtype : 'datefield',
									name : 'heatEnd',
									format : 'Y-m-d',
									width : 100,
									editable : false,
									value: new Date().add(Date.DAY, 1)
								}, 
								"<span style='margin:0 4px;'>收费站:</span>",
								new Ext.ux.ComboBoxTree({
									id: 'dept',
						            name: 'buildingNumber',
						            renderName: 'buildingTree',
									width : 260,
						            tpl: "<tpl for='.'><div style='height:200px'><div id='buildingTree'></div></div></tpl>",
						            treeUrl: "../services/fsOrgDeptList",
						            editable: false,
						            allowBlank: true,
						            rootText: "所有收费站",
						            autoScroll: false,
						            callback: function(id, text) {
						                // Ext.getCmp('buildingId').setValue(id.split('-')[2]);
						            }
						        }),
								"<span style='margin:0 4px 0 10px;'>车牌号:</span> ",
								new Ext.ux.form.SearchField(
										{
											store : store,
											id : 'searchField',
											paramName : 'carCode',
											width: 120,
											onTrigger1Click : function() {
												if (this.hasSearch) {
													this.el.dom.value = '';
													Ext.getCmp("beginDate")
															.setValue("");
													Ext.getCmp("endDate")
															.setValue("");
													Ext.getCmp('dept').setValue("");
													var o = {
														start : 0,
					                                    limit : 25
													};
													this.store.baseParams = this.store.baseParams
															|| {};
													this.store.baseParams[this.paramName] = '';
													this.store.baseParams["beginDate"] = '';
													this.store.baseParams["endDate"] = '';
													this.store.baseParams["enteName"] = '';
													this.store.reload({
														params : o
													});
													this.triggers[0].hide();
													this.hasSearch = false;
												}
											},
											onTrigger2Click : function() {
												var v = this.getRawValue();
												var beginDate = Ext.util.Format
														.date(Ext.getCmp(
																"beginDate")
																.getValue(),
																'Y/m/d');
												var endDate = Ext.util.Format
														.date(Ext.getCmp(
																"endDate")
																.getValue(),
																'Y/m/d');
												var dept = Ext.getCmp('dept').getValue();
												if (v.length < 1
														&& beginDate.length < 1
														&& endDate.length < 1 && dept.length < 1) {
													this.onTrigger1Click();
													return;
												}
												var o = {
													start : 0,
				                                    limit : 25
												};
												this.store.baseParams = this.store.baseParams
														|| {};
												this.store.baseParams[this.paramName] = v;
												this.store.baseParams["beginDate"] = beginDate;
												this.store.baseParams["endDate"] = endDate;
												this.store.baseParams["enteName"] = Ext.getCmp('dept').getValue();
												this.store.reload({
													params : o
												});
												this.hasSearch = true;
												this.triggers[0].show();
											}
										}) ],
						columns : [ new Ext.grid.RowNumberer({ // 行号
							width : 30
						}), {
				            header: '入口识别车牌',
				            width: 120,
				            sortable: true,
				            dataIndex: 'carIncodeRecognize'
				        }, {
				            header: '入口站名称',
				            width: 120,
				            sortable: true,
				            dataIndex: 'enteName'
				        }, {
				            header: '车道编号',
				            width: 90,
				            sortable: true,
				            dataIndex: 'lane'
				        }, {
				            header: '入口时间',
				            width: 140,
				            sortable: true,
				            dataIndex: 'enteDate'
				        }, {
				            header: '出口站名称',
				            width: 120,
				            sortable: true,
				            dataIndex: 'exitName'
				        }, {
				            header: '出口时间',
				            width: 140,
				            sortable: true,
				            dataIndex: 'exitDate'
				        }, {
				            header: '轴数',
				            width: 90,
				            sortable: true,
				            dataIndex: 'axisnum'
				        }, {
				            header: '轴总数',
				            width: 90,
				            sortable: true,
				            dataIndex: 'totalweight'
				        }, {
				            header: '轴总重',
				            width: 90,
				            sortable: true,
				            dataIndex: 'ratingweight'
				        }],
						bbar : new Ext.PagingToolbar(
								{ // 表格底部工具条样式
									pageSize : 25,
									store : store, // 数据集合
									displayInfo : true,
									displayMsg : '当前显示 {0} - {1} &nbsp;&nbsp; 共有{2}条记录',
									emptyMsg : "没有相关信息",
									refreshText : "刷新"
								})
					});
			var viewport = new Ext.Viewport({
				layout : 'fit',
				items : [ grid ]
			});

			// 禁止整个页面的右键
			Ext.getDoc().on("contextmenu", function(e) {
				e.stopEvent();
			});
		});
