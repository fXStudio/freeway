/**
 * 查看图片列
 */
Ext.define('Ext.plugins.PicColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.piccolumn',
	
	header: '图片',
	width: 50,
	align: 'center',
	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
	     return '<img src="images/pic.png"></img>'; 
	}
})