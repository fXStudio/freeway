Ext.define('UserGroupModule.view.UserGroupForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.usergroupform',
	
    border: false, // 不显示边线
    defaults: { // 组件的默认样式配置
    	xtype: 'textfield',
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
        id: 'menus',
        name: 'menus',
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