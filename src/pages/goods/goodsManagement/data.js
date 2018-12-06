import { _calculate } from '@utils'

const columns = [
    {
        title: '商品id',
        dataIndex: 'goodsName',
        width: 200,
    },{
        title: '商品名称',
        dataIndex: 'goodsName',
        width: 200,
        align: 'center'
    },{
        title: '商品标题',
        dataIndex: 'goodsTitle',
        width: 200,
        align: 'center'
    },{
        title: '商品价格',
        dataIndex: 'goodsPrice',
        width: 150,
        align: 'center'
    },{
        title: '商品数量',
        dataIndex: 'goodsNum',
        width: 150,
    },{
        title: '押金数量',
        dataIndex: 'depositPrice',
        width: 100,
    },{
        title: '商品售量',
        dataIndex: 'goodsSales',
        width: 200,
    },{
        title: '种类ID',
        dataIndex: 'categoryId',
        width: 100,
    },{
        title: '商品单价',
        dataIndex: 'goodsPrice',
        width: 150,
    },{
        title: '商品标题',
        dataIndex: 'goodsTitle',
        width: 200,
    }
]

const { scroll_x, columns_data } = _calculate.tableWidth(columns);
console.log(scroll_x)
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}