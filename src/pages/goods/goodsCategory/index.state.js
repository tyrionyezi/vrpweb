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
    @action getQuerydata = async () => {
        const url = '/product/query_category_list';
        // let params = Object.assign({}, this.queryParams);
        let result = await _service._post(url);
        if (result.data.success) {
            this.tableData = result.data.data;
        }
    }


       //  ------------------ 详情数据 --------------------------

    @observable detailData = {};
    @action getDetail = async (id) => {
        console.log(id);
        const url = '/order/list_shop_bill';
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


}

export default new State()