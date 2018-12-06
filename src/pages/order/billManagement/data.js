import { _calculate } from '@utils'

const columns = [
    {
        title: '账单ID',
        dataIndex: 'id',
        width: 200,
    }, {
        title: '账单编号',
        dataIndex: 'comId',
        width: 200,
    }, {
        title: '账单状态',
        dataIndex: 'billStatus',
        width: 200,
        align: 'center'
    }, {
        title: '账单类型',
        dataIndex: 'billType',
        width: 100,
        align: 'center'
    }, {
        title: '金额',
        dataIndex: 'amount',
        width: 200,
        align: 'center'
    }, {
        title: '订单ID',
        dataIndex: 'orderId',
        width: 150,
        align: 'center'
    }, {
        title: '创建时间',
        dataIndex: 'addTime',
        width: 250,
        align: 'center'
    },
]

const { scroll_x, columns_data } = _calculate.tableWidth(columns)
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}