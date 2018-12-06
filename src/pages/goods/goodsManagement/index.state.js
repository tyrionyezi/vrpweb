import React from 'react';
import { observable, action } from 'mobx';
import { _service, _message } from '@utils';


class State {
    // constructor (props) {
    //     super(props)
    // }

    @observable queryParams = {
        id: '',
    }
    @observable id = '';

    @action setQueryParams = (key, value) => {
        console.log(key, value);
        this.id = value
        this.queryParams[key] = value;
        console.log(this.queryParams.id)
    }


    @observable tableData = [];
    @action getGoodsList = async () => {
        const url = '/product/query_goods_list';
        // let params = Object.assign({}, this.queryParams);
        let result = await _service._post(url);
        if (result.data.success) {
            this.tableData = result.data.data;
        }
    }


       //  ------------------ 详情数据 --------------------------

    @observable detailData = {};
    @action getDetail = async (id) => {
        const url = 'product/query_goods_list';
        // /user/find_user_detail
        let params = {
            id: id
        }
        
        let result = await _service._post(url, params);
        this.set_detail_visible(true);
        if (result.data.success) {
            this.detailData = result.data.data[0];
            this.set_detail_visible(true);
        }
    }

    @observable detail_visible = false;

    @action set_detail_visible = (flag) => {
        this.detail_visible = flag;
    }



    // 删除
    @action do_delete = async () => {
        let url = '/product/delete_goods';
        let params = {
            ids: this.getKey(this.selectedRows, 'goodsId'),
        }
        if(params.ids.length === 0) {
            _message.warning('请选择！')
        }

        let result = await _service._post(url, params);
        if(result.data.success) {
            _message.success(result.data.message);
        }

    }

    @observable selectedRowKeys = [];
    @observable selectedRows = [];
    @action onSelectChange = (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys, selectedRows)
        this.selectedRowKeys = selectedRowKeys;
        this.selectedRows = selectedRows;
    }

    @action getKey = (arr = [], key) => {
        let keys = [];
        arr.map((item) => {
            keys.push(item[key]);
        })
        return keys;
    }


    // 新增

    @observable add_visible = false;

    @action set_add_visible = (flag) => {
        console.log(flag)
        this.add_visible = flag;
        console.log(this.add_visible, '1')
    }

    @action do_add_goods = async () => {
        let url = '';
        let params = {};
        let result = await _service._post();
    }
    


}

export default new State()