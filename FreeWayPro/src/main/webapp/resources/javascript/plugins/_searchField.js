/**
 * 查询组件，内部组件，不建议外部直接引用
 */
Ext.define('Ext.plugins._searchField', {
	extend: 'Ext.ux.form.SearchField',
    paramName: 'loginUser',
    onTrigger1Click: function() {
    	var proxy = this.store.getProxy();
    	
        if (this.hasSearch) {
            this.el.dom.value = '';
            Ext.getCmp("beginDate").setValue("");
            Ext.getCmp("endDate").setValue("");
            
            if(Ext.getCmp('dept')){ Ext.getCmp('dept').setValue(""); }
			
            var o = {
				start : 0,
                limit : 25
            };
            proxy.extraParams = proxy.extraParams || {};
            proxy.extraParams[this.paramName] = '';
            proxy.extraParams["beginDate"] = '';
            proxy.extraParams["endDate"] = '';
			this.store.baseParams["exitName"] = '';
            this.store.reload({
                params: o
            });
            me.triggerEl.item(0).setDisplayed('none');
            this.hasSearch = false;
        }
    },
    onTrigger2Click: function() {
    	var proxy = this.store.getProxy();
        var v = this.getValue();
        var beginDate = Ext.util.Format.date(Ext.getCmp("beginDate").getValue(), 'Y/m/d');
        var endDate = Ext.util.Format.date(Ext.getCmp("endDate").getValue(), 'Y/m/d');
        if (v.length < 1 && beginDate.length < 1 && endDate.length < 1) {
            this.onTrigger1Click();
            return;
        }
        var o = {
			start : 0,
            limit : 25
        };
        proxy.extraParamss = this.store.baseParams || {};
        proxy.extraParams[this.paramName] = v;
        proxy.extraParams["beginDate"] = beginDate;
        proxy.extraParams["endDate"] = endDate;
        if(Ext.getCmp('dept')){ proxy.extraParams["exitName"] = Ext.getCmp('dept').getValue(); }
        
        this.store.reload({
            params: o
        });
        this.hasSearch = true;
        this.triggerEl.item(0).setDisplayed('block');
    }
})