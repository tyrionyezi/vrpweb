import React from 'react';
import { action, observable } from 'mobx';
import { _service, _message, _tool } from '@utils';
class State {
    // constructor (props) {
    //     super(props)
    // }


    @observable tableData = [];
    @action getQueryData = async () => {
        let url = '/user/list_shop_user';
        let params = {

        }
        let result = await _service._post(url, params);
        if(result.data.success) {
            this.tableData = result.data.data;
        }
    }

    @observable selectedRowKeys = [];
    @observable selectedRows = [];
    @action onSelectChange = (selectedRowKeys, selectedRows) => {
        this.selectedRowKeys = selectedRowKeys;
        this.selectedRows = selectedRows;
    }

    // 删除
    @action do_delete = async () => {
        let url = '/user/delete_shop_user';
        let params = {
            idList: _tool.getKeys(this.selectedRows, 'id'),
        }
        if(params.idList.length == 0 ) {
            _message.warning('请选择')
        }
        let result = await _service._post(url, params);

        if(result.data.success) {
            _message.success(result.data.message);
            this.getQueryData();
            this.selectedRowKeys = [];
        }
    }
}

export default new State()