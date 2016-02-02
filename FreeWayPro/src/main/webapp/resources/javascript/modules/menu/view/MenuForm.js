Ext.define('MenuModule.view.MenuForm', {
	extend: 'Ext.form.Panel',
	id: "systemDataForm",
    border: false, // 不显示边线
    defaultType: 'textfield', // 默认的组件类型
    defaults: { // 组件的默认样式配置
        labelWidth: 75, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;'
    },
    items: [{
        id: 'sysid',
        fieldLabel: '主键',
        name: 'sysid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'items',
        fieldLabel: '菜单项',
        name: 'items',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'menuname',
        fieldLabel: '菜单名称',
        name: 'menuname',
        width: 260,
        allowBlank: false
    }, {
        xtype: 'textarea',
        fieldLabel: '菜单描述',
        name: 'remark',
        width: 260
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock',
        style: 'margin-top: 6px;'
    }]
});