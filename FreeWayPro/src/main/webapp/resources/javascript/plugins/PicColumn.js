/**
 * 查看图片列
 */
Ext.define('Ext.plugins.PicColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.piccolumn',
	
	header: '图片',
	align: 'center',
	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
	     return '<img src="images/pic.png"></img>'; 
	},
	listeners: {
		'click': function(){
		    Ext.create('Ext.plugins.ImageWindow', {
		    	items: [{
		        	html: '<image width="400" height="320" src="http://localhost:8080/ImageEngine/cdn/' 
		        		+ arguments[5].get('recordNo') 
		        		+ '" onerror="javascript:this.src=\'images/nopicture.gif\'">' + '</image>'
		        }]
		    }).show();
		}
	}
})