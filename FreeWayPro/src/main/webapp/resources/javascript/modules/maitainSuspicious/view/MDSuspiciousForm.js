Ext.define('MDSuspiciousModule.view.MDSuspiciousForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.mdbadcardform',
	requires: ["Ext.ux.form.field.DateTime"],
	
	id: "systemDataForm",
    border: false, // 不显示边线
    frame: false,
    bodyStyle: 'padding:16px 5px 0px 0px',
    bodyCssClass: 'fxstudio-window-innerComponent', // 组件体的默认配置
    title: '手工录入可疑车辆信息',
    items: [{
        layout: 'column',
        border: false,
        items: [{
            columnWidth: .4,
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
            		id: 'carCode',
                    fieldLabel: '<span class="must">*</span>车牌',
                    maxLength: 8,
                    xtype: 'textfield',
                    name: 'carExitcodeRecognize',
                    allowBlank: false
                }, {
                    fieldLabel: '<span class="must">*</span>车型',
                    xtype: 'textfield',
                    name: 'vType',
                    allowBlank: false,
                    regex: /^[\d]{1}$/,
                    regexText: '只能包含数字，长度1位'
                }, {
     	   		   id: 'axisum',
    			   xtype: 'combobox',
    			   fieldLabel: '偷逃费类型',
    	           labelWidth: 95,
    	           labelAlign: 'right',
    			   editable: false,
    			   name: 'violationType',
    			   store: Ext.create('Ext.data.Store', {
    				   fields: ['id', 'desc'],
    				   data : [
    					   {"id":"1", "desc":"疑似换卡车辆"},
    				       {"id":"2", "desc":"计重设备异常"},
    				       {"id":"3", "desc":"货车重车短途"},
    				       {"id":"4", "desc":"货车轻车长途"},
    				       {"id":"5", "desc":"时免时不免"},
    				       {"id":"6", "desc":"闯关车"},
    				       {"id":"7", "desc":"收费员降档收费"}
    				   ]
    			   }),
    			   queryMode: 'local',
    			   displayField: 'desc',
    			   valueField: 'desc',
    			   allowBlank: false,
    			   listeners: {
    				   afterRender: function() {
    					   this.setValue("疑似换卡车辆");
    					   this.setRawValue("疑似换卡车辆");
    				   }
    			   }
    		   }]
            }
        }, {
            columnWidth: .6,
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
                    fieldLabel: '情况说明',
                    xtype: 'textarea',
                    name: 'remark',
                    height: 80,
                    maxLength: 255
                }]
            }
        }]
    }],
    listeners: {
    	afterrender: function(){Ext.getCmp('carCode').focus(true, 100);}
    },
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
                        url: 'services/suspiciousInput', // 请求的url地址  
                        method: 'POST', // 请求方式  
                        success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
                        	Ext.getCmp('systemDataForm').getForm().reset();
                        },
                        failure: function(form, action) { // 添加失败后，提示用户添加异常
                            Ext.Msg.alert('提示', '系统错误，原因：' + action.result.failureReason, function() {
                                Ext.getCmp('carCode').focus(true, 100);
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