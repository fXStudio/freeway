/**
 * 用户登陆日志数据源对象
 */
Ext.define('AbnormalRecordModule.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    model: 'AbnormalRecordModule.model.TreeNode',
    root: { expanded: true },
    autoLoad: true,
    proxy: {
        type : 'ajax',
        actionMethods: { read: 'POST' },
        url : 'services/fsOrgDeptList',//请求
    }
});