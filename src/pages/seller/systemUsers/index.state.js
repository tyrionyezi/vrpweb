import React from 'react';
import { action, observable } from 'mobx';
import { _service, _message, _tool } from '@utils';
class State {
    // constructor (props) {
    //     super(props)
    // }


    @observable tableData = [];
    @action getQueryData = async () => {
        let url = '/user/list_sys_user';
        let params = {

        }
        let result = await _service._post(url, params);
        if (result.data.success) {
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
        let url = '/user/delete_sys_user';
        let params = {
            idList: _tool.getKeys(this.selectedRows, 'id'),
        }
        if (params.idList.length == 0) {
            _message.warning('请选择')
        }
        let result = await _service._post(url, params);

        if (result.data.success) {
            _message.success(result.data.message);
            this.getQueryData();
            this.selectedRowKeys = [];
        }
    }


    // 新增
    @observable add_visible = false;
    @action set_add_visible = (flag) => {
        this.add_visible = flag;
    }
    @observable userObj = {
        username: '', //用户名  必填
        password: '', //密码 必填
        email: '', //邮箱
        nickname: '', //昵称
        phone: '', //手机 必填
        roleId: '' // 角色ID 传1
    }

    @action set_userObj = (key, val) => {
        this.userObj[key] = val;
    }

    @action do_add_user = async () => {
        let url = '/user/add_sys_user';
        let params = Object.assign({}, this.userObj);
        console.log(params, 'params')
        let result = await _service._post(url, params);
        this.set_add_visible(false);
        if (result.data.success) {
            _message.success(result.data.message);
        } else {
            _message.error(result.data.message);
        }
    }


    //  ------------------ 详情数据 --------------------------

    @observable detailData = {};
    @action getDetail = async (record) => {
        console.log(record);
        this.detailData = record;
        // const url = '/order/list_shop_bill ';
        // /user/find_user_detail
        // let result = await _service._post(url, params);
        // this.set_detail_visible(true);
        // if (result.data.success) {
        //     this.detailData = result.data.data;
        //     this.set_detail_visible(true);
        // }
        this.set_detail_visible(true);
    }

    @observable detail_visible = false;
    @observable isEdit = false;
    @action set_detail_visible = (flag) => {
        this.detail_visible = flag;
    }

    @action set_userInfo = (key, val) => {
        this.detailData[key] = val;
    }

    @action update_sys_userInfo = async () => {
        let url = '/user/update_sys_user';
        let params = Object.assign({}, this.detailData);
        let result = await _service._post(url, params);
        this.set_detail_visible(false);
        if(result.data.success) {
            _message.success(result.data.message);
            this.getQueryData();
        }
    }


}
export default new State()