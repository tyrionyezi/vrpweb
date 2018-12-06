

const Dictionary = {
    //订单状态
    'orderStatus': {
        '0': '未缴定金',
        '1': '未发货',
        '2': '租赁中',
        '3': '交易完成'
    },

    // 账单状态
    'billStatus': {
        '0': '待支付',
        '1': '已支付',
        '2': '支付失败'
    },

    // 账单类型
    'billType': {
        '1': '定金账单',
        '2': '押金账单',
        '3': '租赁账单'

    },

    // 支付状态
    'payStatus': {
        '0': '等待支付',
        '1': '支付成功',
        '2': '支付失败'
    },

    // 用户状态
    "userStatus": {
        '-1': '禁止登录',
        '0': '正常'
    }


}


export default Dictionary