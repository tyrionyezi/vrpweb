import { _calculate } from '@utils'

const columns = [
    {
        title: '手机号',
        dataIndex: 'phone',
        width: 150,
        align: 'center'
    },{
        title: '密码',
        dataIndex: 'password',
        width: 200,
        align: 'center'
    },{
        title: '用户名',
        dataIndex: 'username',
        width: 150,
        align: 'center'
    },{
        title: '用户状态',
        dataIndex: 'userStatus',
        width: 100,
        align: 'center'
    },{
        title: 'openId',
        dataIndex: 'openId',
        width: 150,
    },{
        title: '添加时间',
        dataIndex: 'addTime',
        width: 150,
    },
]

const { scroll_x, columns_data } = _calculate.tableWidth(columns)
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}