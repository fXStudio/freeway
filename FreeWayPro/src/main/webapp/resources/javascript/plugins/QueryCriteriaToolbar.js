/**
 * 基本的查询工具条
 */
Ext.define('Ext.plugins.QueryCriteriaToolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.querycriteriatoolbar',
	
	stationHidden: true,
	// 组件初始化函数，在组建初始化的时候，可以进行内部组件绑定
    initComponent: function() {
    	var store = this.store,
    	    el = this;
    	
        // 创建工具条
        Ext.apply(this, {
           items: ["<span>时间: </span>", 
           {
	           	id: 'beginDate',
	   	        xtype: 'datefield',
	   	        name: 'heatStart',
	   	        format: 'Y/m/d',
	   	        width: 100,
	   	        editable: false,
	   	        value: new Date()
	   	   },
	   	   "<span>至</span>", 
	   	   {
	   	        id: 'endDate',
	   	        xtype: 'datefield',
	   	        name: 'heatEnd',
	   	        format: 'Y/m/d',
	   	        width: 100,
	   	        editable: false,
	   			value: Ext.Date.add(new Date(), Ext.Date.DAY, 1)
	   	   },
		   Ext.create('Ext.ux.TreeCombo', {
			   	id: 'dept',
			   	fieldLabel: '收费站',
			   	labelAlign: 'right',
	            renderName: 'buildingTree',
	            editable: false,
	            labelWidth: 45,
				width: 245,
				hidden: this.stationHidden,
	            tpl: "<tpl for='.'><div style='height:200px'><div id='buildingTree'></div></div></tpl>",
	            store: Ext.create('Ext.data.TreeStore', {
	            	autoLoad: true,
	            	autoDestroy: true,
	            	fields: ["sn", "text"],
	                root: { expanded: true },
	                proxy: {
	                    type : 'ajax',
	                    actionMethods: { read: 'POST' },
	                    url : 'services/fsOrgDeptList',//请求  
	                },
	                listeners: {
	                	load: function() {Ext.getDom('searchBtn').click();}
	                }
	            })
		   }),
	   	   "<span style='margin:0 1px 0 2px;'>" + this.label + ":</span> ", {
	   		   id: 'queryField',
	   		   xtype: 'textfield',
	   		   width: 100,
	           enableKeyEvents: true,
	           listeners: {
                   specialkey: function(field, e){
                       if (e.getKey() == e.ENTER) {
                    	   Ext.getDom('searchBtn').click();
                       }
                   }
	           } 
	   	   }, {
	   		   id: 'searchBtn',
	   		   xtype: 'button',
	   		   iconCls: 'search',
	   		   text: '查询',
	   		   listeners: {
	   			   click: function() {
	   				    var proxy = store.getProxy();
	   				    var queryField = Ext.getCmp('queryField');
	   				    var dept = Ext.getCmp('dept');
		   		        var beginDate = Ext.util.Format.date(Ext.getCmp("beginDate").getValue(), 'Y/m/d');
		   		        var endDate = Ext.util.Format.date(Ext.getCmp("endDate").getValue(), 'Y/m/d');
		   		        
		   		        proxy.extraParamss = store.baseParams || {};
		   		        proxy.extraParams[el.paramName] = queryField.getValue();
		   		        proxy.extraParams["beginDate"] = beginDate;// 开始日期
		   		        proxy.extraParams["endDate"] = endDate;// 结束日期
		   		        proxy.extraParams["stationId"] = dept.getValue();// 手奋战
		   		        
		   		        store.reload({
		   		        	start : 0,
		   		            limit : 25
		   		        });
	   			   }
	   		   }
	   	   }]
        });
        
        return this.callParent(arguments);
    }
})