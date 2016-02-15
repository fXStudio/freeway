Ext.define('MenuModule.view.MenuForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.menuform',
	
    border: false, // 不显示边线
    defaults: { // 组件的默认样式配置
    	xtype: 'textfield',
        labelWidth: 65, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;',
        anchor: "95%"
    },
    items: [{
        name: 'sysid',
        hidden: true,
        hideLabel: true
    }, {
        id: 'items',
        name: 'items',
        hidden: true,
        hideLabel: true
    }, {
        id: 'menuname',
        fieldLabel: '菜单名称',
        name: 'menuname',
        allowBlank: false
    }, {
        xtype: 'textarea',
        fieldLabel: '菜单描述',
        name: 'remark'
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock',
        style: 'margin-top: 6px;'
    }]
});