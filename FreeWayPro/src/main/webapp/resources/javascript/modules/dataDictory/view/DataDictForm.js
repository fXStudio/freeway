Ext.define('DataDictModule.view.DataDictForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.datadictform',
	
    border: false, // 不显示边线
    defaults: { // 组件的默认样式配置
    	xtype: 'textfield', // 默认的组件类型
        labelWidth: 80, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;',
        anchor: '95%'
    },
    items: [{
        name: 'sysid',
        hidden: true,
        hideLabel: true
    }, {
        fieldLabel: '字典项名称',
        name: 'dataname',
        allowBlank: false,
        readOnly: true
    }, {
        id: 'dataname',
        fieldLabel: '字典项值',
        name: 'datavalue',
        allowBlank: false,
        enableKeyEvents: true,
        maxLength: 4,
        regex: /(^\d+$)|(^\d+\.{1}\d{1,2}$)/,
        regexText: '只能输入整数或浮点数(两位小数)'
    }, {
        fieldLabel: '字典项描述',
        name: 'datadesc',
        hidden: true,
        hideLabel: true
    }]
});