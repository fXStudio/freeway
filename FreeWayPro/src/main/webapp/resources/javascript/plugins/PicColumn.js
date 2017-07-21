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
		    	layout: 'border',
		    	xtype: 'panel',
		    	width: 900,
		    	height: 400,
		    	items: [{
		    		region: 'west',
		    		width: 450,
		    		title: '入口抓拍',
		        	html: '<image width="450" height="320" src="http://localhost:8080/ImageEngine/mtc/' 
		        		+ Ext.util.Format.date(arguments[5].get('exitDate'), 'Ymd') 
		        		+ '/' +  arguments[5].get('exitCode') 
		        		+ '/' +  arguments[5].get('recordNo') + "_outin"
		        		+ '" onerror="javascript:this.src=\'images/nopicture.gif\'">' + '</image>'
		        }, {
		        	region: 'center',
		    		title: '出口抓拍',
		        	html: '<image width="450" height="320" src="http://localhost:8080/ImageEngine/mtc/' 
		        		+ Ext.util.Format.date(arguments[5].get('exitDate'), 'Ymd') 
		        		+ '/' +  arguments[5].get('exitCode') 
		        		+ '/' +  arguments[5].get('recordNo')
		        		+ '" onerror="javascript:this.src=\'images/nopicture.gif\'">' + '</image>'
		        }]
		    }).show();
		}
	}
})