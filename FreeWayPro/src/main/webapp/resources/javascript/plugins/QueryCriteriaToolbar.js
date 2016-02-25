/**
 * 基本的查询工具条
 */
Ext.define('Ext.plugins.QueryCriteriaToolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.querycriteriatoolbar',
	
	autoScroll: true,
	stationHidden: true,
	hideBlank: false,
	hideAxisum: false,
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
	   	        format: 'Y/m/d',
	   	        width: 100,
	   	        editable: false,
	   	        value: new Date()
	   	   },
	   	   "<span>至</span>", 
	   	   {
	   	        id: 'endDate',
	   	        xtype: 'datefield',
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
				width: 242,
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
		   }), {
	   		    id: 'hiddenBlank',
		        xtype: 'checkbox',
		        fieldLabel: '过滤空牌',
	            labelWidth: 60,
	            labelAlign: 'right',
		        checked: true,
		        hidden: this.hideBlank
		   },
		   {
	   		   id: 'axisum',
			   xtype: 'combobox',
			   fieldLabel: '轴数',
	           labelWidth: 30,
	           labelAlign: 'right',
			   width: 98,
			   editable: false,
			   store: Ext.create('Ext.data.Store', {
				   fields: ['axisum', 'desc'],
				   data : [
					   {"axisum":"", "desc":"全部"},
				       {"axisum":"2", "desc":"2轴"},
				       {"axisum":"6", "desc":"6轴"}
				   ]
			   }),
			   queryMode: 'local',
			   displayField: 'desc',
			   valueField: 'axisum',
			   allowBlank: true,
			   hidden: this.hideAxisum,
			   listeners: {
				   afterRender: function() {
					   this.setValue("");
					   this.setRawValue("全部");
				   }
			   }
		   },
	   	   {
	   		   id: 'queryField',
	   		   xtype: 'textfield',
		       fieldLabel: this.label,
	           labelWidth: 45,
	           labelAlign: 'right',
	   		   width: 145,
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
	   				    var hiddenBlank = Ext.getCmp("hiddenBlank");
	   				    var axisum = Ext.getCmp("axisum");
		   		        var beginDate = Ext.util.Format.date(Ext.getCmp("beginDate").getValue(), 'Y/m/d');
		   		        var endDate = Ext.util.Format.date(Ext.getCmp("endDate").getValue(), 'Y/m/d');
		   		        
		   		        proxy.extraParamss = store.baseParams || {};
		   		        proxy.extraParams[el.paramName] = queryField.getValue();
		   		        proxy.extraParams["beginDate"] = beginDate;// 开始日期
		   		        proxy.extraParams["endDate"] = endDate;// 结束日期
		   		        proxy.extraParams["stationId"] = dept.getValue();// 收费站
		   		        proxy.extraParams["hiddenBlank"] = hiddenBlank.getValue();// 过滤空号牌
		   		        proxy.extraParams["axisum"] = axisum.getValue();// 轴数
		   		        
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