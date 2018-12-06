import { _calculate } from '@utils'
import React from 'react';
import { withRouter, Link } from "react-router-dom";

const columns = [
    {
        title: '订单id',
        dataIndex: 'orderId',
        width: 200,
    },
    {
        title: '订单编号',
        dataIndex: 'orderNo',
        width: 200,
    }, {
        title: '租赁开始时间',
        dataIndex: 'rentalStartTime',
        width: 200,
        align: 'center'
    }, {
        title: '租赁结束时间',
        dataIndex: 'rentalEndTime',
        width: 200,
        align: 'center'
    }, {
        title: '租赁月数',
        dataIndex: 'rentalMonths',
        width: 100,
        align: 'center'
    }, {
        title: '总计金额',
        dataIndex: 'totalPrice',
        width: 150,
    }, {
        title: '总计押金',
        dataIndex: 'depositPrice',
        width: 100,
    }, {
        title: '商品名称',
        dataIndex: 'goodsName',
        width: 200,
    }, {
        title: '商品数量',
        dataIndex: 'goodsNum',
        width: 100,
    }, {
        title: '商品单价',
        dataIndex: 'goodsPrice',
        width: 100,
    }, {
        title: '商品标题',
        dataIndex: 'goodsTitle',
        width: 200,
    }, {
        title: '购买用户ID',
        dataIndex: 'userId',
        width: 350,
    }, {
        title: '真实姓名',
        dataIndex: 'addrRealname',
        width: 100,
    }, {
        title: '手机号码',
        dataIndex: 'addrPhone',
        width: 150,
    }, {
        title: '城市',
        dataIndex: 'addrCity',
        width: 200,
    }, {
        title: '详细地址',
        dataIndex: 'address',
        width: 200,
    }, {
        title: '订单状态',
        dataIndex: 'orderStatus',
        width: 130,
    }, {
        title: '订单创建时间',
        dataIndex: 'addTime',
        width: 200,
        align: 'center'
    }, {
        title: '最后修改时间',
        dataIndex: 'lastChangedTime',
        width: 200,
        align: 'center'
    }, {
        title: '操作',
        dataIndex: 'operation',
        fixed: 'right',
        width: 300,
    },
]

const { scroll_x, columns_data } = _calculate.tableWidth(columns);
export {
    scroll_x as _scroll_x,
    columns_data as _columns
}