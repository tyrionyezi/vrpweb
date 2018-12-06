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

    
    // 修改订单状态
    @action update_user_status = async () => {
        let url = 'user/update_shop_user';
        let params = [];
        if(this.selectedRows.length == 0) return _message.warning('请选择数据！');
        if(this.user_status == '') return _message.warning('请选择修改状态！');
        this.selectedRows.map((item)=> {
            params.push({
                id: item.userId,
                userState: this.user_status,
            })
        })
        let result = await _service._post(url, params)
        if(result.data.success) {
            _message.success(result.data.message);
            this.getQueryData();
            this.selectedRowKeys = [];
            this.user_status = '';
        }
    }

    @observable user_status = '';
    @action set_user_status = (val) => {
        this.user_status = val
    }
}

export default new State()