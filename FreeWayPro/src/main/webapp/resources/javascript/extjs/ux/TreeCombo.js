Ext.define('Ext.ux.TreeCombo', {
	extend: 'Ext.form.field.Picker',
	alias: 'widget.treecombo',
	tree: false,
	
	// 构造函数
	constructor: function(config) {
		// 激活项目单击事件
		this.addEvents({"itemclick": true});
		// 注册监听器
		this.listeners = config.listeners;
		// 引用父类构造器
		this.callParent(arguments);
	},
	records: [],
	recursiveRecords: [],
	selectChildren: true,
	canSelectFolders: true,
	multiselect: false,
	displayField: 'text',
	valueField: 'sn',
	recursivePush: function(node) {
		var	me = this;
		me.recursiveRecords.push(node);
		
		node.eachChild(function(nodesingle) {
			if(nodesingle.hasChildNodes() == true) {
				me.recursivePush(nodesingle);
			}
			else me.recursiveRecords.push(nodesingle);
		});
	},
	recursiveUnPush: function(node) {
		var	me = this;
		Ext.Array.remove(me.records, node);
		
		node.eachChild(function(nodesingle) {
			if(nodesingle.hasChildNodes() == true) {
				me.recursiveUnPush(nodesingle);
			}
			else Ext.Array.remove(me.records, nodesingle);
		});
	},
	afterLoadSetValue: false,
	setValue: function(valueInit) {
		this.value = valueInit;
		this.setRawValue(valueInit);
		
		return this;
	},
	getValue: function() {
		return this.value;
	},
	getSubmitValue: function() {
		return this.value;
	},
	checkParentNodes: function(node) {
		if(node == null) return;
		
		var	me = this,
			checkedAll = true,
			ids = [];
			
		Ext.each(me.records, function(value) {
			ids.push(value.get(me.valueField));
		});

		node.eachChild(function(nodesingle) {
			if(!Ext.Array.contains(ids, nodesingle.get(me.valueField))) checkedAll = false;
		});
		
		if(checkedAll == true) {
			me.records.push(node);
			me.checkParentNodes(node.parentNode);
		}
		else {
			Ext.Array.remove(me.records, node);
			me.checkParentNodes(node.parentNode);
		}
	},
	initComponent: function() {
		var	me = this;
		
		me.tree = Ext.create('Ext.tree.Panel', {
			alias: 'widget.assetstree',
			hidden: true,
			height: 300,
			rootVisible: (typeof me.rootVisible != 'undefined') ? me.rootVisible : true,
			floating: true,
			useArrows: true,
			store: me.store,
			listeners: {
				load: function(store, records) {
					if(me.afterLoadSetValue != false) {
						me.setValue(me.afterLoadSetValue);
					}
				},
				// 项目单击处理
				itemclick: function(view, record, item, index, e, eOpts) {
					var values = [];
					
					// 找到我们之前选中的节点
					var node = me.tree.getRootNode().findChild('id', record.get(me.valueField), true);
					if(node == null) {
						if(me.tree.getRootNode().get(me.valueField) == record.get(me.valueField)) { 
							node = me.tree.getRootNode();
						} else {
							return false;
						}
					}
					// 如果没有开启多选，则清空记录数组
					if(me.multiselect == false) me.records = [];
				    // 如果不允许选择枝节点，并且当前选中的节点不为叶子节点，则不做任何操作
					if(me.canSelectFolders == false && record.get('leaf') == false) return false;
					// 如果当前节点为叶子节点，并且未开启子节点选中，则我们要将当前选中的节点记录起来
					if(record.get('leaf') == true || me.selectChildren == false) {
						// 未开启多选，则只记录当前选中节点
						if(me.multiselect == false){ 
							me.records.push(record);
						} 
						// 开启多选，则设置当前节点的选中样式
						else {
							if(record.get('checked') == false) me.records.push(record);
							else Ext.Array.remove(me.records, record);
						}
					}
					else {						
						me.recursiveRecords = [];
						if(me.multiselect == false || record.get('checked') == false) {
							me.recursivePush(node);
							Ext.each(me.recursiveRecords, function(value) {
								if(!Ext.Array.contains(me.records, value)) me.records.push(value);
							});
						} else if(record.get('checked') == true) {
							me.recursiveUnPush(node);
						}
					}
					
					if(me.canSelectFolders == true) me.checkParentNodes(node.parentNode);
		
					Ext.each(me.records, function(record) {
						values.push(record.get(me.displayField));
					});

					me.setValue(record.get('text'));
		
					me.fireEvent('itemclick', me, record, item, index, e, eOpts, me.records, values);

					if(me.multiselect == false) me.onTriggerClick();
				}
			}
		});
		
		if(me.tree.getRootNode().get('checked') != null) me.multiselect = true;
		
		this.createPicker = function() {
			var	me = this;
			return me.tree;
		};
		
		this.callParent(arguments);
	}	
});