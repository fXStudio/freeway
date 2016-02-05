Ext.define('SystemUserModule.controller.SystemUserWindowController', {
    extend: 'Ext.app.Controller',
	
    
    // Cotroller的业务处理
    init: function() {
	    this.control({
	    	'#systemDataWindow': {
	    		show: function(){
	    			Ext.getCmp('systemUserTabPanel').setActiveTab(0);
	    		}
	    	}
	    })
    }
});