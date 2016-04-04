Ext.define('SystemUserModule.view.SystemUserForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.systemuserform',
	
    border: false, // 不显示边线
    defaults: { // 组件的默认样式配置
    	xtype: 'textfield', // 默认的组件类型
        labelWidth: 75, // label的默认宽度
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
        id: 'depid',
        name: 'depid',
        hidden: true,
        hideLabel: true
    }, {
        id: 'groupid',
        name: 'groupid',
        hidden: true,
        hideLabel: true
    },{
        id: 'username',
        fieldLabel: '<span class="must">*</span>用户名称',
        maxLength: 16,
        name: 'username',
        allowBlank: false
    }, {
        fieldLabel: '<span class="must">*</span>用户密码',
        inputType: 'password',
        name: 'password',
        allowBlank: false
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock',
        hidden: true
    }]
});