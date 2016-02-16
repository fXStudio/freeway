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
        id: 'dataname',
        fieldLabel: '字典项名称',
        name: 'dataname',
        allowBlank: false
    }, {
        fieldLabel: '字典项值',
        name: 'datavalue',
        allowBlank: false
    }, {
        fieldLabel: '字典项描述',
        name: 'datadesc',
        allowBlank: false
    }]
});