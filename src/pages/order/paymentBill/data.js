import { _calculate } from '@utils'
import React from 'react';
import { withRouter, Link } from "react-router-dom";

const columns = [
    {
        title: '账单编号',
        dataIndex: 'comId',
        width: 200,
    }, {
        title: '支付单ID',
        dataIndex: 'id',
        width: 200,
    }, {
        title: '用户Id',
        dataIndex: 'userId',
        width: 200,
        align: 'center'
    }, {
        title: '金额',
        dataIndex: 'amount',
        width: 200,
        align: 'center'
    }, {
        title: '支付状态',
        dataIndex: 'payStatus',
        width: 100,
        align: 'center'
    }, {
        title: '账单id',
        dataIndex: 'billId',
        width: 150,
        align: 'center'
    }, {
        title: '创建时间',
        dataIndex: 'addTime',
        width: 150,
    }


]

const { scroll_x, columns_data } = _calculate.tableWidth(columns);
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}