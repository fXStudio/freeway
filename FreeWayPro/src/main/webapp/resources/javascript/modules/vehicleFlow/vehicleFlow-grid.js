/*!
 * 异常原因汇总
 */
Ext.onReady(function() {
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
		url : '../services/vehicleFlowList', // 数据服务
		fields : [ { // 数据集字段
			name : 'carExitcodeRecognize'
		}, { // 数据集字段
			name : 'inName'
		}, {
			name : 'enteDate'
		}, {
			name : 'outName'
		}, {
			name : 'exitDate'
		}, {
			name : 'totalweight'
		}, {
			name : 'actdistance'
		}, {
			name : 'vExit'
		}, {
			name : 'carType'
		}, {
			name : 'icCode'
		}, {
			name : 'tollFare'
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
	var grid = new Ext.grid.GridPanel({
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
									width : 137,
									editable : false,
									value:new Date() 
								},
								"<span style='margin:0 4px;'>起--止</span>",
								{
									id : 'endDate',
									xtype : 'datefield',
									name : 'heatEnd',
									format : 'Y-m-d',
									width : 137,
									editable : false,
									value: new Date().add(Date.DAY, 1)
								},
		"<span style='margin:0 4px;'>车牌号:</span> ",
				new Ext.ux.form.SearchField(
										{
											store : store,
											id : 'searchField',
											paramName : 'carNo',
											width: 120,
											onTrigger1Click : function() {
												if (this.hasSearch) {
													this.el.dom.value = '';
													Ext.getCmp("beginDate")
															.setValue("");
													Ext.getCmp("endDate")
															.setValue("");
													var o = {
														start : 0
													};
													this.store.baseParams = this.store.baseParams
															|| {};
													this.store.baseParams[this.paramName] = '';
													this.store.baseParams["beginDate"] = '';
													this.store.baseParams["endDate"] = '';
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
												if (v.length < 1
														&& beginDate.length < 1
														&& endDate.length < 1 && dept.length < 1) {
													this.onTrigger1Click();
													return;
												}
												var o = {
													start : 0
												};
												this.store.baseParams = this.store.baseParams
														|| {};
												this.store.baseParams[this.paramName] = v;
												this.store.baseParams["beginDate"] = beginDate;
												this.store.baseParams["endDate"] = endDate;
												this.store.reload({
													params : o
												});
												this.hasSearch = true;
												this.triggers[0].show();
											}
										}), '->', 
		{
            xtype: 'button',
            text: '导出Excel',
            iconCls: 'export-excel',
            listeners: {
            	click: function(){
	        		var beginDate = Ext.util.Format.date(Ext.getCmp(
												"beginDate")
												.getValue(),
												'Y/m/d');
					var endDate = Ext.util.Format.date(Ext.getCmp(
										"endDate")
										.getValue(),
										'Y/m/d');
					var carNo = Ext.getCmp('searchField').getValue();

						            	
            		window.location.href = "../services/vehicleFlowExport?carNo=" + carNo + "&beginDate=" + beginDate + "&endDate=" + endDate;
            	}
            }
        }],
		columns : [ new Ext.grid.RowNumberer({ // 行号
			width : 30
		}), {
			header : '车牌号',
			width : 120,
			sortable : true,
			dataIndex : 'carExitcodeRecognize'
		}, {
			header : '入口收费站',
			width : 120,
			sortable : true,
			dataIndex : 'inName'
		}, {
			header : '入口时间',
			width : 140,
			sortable : true,
			dataIndex : 'enteDate'
		}, {
			header : '出口收费站',
			width : 90,
			sortable : true,
			dataIndex : 'outName'
		}, {
			header : '出口时间',
			width : 140,
			sortable : true,
			dataIndex : 'exitDate'
		}, {
			header : '轴重',
			width : 70,
			sortable : true,
			dataIndex : 'totalweight'
		}, {
			header : '里程',
			width : 140,
			sortable : true,
			dataIndex : 'actdistance'
		}, {
			header : '车型',
			width : 70,
			sortable : true,
			dataIndex : 'vExit'
		}, {
			header : '客车种类',
			width : 70,
			sortable : true,
			dataIndex : 'carType'
		}, {
			header : '卡号',
			width : 90,
			sortable : true,
			dataIndex : 'icCode'
		}, {
			header : '收费额',
			width : 90,
			sortable : true,
			dataIndex : 'tollFare'
		}]
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
