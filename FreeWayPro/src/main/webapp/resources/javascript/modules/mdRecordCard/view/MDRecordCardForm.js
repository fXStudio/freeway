Ext.define('MDRecordCardModule.view.MDRecordCardForm', {
	extend: 'Ext.form.Panel',
	alias: "widget.mdrecordcardform",
	requires: ["Ext.ux.form.field.DateTime"],
		
	id: "systemDataForm",
    border: false, // 不显示边线
    frame: false,
    bodyStyle: 'padding:16px 5px 0px 0px',
    bodyCssClass: 'fxstudio-window-innerComponent', // 组件体的默认配置
    items: [{
        layout: 'column',
        border: false,
        items: [{
            columnWidth: .5,
            border: false,
            items: {
            	xtype: 'form',
                border: false,
                defaults: {
                	labelWidth: 95,
                    anchor: '90%',
                    labelAlign: 'right',
                    allowBlank: true
            	},
            	items:  [{
                    fieldLabel: '主键',
                    xtype: 'textfield',
                    id: 'enteCode',
                    name: 'enteCode',
                    hidden: true,
                    hideLabel: true
                },{
                    fieldLabel: '主键',
                    xtype: 'textfield',
                    id: 'exitCode',
                    name: 'exitCode',
                    hidden: true,
                    hideLabel: true
                }, {
                    fieldLabel: '入口车牌',
                    xtype: 'textfield',
                    name: 'carIncode'
                }, Ext.create('Ext.ux.TreeCombo', {
                	labelWidth: 95,
                    labelAlign: 'right',
                    fieldLabel: '入口站',
    			   	id: 'enteName',
    	            renderName: 'enterDev',
    	            editable: false,
    	            tpl: "<tpl for='.'><div style='height:200px'><div id='enterDev'></div></div></tpl>",
    	            store: Ext.create('Ext.data.TreeStore', {
    	                root: { 
    	                	expanded: true,
    	                	text: "所有收费站",
    	                	rootVisible: false
                    	},
    	                autoLoad: true,
    	                proxy: {
    	                    type : 'ajax',
    	                    actionMethods: { read: 'POST' },
    	                    url : 'services/fsOrgDeptList',//请求  
    	                }
    	            })
    		   }), {  
                   xtype: 'datetimefield',
               	   labelWidth: 95,
               	   labelAlign: 'right',
                   fieldLabel:'入口时间',  
   	   			   value: Ext.Date.add(new Date(), Ext.Date.DAY, -1),
                   format:'Y-m-d H:i:s'  
               }, {
                    fieldLabel: '车道',
                    xtype: 'textfield',
                    name: 'lane',
                    maxLength: 2
                }, {
                    fieldLabel: '入口车型',
                    xtype: 'textfield',
                    name: 'vType',
                    regex: '[0-9]{1}'
                }, {
                    fieldLabel: '收费员编号*',
                    xtype: 'textfield',
                    name: 'tollId',
                    allowBlank: false
                }, {
                    fieldLabel: '箱号',
                    xtype: 'textfield',
                    name: 'boxId'
                }]
            }
        }, {
            columnWidth: .5,
            border: false,
            items: {
            	xtype: 'form',
            	border: false,
        		defaults: {
                	labelWidth: 75,
                    labelAlign: 'right',
                    anchor: '90%'
            	},
                items: [{
                    fieldLabel: '出口车牌',
                    xtype: 'textfield',
                    name: 'carExitcode'
                }, Ext.create('Ext.ux.TreeCombo', {
                	labelWidth: 75,
                    labelAlign: 'right',
                    fieldLabel: '出口站*',
    			   	id: 'exitName',
    	            renderName: 'exitDiv',
                    editable: false,
                    allowBlank: false,
    	            tpl: "<tpl for='.'><div style='height:200px'><div id='exitDiv'></div></div></tpl>",
    	            store: Ext.create('Ext.data.TreeStore', {
    	                root: { 
    	                	expanded: true,
    	                	text: "所有收费站",
    	                	rootVisible: false
                    	},
    	                autoLoad: true,
    	                proxy: {
    	                    type : 'ajax',
    	                    actionMethods: { read: 'POST' },
    	                    url : 'services/fsOrgDeptList',//请求  
    	                }
    	            })
    		   }), {  
                   xtype: 'datetimefield',
               	   labelWidth: 75,
               	   labelAlign: 'right',
                   fieldLabel:'出口时间*',  
    	   		   value: Ext.Date.add(new Date(), Ext.Date.DAY),
                   allowBlank: false,
                   format:'Y-m-d H:i:s'  
               }, {
                   fieldLabel: '出口车型',
                   xtype: 'textfield',
                   name: 'vExit',
                   regex: '[0-9]{1}'
               },{
                    fieldLabel: '费率',
                    xtype: 'textfield',
                    name: 'tollFare',
                    regex: /^\d+$/
                }, {
                    fieldLabel: '收费类型',
                    xtype: 'textfield',
                    name: 'tollType'
                }, {
                    fieldLabel: 'IC卡号*',
                    xtype: 'textfield',
                    name : 'icCode',
                    allowBlank: false,
                    regex: '[0-9]{6,10}'
                }, {
                	xtype: "textfiled",
                	value: "补录卡",
                	name: 'cardtype',
                	hidden: "true"
               }]
            }
        }]
    }],
	
    buttons: [{
    	id: 'submit_btn',
        text: '提交',
        scope: this,
        handler: function () {
        	var formObj = Ext.getCmp('systemDataForm').getForm();
        	
            //验证合法后使用加载进度条  
            if (formObj.isValid()) {
                // 检查表单项的录入是否存在问题
                if (formObj.isValid()) {
                    // 提交表单
                    formObj.submit({
                        waitMsg: '数据正在处理请稍后', // 提示信息  
                        waitTitle: '提示', // 标题  
                        url: 'services/badCardInput', // 请求的url地址  
                        method: 'POST', // 请求方式  
                        success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                            window.location.reload();
                        },
                        failure: function(form, action) { // 添加失败后，提示用户添加异常
                            Ext.Msg.alert('提示', '系统错误，原因：' + action.result.failureReason, function() {
                                Ext.getCmp('uname').focus(true, 100);
                            });
                        }
                    });
                }
            }
        }
    }, {
        text: '重置',
        handler: function(){
        	Ext.getCmp('systemDataForm').getForm().reset();
        }
    }]
});