import React from 'react';
import { observable, action } from 'mobx';
import { _service, _message, _tool } from '@utils';


class State {
    // constructor (props) {
    //     super(props)
    // }

    @observable queryParams = {
        id: '',
        orderNo: '',
        buyerId: '',
        startTime: '',
        endTime: '',
    }
    @observable id = '';

    @action setQueryParams = (key, value) => {
        this.queryParams[key] = value;
    }


    @observable tableData = [];
    @action getQueryData = async () => {
        const url = '/shop_bill/list';
        let params = Object.assign({}, this.queryParams);
        let result = await _service._post(url, params);
        if (result.data.success) {
            this.tableData = result.data.data;
        }
    }


       //  ------------------ 详情数据 --------------------------

    @observable detailData = {};
    @action getDetail = async (id) => {
        console.log(id);
        const url = '/order/list_shop_bill ';
        // /user/find_user_detail
        let params = {
            id: id
        }
        
        let result = await _service._post(url, params);
        this.set_detail_visible(true);
        if (result.data.success) {
            this.detailData = result.data.data;
            this.set_detail_visible(true);
        }
    }

    @observable detail_visible = false;

    @action set_detail_visible = (flag) => {
        this.detail_visible = flag;
    }



    @observable selectedRowKeys = [];
    @observable selectedRows = [];
    @action onSelectChange = (selectedRowKeys, selectedRows) => {
        this.selectedRowKeys = selectedRowKeys;
        this.selectedRows = selectedRows;
    }

    // 删除
    @action do_delete = async () => {
        let url = '/shop_bill/delete';
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