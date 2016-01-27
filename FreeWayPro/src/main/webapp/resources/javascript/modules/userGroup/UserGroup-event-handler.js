/**
 * 系统功能菜单的删除操作
 */
function deleteUserGroup() {
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
                url: 'services/delUserGroup',
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

/**
 * 添加新的功能菜单项
 */
function addUserGroup() {
    new UserGroupWindow(0).show();
}

/**
 * 修改数据
 */
function updateUserGroup() {
    // 获得grid的SelectionModel
    var sm = Ext.getCmp("grid_id").getSelectionModel();
    // 当前选中记录
    var record = sm.getSelected();

    // 只有存在选中行的时候才显示修改窗口
    if (record) {
        var userGroupWindow = new UserGroupWindow(record.get("sysid")); // 窗体对象
        Ext.getCmp("userGroupForm").getForm().loadRecord(record); // 加载要编辑的对象
        userGroupWindow.show(); // 显示窗体
    }
}
