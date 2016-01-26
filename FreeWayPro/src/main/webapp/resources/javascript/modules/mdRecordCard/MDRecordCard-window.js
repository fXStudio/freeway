/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
Ext.onReady(function() {
    // 排除Mask文件无法正常显示的问题
    Ext.BLANK_IMAGE_URL = "../plugins/ext/resources/images/default/s.gif";
    // 使Tip提示可用
    Ext.QuickTips.init();
    // 在控件右边显示错误提示
    Ext.form.Field.prototype.msgTarget = 'side';

    
    var form = new Ext.ux.FXSTudioFormPanel({
        id: "terminalCustForm",
        width: 580,
        frame: true,
        labelWidth: 75,
        bodyCssClass: 'fxstudio-window-innerComponent', // 组件体的默认配置
        items: [{
            layout: 'column',
            items: [{
                columnWidth: .5,
                layout: 'form',
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
                    allowBlank: false
                }, {
                    fieldLabel: '入口车牌',
                    xtype: 'textfield',
                    name: 'carIncode',
                    anchor: '90%',
                    allowBlank: false
                }, {
                    fieldLabel: '出口车牌',
                    xtype: 'textfield',
                    name: 'carExitcode',
                    anchor: '90%',
                    allowBlank: false
                }, new Ext.ux.ComboBoxTree({
                    fieldLabel: '入口站',
                    name: 'enteName',
                    renderName: 'enteCodeTree',
                    anchor: '90%',
                    tpl: "<tpl for='.'><div style='height:200px'><div id='enteCodeTree'></div></div></tpl>",
                    treeUrl: "../services/fsOrgDeptList",
                    editable: false,
                    allowBlank: true,
                    rootText: "所有收费站",
                    autoScroll: false,
                    singleExpand: true,
                    callback: function(node) {
                        Ext.getCmp('enteCode').setValue(node.attributes.sn);
                    }
                }),{
                    fieldLabel: '入口日期',
                    xtype : 'datefield',
                    name : 'enteDate',
                    format : 'Y/m/d',
                    anchor: '90%',
                    editable : false
                },{
                    fieldLabel: '入口时间',
                    xtype: 'textfield',
                    name : 'enteTime',
                    anchor: '90%',
                    regex: /^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/
                }, {
                    fieldLabel: '车道',
                    xtype: 'textfield',
                    name: 'lane',
                    anchor: '90%',
                    allowBlank: false,
                    maxLength: 2
                }, {
                    fieldLabel: '入口车型',
                    xtype: 'textfield',
                    name: 'vType',
                    anchor: '90%',
                    allowBlank: false,
                    maxLength: 1
                }, {
                    fieldLabel: '出口车型',
                    xtype: 'textfield',
                    name: 'vExit',
                    anchor: '90%',
                    allowBlank: false,
                    maxLength: 1
                }, {
                    fieldLabel: '收费员编号',
                    xtype: 'textfield',
                    name: 'tollId',
                    anchor: '90%',
                    allowBlank: false
                }, {
                    fieldLabel: '箱号',
                    xtype: 'textfield',
                    name: 'boxId',
                    anchor: '90%',
                    allowBlank: false
                }]
            }, {
                columnWidth: .5,
                layout: 'form',
                items: [{
                    fieldLabel: '费率',
                    xtype: 'textfield',
                    name: 'tollFare',
                    anchor: '90%',
                    allowBlank: false,
                    regex: /^\d+$/
                }, {
                    fieldLabel: '收费类型',
                    xtype: 'textfield',
                    name: 'tollType',
                    allowBlank: false,
                    anchor: '90%',
                }, {
                    fieldLabel: 'IC卡号',
                    xtype: 'textfield',
                    name : 'icCode',
                    allowBlank: false,
                    anchor: '90%'
                }, new Ext.ux.ComboBoxTree({
                    fieldLabel: '出口站',
                    name: 'exitName',
                    renderName: 'exitCodeTree',
                    anchor: '90%',
                    tpl: "<tpl for='.'><div style='height:200px'><div id='exitCodeTree'></div></div></tpl>",
                    treeUrl: "../services/fsOrgDeptList",
                    editable: false,
                    allowBlank: true,
                    rootText: "所有收费站",
                    autoScroll: false,
                    singleExpand: true,
                    callback: function(node) {
                        Ext.getCmp('exitCode').setValue(node.attributes.sn);
                    }
                }),{
                    fieldLabel: '出口日期',
                    xtype : 'datefield',
                    name : 'exitDate',
                    format : 'Y/m/d',
                    anchor: '90%',
                    editable : false
                },{
                    fieldLabel: '出口时间',
                    xtype: 'textfield',
                    name : 'exitTime',
                    anchor: '90%',
                    regex: /^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/
                }]
            }]
        }],
        buttons: [{
            text: '提交',
            handler: this.addSystemUser,
            scope: this,
            handler: save
        }, {
            text: '取消',
            handler: this.close.createDelegate(this, [])
        }]
    })

    var viewport = new Ext.Viewport({
        layout: 'fit',
        items: [form]
    });

    // 禁止整个页面的右键
    Ext.getDoc().on("contextmenu", function(e) {
        e.stopEvent();
    });

    // 提交登录请求
    function save() {
        //验证合法后使用加载进度条  
        if (form.form.isValid()) {
            // form表单对象 
            var formObj = form.getForm();
            // 检查表单项的录入是否存在问题
            if (formObj.isValid()) {
                // 提交表单
                formObj.submit({
                    waitMsg: '数据正在处理请稍后', // 提示信息  
                    waitTitle: '提示', // 标题  
                    url: '../services/badCardInput', // 请求的url地址  
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
    };
});
