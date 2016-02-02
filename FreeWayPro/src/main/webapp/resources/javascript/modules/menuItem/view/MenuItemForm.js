Ext.define('MenuItemModule.view.MenuItemForm', {
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
        id: 'itemname',
        fieldLabel: '菜单名称',
        name: 'itemname',
        width: 240,
        allowBlank: false,
        blankText: '菜单名称不能为空'
    }, {
        fieldLabel: '访问路径',
        name: 'itemlink',
        width: 360,
        allowBlank: false,
        blankText: '菜单访问地址不能为空'
    }, {
        xtype: 'checkbox',
        fieldLabel: '是否锁定',
        name: 'isLock',
        style: 'margin-top: 6px;'
    }]
});