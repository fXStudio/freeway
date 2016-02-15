/**
 * 导航树数据源对象
 */
Ext.define('MainModule.store.Tree', {
    extend: 'Ext.data.TreeStore',
    model: 'MainModule.model.TreeModel',
    root: { expanded: true },
    autoLoad: true,
    autoDestroy: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/systemMenuList',//请求  
    }
});