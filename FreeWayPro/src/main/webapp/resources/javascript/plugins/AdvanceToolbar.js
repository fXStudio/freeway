/**
 * 基本的查询工具条
 */
Ext.define('Ext.plugins.AdvanceToolbar', {
	extend: 'Ext.toolbar.Toolbar',
	
	// 组件初始化函数，在组建初始化的时候，可以进行内部组件绑定
    initComponent: function() {
    	// 搜索工具
        var _searchField = Ext.create('Ext.plugins._searchField', {
        	store: this.store,
        	paramName: this.paramName
    	});
        
        // 创建工具条
        Ext.apply(this, {
           items: ["<span style='margin:0 4px 0 10px;'>时间:</span>", 
           {
	           	id: 'beginDate',
	   	        xtype: 'datefield',
	   	        name: 'heatStart',
	   	        format: 'Y/m/d',
	   	        width: 100,
	   	        editable: false,
	   	        value: new Date()
	   	   },
	   	   "<span style='margin:0 4px;'>起--止</span>", 
	   	   {
	   	        id: 'endDate',
	   	        xtype: 'datefield',
	   	        name: 'heatEnd',
	   	        format: 'Y/m/d',
	   	        width: 100,
	   	        editable: false,
	   			value: Ext.Date.add(new Date(), Ext.Date.DAY, 1)
	   	   },
	   	   "<span style='margin:0 4px;'>收费站: </span>", 
		   Ext.create('Ext.ux.TreeCombo', {
			   	id: 'dept',
	            renderName: 'buildingTree',
				width: 220,
	            tpl: "<tpl for='.'><div style='height:200px'><div id='buildingTree'></div></div></tpl>",
	            store: Ext.create('Ext.data.TreeStore', {
	            	autoLoad: true,
	            	autoDestroy: true,
	                root: { 
	                	expanded: true,
	                	text: "所有收费站",
	                	rootVisible: false
                	},
	                proxy: {
	                    type : 'ajax',
	                    actionMethods: { read: 'POST' },
	                    url : 'services/fsOrgDeptList',//请求  
	                }
	            })
		   }),
	   	   "<span style='margin:0 1px 0 2px;'>" + this.label + ":</span> ", _searchField]
        });

        

        // 创建数据源的监听
        this.store.on('load', function(records, successful, options) {
        	_searchField.focus(true, 100);
        });

        return this.callParent(arguments);
    }
})