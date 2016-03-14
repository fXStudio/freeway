/**
 * 基本的查询工具条
 */
Ext.define('MDSuspiciousModule.view.Toolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.suspicioustoolbar',

	// 组件初始化函数，在组建初始化的时候，可以进行内部组件绑定
    initComponent: function() {
    	var store = this.store,
    	    el = this;
    	
        // 创建工具条
        Ext.apply(this, {
    		items: [{
  	   		   id: 'violation_type',
			   xtype: 'combobox',
			   fieldLabel: '偷逃费类型',
	           labelWidth: 75,
	           labelAlign: 'right',
			   editable: false,
			   name: 'violationType',
			   store: Ext.create('Ext.data.Store', {
				   fields: ['id', 'desc'],
				   data : [
					   {"id":"", "desc":"全部"},
					   {"id":"疑似换卡车辆", "desc":"疑似换卡车辆"},
				       {"id":"计重设备异常", "desc":"计重设备异常"},
				       {"id":"货车重车短途", "desc":"货车重车短途"},
				       {"id":"货车轻车长途", "desc":"货车轻车长途"},
				       {"id":"时免时不免", "desc":"时免时不免"},
				       {"id":"闯关车", "desc":"闯关车"},
				       {"id":"收费员降档收费", "desc":"收费员降档收费"}
				   ]
			   }),
			   queryMode: 'local',
			   displayField: 'desc',
			   valueField: 'id',
			   allowBlank: false,
			   listeners: {
				   afterRender: function() {
					   this.setValue("");
					   this.setRawValue("全部");
				   }
			   }
		   }, {
	   		   id: 'queryField',
	   		   xtype: 'textfield',
		       fieldLabel: this.label,
	           labelWidth: 65,
	           labelAlign: 'right',
	   		   width: 185,
	           enableKeyEvents: true,
	           listeners: {
                   specialkey: function(field, e){
                       if (e.getKey() == e.ENTER) {
                    	   Ext.getDom('searchBtn').click();
                       }
                   }
	           } 
	   	   }, '<span style="margin:0 15;"></span>',{
 	   		   id: 'searchBtn',
	   		   xtype: 'button',
	   		   iconCls: 'search',
	   		   width: 90,
	   		   text: '查询',
	   		   listeners: {
	   			   click: function() {
	   				    var proxy = store.getProxy();
	   				    var queryField = Ext.getCmp('queryField');
	   				    var violationType = Ext.getCmp('violation_type');
		   		        
		   		        proxy.extraParamss = store.baseParams || {};
		   		        proxy.extraParams[el.paramName] = queryField.getValue();
		   		        proxy.extraParams["cartype"] = violationType.getValue();// 收费站
		   		        
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