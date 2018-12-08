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

    @action setQueryParams = (key, value) => {
        this.queryParams[key] = value;
    }


    @observable tableData = [];
    @action getGoodsList = async () => {
        const url = '/order/list_order';
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
        let url = '/order/delete';
        console.log(_tool.getKeys(this.selectedRows, 'orderId'))
        let params = {
            idList: _tool.getKeys(this.selectedRows, 'orderId'),
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

    @observable orderStateCode = '';
    @action set_orderStateCode = (val, val2) => {
        console.log(val, val2)
        this.orderStateCode = val;
    }
    @action update_order_status = async (record, val) => {
        console.log(record)
        let url = '/order/change_order_status';
        let params = {
            id: record.orderId,
            orderStateCode: val + '',
        }
        let result = await _service._post(url, params);
        if(result.data.success) {
            _message.success(result.data.message);
            this.getQueryData();
        }
    }

}

export default new State()