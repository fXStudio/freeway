Ext.define('MDBadCardModule.view.MDBadCardForm', {
	extend: 'Ext.form.Panel',
	id: "systemDataForm",
    border: false, // 不显示边线
    frame: false,
    width: 580,
    bodyStyle: 'padding:2px 5px 0px 0px',
    bodyCssClass: 'fxstudio-window-innerComponent', // 组件体的默认配置
    items: [{
        layout: 'column',
        border: false,
        items: [{
            columnWidth: .5,
            border: false,
            layout: 'form',
            defaults: {
            	labelWidth: 75,
                labelAlign: 'right',
        	},
            items: [{
                fieldLabel: '主键',
                xtype: 'textfield',
                id: 'enteCode',
                name: 'enteCode',
                width: 60,
                hidden: true,
                hideLabel: true
            },{
                fieldLabel: '主键',
                xtype: 'textfield',
                id: 'exitCode',
                name: 'exitCode',
                width: 60,
                hidden: true,
                hideLabel: true
            },{
                fieldLabel: '班次号',
                xtype: 'textfield',
                name: 'snCode',
                anchor: '90%',
                allowBlank: true
            }, {
                fieldLabel: '入口车牌',
                xtype: 'textfield',
                name: 'carIncode',
                anchor: '90%',
                allowBlank: true
            }, {
                fieldLabel: '出口车牌',
                xtype: 'textfield',
                name: 'carExitcode',
                anchor: '90%',
                allowBlank: false
            }, Ext.create('Ext.ux.TreeCombo', {
            	labelWidth: 75,
                labelAlign: 'right',
                fieldLabel: '入口站',
			   	id: 'enteName',
	            renderName: 'enterDev',
	            editable: false,
                anchor: '90%',
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
		   }),{
                fieldLabel: '入口日期',
                xtype : 'datefield',
                name : 'enteDate',
                format : 'Y/m/d',
                anchor: '90%',
                editable : false
            },{
                fieldLabel: '入口时间',
                name : 'enteTime',
                xtype: 'timefield',
                anchor: '90%',
                increment: 10,
                format: 'H:m:s'
            }, {
                fieldLabel: '车道',
                xtype: 'textfield',
                name: 'lane',
                anchor: '90%',
                allowBlank: true,
                maxLength: 2
            }, {
                fieldLabel: '入口车型',
                xtype: 'textfield',
                name: 'vType',
                anchor: '90%',
                allowBlank: false,
                regex: '[0-9]{1}'
            }, {
                fieldLabel: '出口车型',
                xtype: 'textfield',
                name: 'vExit',
                anchor: '90%',
                allowBlank: false,
                regex: '[0-9]{1}'
            }, {
                fieldLabel: '收费员编号',
                xtype: 'textfield',
                name: 'tollId',
                anchor: '90%',
                allowBlank: true
            }, {
                fieldLabel: '箱号',
                xtype: 'textfield',
                name: 'boxId',
                anchor: '90%',
                allowBlank: true
            }]
        }, {
            columnWidth: .5,
            defaults: {
            	labelWidth: 95,
                labelAlign: 'right',
        	},
            border: false,
            layout: 'form',
            items: [{
                fieldLabel: '费率',
                xtype: 'textfield',
                name: 'tollFare',
                anchor: '90%',
                allowBlank: true,
                regex: /^\d+$/
            }, {
                fieldLabel: '收费类型',
                xtype: 'textfield',
                name: 'tollType',
                allowBlank: true,
                anchor: '90%',
            }, {
                fieldLabel: 'IC卡号',
                xtype: 'textfield',
                name : 'icCode',
                allowBlank: false,
                anchor: '90%',
                regex: '[0-9]{6,10}'
            }, Ext.create('Ext.ux.TreeCombo', {
                labelAlign: 'right',
                fieldLabel: '出口站',
			   	id: 'exitName',
	            renderName: 'exitDiv',
                anchor: '90%',
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
		   }),{
                fieldLabel: '出口日期',
                xtype : 'datefield',
                name : 'exitDate',
                format : 'Y/m/d',
                anchor: '90%',
                editable : false,
                value: new Date()
            },{
                fieldLabel: '出口时间',
                xtype: 'textfield',
                name : 'exitTime',
                xtype: 'timefield',
                anchor: '90%',
                increment: 10,
                format: 'H:m:s',
                value: new Date()
            }, Ext.create('Ext.form.ComboBox', {
                fieldLabel: '卡类型',
                labelAlign: 'right',
                anchor: '90%',
                store: Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data : [
                        {"abbr":"1", "name":"坏卡"},
                        {"abbr":"2", "name":"正常补卡"}
                    ]
                }),
                queryMode: 'local',
                displayField: 'name',
                valueField: 'name'
            })]
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