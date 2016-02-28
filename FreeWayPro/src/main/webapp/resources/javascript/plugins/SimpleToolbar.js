/**
 * 基本的查询工具条
 */
Ext.define('Ext.plugins.SimpleToolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.simpletoolbar',

	// 组件初始化函数，在组建初始化的时候，可以进行内部组件绑定
    initComponent: function() {
    	var store = this.store,
    	    el = this;
    	
        // 创建工具条
        Ext.apply(this, {
    		items: ['->', , Ext.create('Ext.ux.TreeCombo', {
			   	id: 'dept',
			   	fieldLabel: '收费站',
			   	labelAlign: 'right',
	            renderName: 'buildingTree',
	            editable: false,
	            labelWidth: 55,
				width: 242,
				hidden: true,
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
	   		   id: 'queryField',
	   		   xtype: 'textfield',
		       fieldLabel: this.label,
	           labelWidth: 55,
	           labelAlign: 'right',
	   		   width: 160,
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
	   		   width: 90,
	   		   listeners: {
	   			   click: function() {
	   				    var proxy = store.getProxy();
	   				    var queryField = Ext.getCmp('queryField');
	   				    var dept = Ext.getCmp('dept');
		   		        
		   		        proxy.extraParamss = store.baseParams || {};
		   		        proxy.extraParams[el.paramName] = queryField.getValue();
		   		        proxy.extraParams["stationId"] = dept.getValue();// 收费站
		   		        
		   		        store.reload();
	   			   }
	   		   }
	   	   }, '<span style="margin:0 0 0 10px;"></span>']
        });
        
        return this.callParent(arguments);
    }
})