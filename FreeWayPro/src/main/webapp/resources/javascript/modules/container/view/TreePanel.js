/**
 * 主页的导航树
 */
Ext.define('MainModule.view.TreePanel' ,{
    extend: 'Ext.tree.Panel',
    alias: 'widget.MainTreePanel',
    title: '系统功能树',
    useArrows : false,// 展开按钮图标是箭头还是+-
    rootVisible : false,
    padding : 5,
    collapsible: true,
    split: true,
    autoScroll: true,
    width: 200,
    store : Ext.create('MainModule.store.TreeStore')
});