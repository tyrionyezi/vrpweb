import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
import _state from './index.state.js';
import { _scroll_x, _columns } from './data.js';
import TabNav from './components/tabNav/index.component';
import AddComponent from './components/add/index.component';
import DetailComponent from './components/detail/index.component';
import { _dictionary } from '@utils'

@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    cell_render = (data) => {
        data.map((item) => {
            item.render = (text, record, index) => {
                // if (item.dataIndex == 'operation') {
                //     return (
                //         <span style={{ color: '#03a9f4', cursor: 'pointer' }} onClick={this.to_router.bind(this, record.orderId)}>
                //             {/* <Link to={{ pathname: '/order/billManagement', query: { id: record.orderId } }}> */}
                //             查看账单
                //             {/* </Link> */}
                //         </span>
                //     )
                // }
                if (item.dataIndex == 'userStatus') {
                    text = _dictionary.userStatus[text];
                }
                return text;
            }
        })
    }

    componentWillMount() {
        _state.getQueryData();
        this.cell_render(_columns);
    }

    render() {
        const rowSelection = {
            selectedRowKeys: _state.selectedRowKeys,
            onChange: _state.onSelectChange,
        };


        return (
            <div className="sub-page">
                <TabNav
                    do_delete={_state.do_delete}
                    set_add_visible={_state.set_add_visible}
                ></TabNav>
                <Table
                    columns={_columns}
                    dataSource={_state.tableData}
                    bordered
                    rowKey={(record, i) => i}
                    scroll={{
                        x: _scroll_x
                    }}
                    onRow={(record) => {
                        return {
                            onDoubleClick: _state.getDetail.bind(this, record),
                        }
                    }
                    }
                    rowSelection={rowSelection}
                />

                <AddComponent
                    add_visible={_state.add_visible}
                    set_add_visible={_state.set_add_visible}
                    set_userObj={_state.set_userObj}
                    do_add_user={_state.do_add_user}
                ></AddComponent>

                <DetailComponent
                    detail_visible={_state.detail_visible}
                    set_detail_visible={_state.set_detail_visible}
                    detailData={_state.detailData}
                    isEdit={_state.isEdit}
                    set_userInfo={_state.set_userInfo}
                    update_sys_userInfo={_state.update_sys_userInfo}
                >
                </DetailComponent>
            </div>
        );
    }
}

export default Index;
