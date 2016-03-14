Ext.define('MDBadCardModule.view.MDBadCardForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.mdbadcardform',
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
            		id: 'carInCode',
                    fieldLabel: '入口车牌',
                    maxLength: 8,
                    xtype: 'textfield',
                    name: 'carIncodeRecognize'
                }, Ext.create('Ext.ux.TreeCombo', {
                	labelWidth: 95,
                    labelAlign: 'right',
                    fieldLabel: '入口站',
    			   	name: 'enteCode',
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
    	            	fields: ["sn", "text"],
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
               	   editable: false,
               	   name: 'enteDate',
                   fieldLabel:'入口时间',  
   	   			   value: Ext.Date.add(new Date(), Ext.Date.DAY, -1),
                   format:'Y/m/d H:i:s'  
               }, {
                    fieldLabel: '车道',
                    xtype: 'textfield',
                    name: 'lane',
                    regex: /^[\d]{2}$/,
                    regexText: '只能包含数字和字母，长度2位'
                }, {
                    fieldLabel: '入口车型',
                    xtype: 'textfield',
                    name: 'vEnte',
                    regex: /^[\d]{1}$/,
                    regexText: '只能包含数字，长度1位'
                }, {
                    fieldLabel: '<span class="must">*</span>收费员编号',
                    xtype: 'textfield',
                    name: 'tollId',
                    allowBlank: false,
                    regex: /^[\w\d]{6}$/,
                    regexText: '只能包含数字和字母，长度6位'
                }, {
                    fieldLabel: '箱号',
                    xtype: 'textfield',
                    name: 'boxId',
                    regex: /^[\d]{6}$/,
                    regexText: '只能输入数字，长度6位'
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
                    maxLength: 8,
                    xtype: 'textfield',
                    name: 'carExitcodeRecognize'
                }, Ext.create('Ext.ux.TreeCombo', {
                	labelWidth: 75,
                    labelAlign: 'right',
                    fieldLabel: '<span class="must">*</span>出口站',
    			   	name: 'exitCode',
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
    	            	fields: ["sn", "text"],
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
               	   editable: false,
               	   name: 'exitDate',
                   fieldLabel:'<span class="must">*</span>出口时间',  
    	   		   value: Ext.Date.add(new Date(), Ext.Date.DAY),
                   allowBlank: false,
                   format:'Y/m/d H:i:s'  
               }, {
                   fieldLabel: '出口车型',
                   xtype: 'textfield',
                   name: 'vExit',
                   regex: /^[\d]{1}$/,
                   regexText: '只能包含数字，长度1位'
               }, {
                    fieldLabel: '费率',
                    xtype: 'textfield',
                    name: 'tollFare',
                    regex: /^[\d]{1,6}$/,
                    regexText: '只能包含数字和字母，最大长度6位'
                }, {
                    fieldLabel: '<span class="must">*</span>IC卡号',
                    xtype: 'textfield',
                    name : 'icCode',
                    allowBlank: false,
                    regex: /^[\w\d]{7}$/,
                    regexText: '只能包含数字和字母，长度7位'
                }, {
                	xtype: "textfield",
                	value: "坏卡",
                	name: 'cardType',
                	hidden: true
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
                        url: 'services/cardInput', // 请求的url地址  
                        method: 'POST', // 请求方式  
                        success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                        	Ext.getCmp('systemDataForm').getForm().reset();
                        },
                        failure: function(form, action) { // 添加失败后，提示用户添加异常
                            Ext.Msg.alert('提示', '系统错误，原因：' + action.result.failureReason, function() {
                                Ext.getCmp('carInCode').focus(true, 100);
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