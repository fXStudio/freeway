Ext.define('SystemUserModule.view.SystemUserForm', {
	extend: 'Ext.form.Panel',
	id: "systemDataForm",
    border: false, // 不显示边线
    defaultType: 'textfield', // 默认的组件类型
    defaults: { // 组件的默认样式配置
        labelWidth: 75, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;',
        anchor: '95%'
    },
    items: [{
        fieldLabel: '主键',
        name: 'sysid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'depid',
        fieldLabel: '部门',
        name: 'depid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        fieldLabel: '主键',
        id: 'groupid',
        name: 'groupid',
        width: 60,
        hidden: true,
        hideLabel: true
    }, {
        id: 'username',
        fieldLabel: '用户名称',
        name: 'username',
        allowBlank: false
    }, {
        fieldLabel: '用户密码',
        inputType: 'password',
        name: 'password',
        allowBlank: false
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock'
    }]
});