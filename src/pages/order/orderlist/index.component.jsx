import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
import { withRouter, Link } from "react-router-dom";
import styles from './index.less';
import _state from './index.state.js';
import { _scroll_x, _columns } from './data.js';
import { _dictionary } from '@utils'
console.log(_dictionary)
import Query from './components/query/index.component'
import Detail from './components/detail/index.component'
import TabNav from './components/tabNav/index.component'



@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    cell_render = (data) => {
        data.map((item) => {
            item.render = (text, record, index) => {
                if (item.dataIndex == 'operation') {
                    return (
                        <span style={{ color: '#03a9f4', cursor: 'pointer' }} onClick={this.to_router.bind(this, record.orderId)}>
                            {/* <Link to={{ pathname: '/order/billManagement', query: { id: record.orderId } }}> */}
                            查看账单
                            {/* </Link> */}
                        </span>
                    )
                }
                if (item.dataIndex == 'orderStatus') {
                    text = _dictionary.orderStatus[text];
                }
                return text;
            }
        })
    }

    to_router = (id) => {
        console.log(id);
        this.props.history.push({ pathname: '/order/billManagement', query: { id: id } })
    }
    paymentBill

    componentWillMount() {
        _state.getGoodsList();

    }
    componentDidMount() {
        this.cell_render(_columns);
    }

    render() {
        const rowSelection = {
            selectedRowKeys: _state.selectedRowKeys,
            onChange: _state.onSelectChange,
        };

        return (
            <div className="order-list sub-page">
                <div className="query-box">
                    <Query
                        queryParams={_state.queryParams}
                        setQueryParams={_state.setQueryParams}
                        getGoodsList={_state.getGoodsList}
                    ></Query>
                </div>
                <TabNav
                    do_delete={_state.do_delete}
                ></TabNav>
                <Table
                    columns={_columns}
                    dataSource={_state.tableData}
                    bordered
                    rowKey={(record, i) => i}
                    scroll={{
                        x: 2770
                    }}
                    onRow={(record) => {
                            return {
                                onDoubleClick: _state.getDetail.bind(this, record.orderId),
                            }
                        }
                    }
                    rowSelection={rowSelection}
                />

                <Detail
                    detail_visible={_state.detail_visible}
                    set_detail_visible={_state.set_detail_visible}
                />
            </div>
        );
    }
}

export default Index;
