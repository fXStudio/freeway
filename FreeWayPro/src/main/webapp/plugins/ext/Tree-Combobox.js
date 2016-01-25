/** 
 * 下拉列表选择树 
 * <br> 
 * 依赖EXTJS3版本 

 * @extends Ext.form.ComboBox 
 * @author Fxstudio.ajaxfan  
 */
Ext.ux.ComboBoxTree = Ext.extend(Ext.form.ComboBox, {
    /** 
     * 回调函数,用于传递选择的id，text属性 
     *  
     * @type 
     */
    callback: Ext.emptyFn,
    store: new Ext.data.SimpleStore({
        fields: [],
        data: [
            []
        ]
    }),
    editable: this.editable || false,
    mode: 'local',
    emptyText: this.emptyText || "请选择",
    allowBlank: this.allowBlank || false,
    triggerAction: 'all',
    maxHeight: 200,
    anchor: '95%',
    displayField: 'text',
    valueField: 'sn',
    renderName: this.renderName || 'tree',
    tpl: this.tpl || "<tpl for='.'><div style='height:200px'><div id='tree'></div></div></tpl>",
    selectedClass: '',
    onSelect: Ext.emptyFn,
    isNode: false,
    singleExpand: false,
    /** 
     * 根的名字 
     *  
     * @type String 
     */
    rootText: this.rootText || 'root',
    /** 
     * 树的请求地址 
     *  
     * @type String 
     */
    treeUrl: this.treeUrl,
    tree: null,
    initComponent: function() {
        this.tree = new Ext.tree.TreePanel({
            height: 200,
            scope: this,
            autoScroll: true,
            split: true,
            root: new Ext.tree.AsyncTreeNode({
                expanded: true,
                id: '_fxstudio',
                text: this.rootText,
                singleClickExpand: true
            }),
            loader: new Ext.tree.TreeLoader({
                url: this.treeUrl
            }),
            rootVisible: false
        });
        var c = this;
        /** 
         * 点击选中节点并回调传值 
         */
        this.tree.on('click', function(node) {
            if(c.singleExpand && !node.isLeaf()) { c.isNode = !node.leaf; return; }
            // 设置Combox的值
            c.setValue(node.attributes.text);
            // 设置回调函数参数
            c.callback.call(this, node);

            if(c.singleExpand) { c.isNode = !node.leaf; }
            
        });
        /**
         * 展开树
         */
        this.on('expand', function() {
            this.tree.render(c.renderName);
            if(!c.singleExpand) { this.tree.expandAll(); }
        });
        /**
         * 判断当前选中值
         */
        this.on('collapse', function() {
            if (c.isNode) {
                c.expand();
            }
        });
        // 引用父类构造函数
        Ext.ux.ComboBoxTree.superclass.initComponent.call(this);
    }
})
