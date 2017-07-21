/**
 * 查看图片列
 */
Ext.define('Ext.plugins.EntePicColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.entepiccolumn',
	
	header: '图片',
	align: 'center',
	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
	     return '<img src="images/pic.png"></img>'; 
	},
	listeners: {
		'click': function(){
		    Ext.create('Ext.plugins.ImageWindow', {
		    	width: 500,
		    	items: [{
		        	html: '<image width="500" height="320" src="http://localhost:8080/ImageEngine/mtc/' 
		        		+ Ext.util.Format.date(arguments[5].get('enteDate'), 'Ymd') 
		        		+ '/' +  arguments[5].get('enteCode') 
		        		+ '/' +  arguments[5].get('recordNo')
		        		+ '" onerror="javascript:this.src=\'images/nopicture.gif\'">' + '</image>'
		        }]
		    }).show();
		}
	}
})