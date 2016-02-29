Ext.define('DataDictModule.controller.DataDictController', {
    extend: 'Ext.app.Controller',
    refs: [
       {ref: 'gridPanel', selector: 'datadictgrid'},
       {ref: 'window',    selector: 'datadictwindow'},
       {ref: 'formPanel', selector: 'datadictform'},
       {ref: 'submitBtn', selector: 'datadictwindow button[action=submit]'}
    ],
    
    // Cotroller的业务处理
    init: function() {
	    this.control({
	    	'datadictgrid button[action=add]':{
	    		click: function(){
	    			// 获得窗体对象的引用
	            	var menuItemWindow = this.getWindow();
	            	// 判断窗体对象是否存在
	            	if(!menuItemWindow){
	            		// 如果不存在，就创建一个新的窗体对象
	            		menuItemWindow = Ext.create('DataDictModule.view.DataDictWindow');
	            	}
	            	// 在执行新增业务的时候，要把窗体的内容清空
	                this.getFormPanel().getForm().reset();
	                menuItemWindow.show(); // 显示窗体
	                menuItemWindow.center();// 窗体居中显示
	            }
	        },
	        'datadictgrid button[action=modify]': {
	        	click: function(){
	        		var me = this;
	        		
	        		// 确认是否修改
	                Ext.MessageBox.confirm('确认修改', '修改数据字典项会影响到后台作业，你确认要进行此操作吗?', function(res) {
	                	if (res === 'yes') { 
			                var sm = me.getGridPanel().getSelectionModel();// 获得grid的SelectionModel
			                var record = sm.getLastSelected();// 当前选中记录
			                
			                if (record) {// 只有存在选中行的时候才显示修改窗口
			                    var menuItemWindow = me.getWindow();
			                	if(!menuItemWindow){
			                		menuItemWindow = Ext.create('DataDictModule.view.DataDictWindow');
			                	}
			                	// 窗体对象
			                    me.getFormPanel().getForm().loadRecord(record); // 加载要编辑的对象
			                    menuItemWindow.show(); // 显示窗体
			                    menuItemWindow.center();
			                }
	                	}
        		    });
	            }
	        },
	        'datadictgrid button[action=del]': {
	        	click: function(){
	            	// 表格对象
	                var gridObj = this.getGridPanel();
	                var sm = gridObj.getSelectionModel();
	                
	                // 如果选中行无效，则不相应用户的删除操作
	                if (sm.getSelection().length < 1) {
	                    return false;
	                }
	                // 当前选中行
	                var rowId = sm.getLastSelected().get('sysid');

	                // 提示用户确认删除操作
	                Ext.MessageBox.confirm('确认删除', '你确定要删除选中记录吗?', function(res) {
	                    if (res === 'yes') { // 用户确认要执行删除操作
	                        Ext.Ajax.request({
	                            url: 'services/delSystemData',
	                            params: { sysid: rowId },
	                            method: 'POST',
	                            success: function(response, options) {
	                                // 生成回馈对象
	                                var obj = Ext.decode(response.responseText);

	                                // 根据不同的删除状态，做不同的提示
	                                if (obj.success) {
	                                    gridObj.getStore().load();
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
	        },
            'datadictform textfield[name=datavalue]': {// 密码项目的事件处理
                specialkey: function(field, e){
                    if (e.getKey() == e.ENTER) {
                        this.getSubmitBtn().getEl().dom.click();
                    }
                }
            },
	        'datadictwindow': {
	        	show: function(){
	        		Ext.getCmp("dataname").focus(100, true);
	        	}
	        },
	        'datadictwindow button[action=submit]': {
	        	click: function() {
	                // form表单对象 
	                var formObj = this.getFormPanel().getForm();
	                var gridPanel = this.getGridPanel();
	                var window = this.getWindow();
	                
	                // 检查表单项的录入是否存在问题
	                if (formObj.isValid()) {
	                    // 提交表单
	                    formObj.submit({
	                        waitMsg: '数据正在处理请稍后', // 提示信息  
	                        waitTitle: '提示', // 标题  
	                        url: 'services/systemDataModify', // 请求的url地址  
	                        method: 'POST', // 请求方式  
	                        success: function(form, action) { // 添加数据成功后，重新加载数据源刷新表单 
	                        	gridPanel.getStore().loadRawData();
	                        	gridPanel.getStore().load();
	                        },
	                        failure: function(form, action) { // 添加失败后，提示用户添加异常
	                            Ext.Msg.alert('失败', '操作未完成，原因：录入信息错误');
	                        }
	                    });
	                    // 关闭当前弹出窗
	                    setTimeout(function() { window.hide(); }, 100);
	                }
	            }
	        },
	        'datadictwindow button[action=cancel]': {
	        	click: function(){
                    this.getWindow().hide();
	        	}
	        }
        })
    },
    
    /**
     * Module Launch
     */
	onLaunch: function() {
		// 获得数据源对象
	    var gridPanel = this.getGridPanel(), store = gridPanel.getStore();
	    
        // 装载数据
        store.load({params: { start: 0, limit: 25 }});

	    // 设置首行选中
        store.on("load", function(){
        	gridPanel.getSelectionModel().select(0);
        })
	}
});