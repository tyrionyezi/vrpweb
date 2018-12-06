import { _calculate } from '@utils'

const columns = [
    {
        title: '类别ID',
        dataIndex: 'categoryId',
        width: 300,
    },{
        title: '类别名称',
        dataIndex: 'categoryName',
        width: 200,
        align: 'center'
    },{
        title: '类别英文称',
        dataIndex: 'categoryEnName',
        width: 200,
        align: 'center'
    }
]

const { scroll_x, columns_data } = _calculate.tableWidth(columns)
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}