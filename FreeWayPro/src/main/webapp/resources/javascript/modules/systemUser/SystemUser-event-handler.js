/**
 * 系统功能菜单的删除操作
 */
function deleteSystemUser() {
    // 表格对象
    var gridObj = Ext.getCmp("grid_id");
    // 如果选中行无效，则不相应用户的删除操作
    if (gridObj.selModel.selections.length < 1) {
        return false;
    }
    // 当前选中行
    var rowId = gridObj.selModel.selections.keys;

    // 提示用户确认删除操作
    Ext.MessageBox.confirm('确认删除', '你确定要删除选中记录吗?', function(res) {
        if (res === 'yes') { // 用户确认要执行删除操作
            Ext.Ajax.request({
                url: 'services/delSystemUser',
                params: {
                    sysid: rowId
                },
                method: 'POST',
                success: function(response, options) {
                    gridObj.getStore().reload();
                },
                failure: function(response, options) {
                    Ext.MessageBox.alert('失败', '请求超时或网络故障, 错误编号：' + response.status);
                }
            });
        }
    });
}

/**
 * 添加新的功能菜单项
 */
function addSystemUser() {
    new SystemUserWindow(0).show();
}

/**
 * 修改数据
 */
function updateSystemUser() {
    // 获得grid的SelectionModel
    var sm = Ext.getCmp("grid_id").getSelectionModel();
    // 当前选中记录
    var record = sm.getSelected();

    // 只有存在选中行的时候才显示修改窗口
    if (record) {
        var systemUserWindow = new SystemUserWindow(record.get('sysid'));// 窗体对象
        Ext.getCmp("systemUserForm").getForm().loadRecord(record);// 加载要编辑的对象
        systemUserWindow.show();// 显示窗体
    }
}