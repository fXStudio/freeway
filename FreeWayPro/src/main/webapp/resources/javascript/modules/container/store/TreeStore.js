/**
 * 导航树数据源对象
 */
Ext.define('MainModule.store.TreeStore', {
    extend  : 'Ext.data.TreeStore',
    id: 'treeStore',
    model: 'MainModule.model.TreeModel',
    root: { expanded: true },
    autoLoad: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/systemMenuList',//请求  
    }
});