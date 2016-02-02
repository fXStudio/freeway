/**
 * 导航树菜单的监控器
 */
Ext.define('MenuItemModule.controller.MenuItemController', {
    extend: 'Ext.app.Controller',
    
    // Cotroller的业务处理
    init: function() {
	    this.control({
	    	'MenuItemGrid #add_btn':{
	    		click: function(){
	    			// 获得窗体对象的引用
	            	var menuItemWindow = Ext.getCmp("systemDataWindow");
	            	// 判断窗体对象是否存在
	            	if(!Ext.getCmp("systemDataWindow")){
	            		// 如果不存在，就创建一个新的窗体对象
	            		menuItemWindow = Ext.create('MenuItemModule.view.MenuItemWindow');
	            	}
	            	// 在执行新增业务的时候，要把窗体的内容清空
	                Ext.getCmp("systemDataForm").getForm().reset();
	                menuItemWindow.show(); // 显示窗体
	                menuItemWindow.center();// 窗体居中显示
	            }
	        },
	        'MenuItemGrid #modify_btn': {
	        	click: function(){
	                // 获得grid的SelectionModel
	                var sm = Ext.getCmp("grid_id").getSelectionModel();
	                // 当前选中记录
	                var record = sm.getLastSelected();

	                // 只有存在选中行的时候才显示修改窗口
	                if (record) {
	                	var menuItemWindow = Ext.getCmp("systemDataWindow");
	                	if(!Ext.getCmp("systemDataWindow")){
	                		menuItemWindow = Ext.create('MenuItemModule.view.MenuItemWindow');
	                	}
	                	// 窗体对象
	                    Ext.getCmp("systemDataForm").getForm().loadRecord(record); // 加载要编辑的对象
	                    menuItemWindow.show(); // 显示窗体
	                    menuItemWindow.center();
	                }
	            }
	        },
	        'MenuItemGrid #del_btn': {
	        	click: function(){
	            	// 表格对象
	                var gridObj = Ext.getCmp("grid_id");
	                // 如果选中行无效，则不相应用户的删除操作
	                if (gridObj.getSelectionModel().getSelection().length < 1) {
	                    return false;
	                }
	                // 当前选中行
	                var rowId = gridObj.getSelectionModel().getLastSelected().get('sysid');

	                // 提示用户确认删除操作
	                Ext.MessageBox.confirm('确认删除', '你确定要删除选中记录吗?', function(res) {
	                    if (res === 'yes') { // 用户确认要执行删除操作
	                        Ext.Ajax.request({
	                            url: 'services/delMenuItem',
	                            params: {
	                            	sysid: rowId
	                            },
	                            method: 'POST',
	                            success: function(response, options) {
	                                // 生成回馈对象
	                                var obj = Ext.decode(response.responseText);

	                                // 根据不同的删除状态，做不同的提示
	                                if (obj.success) {
	                                    gridObj.getStore().reload();
	                                } else {
	                                    Ext.MessageBox.alert('失败', '删除失败, 原因：' + obj.failureReason);
	                                }
	                            },
	                            failure: function(response, options) {
	                                Ext.MessageBox.alert('失败', '请求超时或网络故障, 错误编号：' + response.status);
	                            }
	                        });
	                    }
	                });
	            }
	        }
        })
        // 创建数据源的监听
        Ext.getStore('MenuItem').on('load', function(records, successful, options) {
        	Ext.getCmp("grid_id").getSelectionModel().select(0);
        });
    }
});