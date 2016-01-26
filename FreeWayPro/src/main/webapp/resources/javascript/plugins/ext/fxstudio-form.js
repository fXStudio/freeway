/**
 * 该表单提供对各个元素回车验证并且自动切换到下一个元素功能
 */
Ext.ux.FXSTudioFormPanel = Ext.extend(Ext.FormPanel, {
    isValid: function() {
        var isValid = true;
        Ext.each(this.items.items, function(item, index) {
            if (!item.isValid()) {
                isValid = false;
                item.focus();
                return false;
            }
        });
        return isValid;
    },
    initComponent: function() {
        var me = this;
        var specialKey = function(field, e, eOpts) {
            if (e.getKey() == Ext.EventObject.ENTER) {
                var isValid = true;
                if (!field.isValid()) {
                    field.focus();
                } else {
                    me.isValid();
                }
            };
            if (field.old_specialKey) {
                field.old_specialKey(field, e, eOpts);
            }
        };
        Ext.each(me.items, function(item, index) {
            if (!Ext.isDefined(item.enterChange) || item.enterChange) {
                if (item.listeners) {
                    if (!item.listeners.specialKey) {
                        item.listeners.specialKey = specialKey;
                    } else {
                        item.old_specialKey = item.listeners.specialKey;
                        item.listeners.specialKey = specialKey;
                    }
                } else {
                    item.listeners = {
                        specialKey: specialKey
                    };
                }
            }
        });
        Ext.ux.FXSTudioFormPanel.superclass.initComponent.call(me, arguments);
    }
});
