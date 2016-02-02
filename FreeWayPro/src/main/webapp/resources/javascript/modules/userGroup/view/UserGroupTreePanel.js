Ext.define('UserGroupModule.view.UserGroupTreePanel', {
	extend: 'Ext.tree.TreePanel',
	id: 'treePanel',
    useArrows: true,
    autoScroll: true,
    animate: false,
    enableDD: false,
    containerScroll: false,
    rootVisible: false,
    frame: false,
    border:false,
    height: 230,
    store: Ext.create('UserGroupModule.store.Tree'),
	listeners: {
        'checkchange': function(node, checked) {
            if (checked) {
            	node.set('cls', 'complete');
            } else {
            	node.set('cls', '');
            }
        }
    }
})