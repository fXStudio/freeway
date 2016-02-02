Ext.define('UserGroupModule.view.UserGroupForm', {
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
        fieldLabel: '主键',
        name: 'sysid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'menus',
        fieldLabel: '可访问菜单',
        name: 'menus',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'groupname',
        fieldLabel: '用户组名称',
        name: 'groupname',
        width: 240,
        allowBlank: false,
        blankText: '用户组名称不能为空'
    }, {
        xtype: 'textarea',
        fieldLabel: '菜单描述',
        name: 'remark',
        width: 240
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock',
        style: 'margin-top: 6px;'
    }]
});