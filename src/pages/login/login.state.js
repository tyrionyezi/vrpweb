import React from 'react';
import { observable, action } from 'mobx';
import { _service, _message } from '@utils';


class State {
    // constructor (props) {
    //     super(props)
    // }

    @action do_login = async (params) => {
        let url = '/user/login';
        let result = await _service._post(url, params);
        let _status = result.data.success;
        if(result.data.success) {
            _message.success('登陆成功');
        }
        return result.data;
    }

  
}

export default new State()