Ext.define('AnalyticalModule.view.MYSqlForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.mysqlform',

	title: '车道采集数据',
	width:240,
    border: false, // 不显示边线
    bodyStyle: 'padding-top:25px',
    defaults: { // 组件的默认样式配置
    	xtype: 'textfield', // 默认的组件类型
        labelWidth: 60, // label的默认宽度
        labelAlign: 'right',
        cls: 'fxstudio-window-inner-margin3',
        labelStyle: 'margin-top:3px;',
        anchor: '95%',
        readOnly: true
    },
    items: [{
        fieldLabel: '车牌号',
        name: 'carcode'
    }, {
        fieldLabel: '出口时间',
        name: 'outDate'
    }, {
        fieldLabel: '车型',
        name: 'carType'
    }, {
        fieldLabel: '品牌',
        name: 'carBrand'
    }, {
        fieldLabel: '颜色',
        name: 'carColortype'
    }]
});