/**
 * 比对信息
 */
Ext.define('AnalyticalModule.view.CompareColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.comparecolumn',

	
	header: '详情',
	align: 'center',
	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
	     return '<img src="images/compare.png"></img>'; 
	},
	listeners: {
		'click': function(){
		    var kwcarexlistform = Ext.create('AnalyticalModule.view.KWCarexlistForm');
		    var mysqlform = Ext.create('AnalyticalModule.view.MYSqlForm');
		    var win = Ext.create('AnalyticalModule.view.CompareWindow', {
		    	height: 300,
		    	layout: {
		            type: 'hbox',
		            align: 'stretch'
		        },
		    	items: [kwcarexlistform,{
		        	bodyStyle:'background-color:lightGray;',
		            items:[{
			        	html: '<image width="240" height="245" src="http://localhost:8080/ImageEngine/img/' 
			        		+ arguments[5].get('carImage') 
			        		+ '" onerror="javascript:this.src=\'images/nopicture.gif\'">' + '</image>'
		            }]
		        }, mysqlform]
		    });
		    kwcarexlistform.loadRecord(arguments[5]);
		    mysqlform.loadRecord(arguments[5]);
		    
		    win.show();
		}
	}
})