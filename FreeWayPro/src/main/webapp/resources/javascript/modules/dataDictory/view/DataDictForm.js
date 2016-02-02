Ext.define('DataDictModule.view.DataDictForm', {
	extend: 'Ext.form.Panel',
	id: "systemDataForm",
    border: false, // 不显示边线
    defaultType: 'textfield', // 默认的组件类型
    defaults: { // 组件的默认样式配置
        labelWidth: 95, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;'
    },
    items: [{
        fieldLabel: '主键',
        name: 'sysid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'dataname',
        fieldLabel: '字典项名称',
        name: 'dataname',
        width: 240,
        allowBlank: false
    }, {
        fieldLabel: '字典项值',
        name: 'datavalue',
        width: 240,
        allowBlank: false
    }, {
        fieldLabel: '字典项描述',
        name: 'datadesc',
        width: 360,
        allowBlank: false
    }]
});