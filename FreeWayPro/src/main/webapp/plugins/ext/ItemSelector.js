/*!
 * 穿梭窗
 */
Ext.ux.form.ItemSelector = Ext.extend(Ext.form.Field, {
    hideNavIcons: false,
    imagePath: "",
    iconUp: "up2.gif",
    iconDown: "down2.gif",
    iconLeft: "left2.gif",
    iconRight: "right2.gif",
    iconTop: "top2.gif",
    iconBottom: "bottom2.gif",
    drawUpIcon: false,
    drawDownIcon: false,
    drawLeftIcon: true,
    drawRightIcon: true,
    drawTopIcon: false,
    drawBotIcon: false,
    delimiter: ',',
    bodyStyle: null,
    border: false,
    defaultAutoCreate: {
        tag: "div"
    },
    /**
     * @cfg {Array} multiselects An array of {@link Ext.ux.form.MultiSelect} config objects, with at least all required parameters (e.g., store)
     */
    multiselects: null,

    initComponent: function() {
        Ext.ux.form.ItemSelector.superclass.initComponent.call(this);
        this.addEvents({
            'beforeMoveRecord': true,
            'rowdblclick': true,
            'change': true
        });
    },

    onRender: function(ct, position) {
        Ext.ux.form.ItemSelector.superclass.onRender.call(this, ct, position);

        // Internal default configuration for both multiselects
        var msConfig = [{
            legend: 'Available',
            draggable: false,
            droppable: false,
            width: 100,
            height: 100
        }, {
            legend: 'Selected',
            droppable: false,
            draggable: false,
            width: 100,
            height: 100
        }];

        this.fromMultiselect = new Ext.ux.form.MultiSelect(Ext.applyIf(this.multiselects[0], msConfig[0]));
        this.fromMultiselect.on('dblclick', this.onRowDblClick, this);

        this.toMultiselect = new Ext.ux.form.MultiSelect(Ext.applyIf(this.multiselects[1], msConfig[1]));
        this.toMultiselect.on('dblclick', this.onRowDblClick, this);

        var p = new Ext.Panel({
            bodyStyle: this.bodyStyle,
            border: this.border,
            layout: "table",
            layoutConfig: {
                columns: 3
            }
        });

        p.add(this.fromMultiselect);
        var icons = new Ext.Panel({
            header: false
        });
        p.add(icons);
        p.add(this.toMultiselect);
        p.render(this.el);
        icons.el.down('.' + icons.bwrapCls).remove();

        // ICON HELL!!!
        if (this.imagePath != "" && this.imagePath.charAt(this.imagePath.length - 1) != "/")
            this.imagePath += "/";
        this.iconUp = this.imagePath + (this.iconUp || 'up2.gif');
        this.iconDown = this.imagePath + (this.iconDown || 'down2.gif');
        this.iconLeft = this.imagePath + (this.iconLeft || 'left2.gif');
        this.iconRight = this.imagePath + (this.iconRight || 'right2.gif');
        this.iconTop = this.imagePath + (this.iconTop || 'top2.gif');
        this.iconBottom = this.imagePath + (this.iconBottom || 'bottom2.gif');
        var el = icons.getEl();
        this.addIcon = el.createChild({
            tag: 'img',
            src: this.iconRight,
            style: {
                cursor: 'pointer',
                margin: '5px'
            }
        });
        el.createChild({
            tag: 'br'
        });
        this.removeIcon = el.createChild({
            tag: 'img',
            src: this.iconLeft,
            style: {
                cursor: 'pointer',
                margin: '5px'
            }
        });
        this.addIcon.on('click', this.fromTo, this);
        this.removeIcon.on('click', this.toFrom, this);
        
        if (!this.drawLeftIcon || this.hideNavIcons) {
            this.addIcon.dom.style.display = 'none';
        }
        if (!this.drawRightIcon || this.hideNavIcons) {
            this.removeIcon.dom.style.display = 'none';
        }

        var tb = p.body.first();
        this.el.setWidth(p.body.first().getWidth());
        p.body.removeClass();

        this.hiddenName = this.name;
        var hiddenTag = {
            tag: "input",
            type: "hidden",
            value: "",
            name: this.name,
            id: this.name
        };
        this.hiddenField = this.el.createChild(hiddenTag);
    },

    doLayout: function() {
        if (this.rendered) {
            this.fromMultiselect.fs.doLayout();
            this.toMultiselect.fs.doLayout();
        }
    },

    afterRender: function() {
        Ext.ux.form.ItemSelector.superclass.afterRender.call(this);

        this.toStore = this.toMultiselect.store;
        this.toStore.on('add', this.valueChanged, this);
        this.toStore.on('remove', this.valueChanged, this);
        this.toStore.on('load', this.valueChanged, this);
        this.valueChanged(this.toStore);
    },

    toTop: function() {
        var selectionsArray = this.toMultiselect.view.getSelectedIndexes();
        var records = [];
        if (selectionsArray.length > 0) {
            selectionsArray.sort();
            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.toMultiselect.view.store.getAt(selectionsArray[i]);
                records.push(record);
            }
            selectionsArray = [];
            for (var i = records.length - 1; i > -1; i--) {
                record = records[i];
                this.toMultiselect.view.store.remove(record);
                this.toMultiselect.view.store.insert(0, record);
                selectionsArray.push(((records.length - 1) - i));
            }
        }
        this.toMultiselect.view.refresh();
        this.toMultiselect.view.select(selectionsArray);
    },

    toBottom: function() {
        var selectionsArray = this.toMultiselect.view.getSelectedIndexes();
        var records = [];
        if (selectionsArray.length > 0) {
            selectionsArray.sort();
            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.toMultiselect.view.store.getAt(selectionsArray[i]);
                records.push(record);
            }
            selectionsArray = [];
            for (var i = 0; i < records.length; i++) {
                record = records[i];
                this.toMultiselect.view.store.remove(record);
                this.toMultiselect.view.store.add(record);
                selectionsArray.push((this.toMultiselect.view.store.getCount()) - (records.length - i));
            }
        }
        this.toMultiselect.view.refresh();
        this.toMultiselect.view.select(selectionsArray);
    },

    up: function() {
        var record = null;
        var selectionsArray = this.toMultiselect.view.getSelectedIndexes();
        selectionsArray.sort();
        var newSelectionsArray = [];
        if (selectionsArray.length > 0) {
            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.toMultiselect.view.store.getAt(selectionsArray[i]);
                if ((selectionsArray[i] - 1) >= 0) {
                    this.toMultiselect.view.store.remove(record);
                    this.toMultiselect.view.store.insert(selectionsArray[i] - 1, record);
                    newSelectionsArray.push(selectionsArray[i] - 1);
                }
            }
            this.toMultiselect.view.refresh();
            this.toMultiselect.view.select(newSelectionsArray);
        }
    },

    down: function() {
        var record = null;
        var selectionsArray = this.toMultiselect.view.getSelectedIndexes();
        selectionsArray.sort();
        selectionsArray.reverse();
        var newSelectionsArray = [];
        if (selectionsArray.length > 0) {
            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.toMultiselect.view.store.getAt(selectionsArray[i]);
                if ((selectionsArray[i] + 1) < this.toMultiselect.view.store.getCount()) {
                    this.toMultiselect.view.store.remove(record);
                    this.toMultiselect.view.store.insert(selectionsArray[i] + 1, record);
                    newSelectionsArray.push(selectionsArray[i] + 1);
                }
            }
            this.toMultiselect.view.refresh();
            this.toMultiselect.view.select(newSelectionsArray);
        }
    },

    fromTo: function() {
        var selectionsArray = this.fromMultiselect.view.getSelectedIndexes();
        var records = [];
        if (selectionsArray.length > 0) {
            // 在从左面窗口转移数据到右面窗口前出发事件
            this.fireEvent('beforeMoveRecord');

            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.fromMultiselect.view.store.getAt(selectionsArray[i]);
                records.push(record);
            }
            if (!this.allowDup) selectionsArray = [];
            for (var i = 0; i < records.length; i++) {
                record = records[i];
                if (this.allowDup) {
                    var x = new Ext.data.Record();
                    record.id = x.id;
                    delete x;
                    this.toMultiselect.view.store.add(record);
                } else {
                    this.fromMultiselect.view.store.remove(record);
                    this.toMultiselect.view.store.add(record);
                    selectionsArray.push((this.toMultiselect.view.store.getCount() - 1));
                }
            }
        }
        this.toMultiselect.view.refresh();
        this.fromMultiselect.view.refresh();
        var si = this.toMultiselect.store.sortInfo;
        if (si) {
            this.toMultiselect.store.sort(si.field, si.direction);
        }
        this.toMultiselect.view.select(selectionsArray);
    },

    toFrom: function() {
        var selectionsArray = this.toMultiselect.view.getSelectedIndexes();
        var records = [];
        if (selectionsArray.length > 0) {
            for (var i = 0; i < selectionsArray.length; i++) {
                record = this.toMultiselect.view.store.getAt(selectionsArray[i]);
                records.push(record);
            }
            selectionsArray = [];
            for (var i = 0; i < records.length; i++) {
                record = records[i];
                this.toMultiselect.view.store.remove(record);
                if (!this.allowDup) {
                    this.fromMultiselect.view.store.add(record);
                    selectionsArray.push((this.fromMultiselect.view.store.getCount() - 1));
                }
            }
        }
        this.fromMultiselect.view.refresh();
        this.toMultiselect.view.refresh();
        var si = this.fromMultiselect.store.sortInfo;
        if (si) {
            this.fromMultiselect.store.sort(si.field, si.direction);
        }
        this.fromMultiselect.view.select(selectionsArray);
    },

    valueChanged: function(store) {
        var record = null;
        var values = [];
        for (var i = 0; i < store.getCount(); i++) {
            record = store.getAt(i);
            values.push(record.get(this.toMultiselect.valueField));
        }
        this.hiddenField.dom.value = values.join(this.delimiter);
        this.fireEvent('change', this, this.getValue(), this.hiddenField.dom.value);
    },

    getValue: function() {
        return this.hiddenField.dom.value;
    },

    onRowDblClick: function(vw, index, node, e) {
        if (vw == this.toMultiselect.view) {
            this.toFrom();
        } else if (vw == this.fromMultiselect.view) {
            this.fromTo();
        }
        return this.fireEvent('rowdblclick', vw, index, node, e);
    },

    reset: function() {
        range = this.toMultiselect.store.getRange();
        this.toMultiselect.store.removeAll();
        this.fromMultiselect.store.add(range);
        var si = this.fromMultiselect.store.sortInfo;
        if (si) {
            this.fromMultiselect.store.sort(si.field, si.direction);
        }
        this.valueChanged(this.toMultiselect.store);
    }
});

Ext.reg('itemselector', Ext.ux.form.ItemSelector);

//backwards compat
Ext.ux.ItemSelector = Ext.ux.form.ItemSelector;
