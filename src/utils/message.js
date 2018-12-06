import { message } from 'antd';

class Message {

    // 成功提示
    success = (str) => {
        if(str) return message.success(str);
    }

    // 成功提示
    error = (str) => {
        if(str) return message.error(str);
    }

    // 成功提示
    warning = (str) => {
        if(str) return message.warning(str);
    }
}

export default new Message();