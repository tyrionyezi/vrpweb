import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
import { withRouter, Link } from "react-router-dom";
import _state from './index.state.js';
import { _scroll_x, _columns } from './data.js';

import Query from './components/query/index.component'
import Detail from './components/detail/index.component'
import DeleteBtn from './components/tabnav/index.component';
import AddComponent from './components/add/index.component';


@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    // cell_render = (data) => {
    //     data.map((item) => {
    //         if(item.dataIndex == 'operation') {
    //             item.render = (it) => {
    //                 console.log(it);
    //                 return (
    //                     <Link to={"/order/billManagement" + it}>查看账单</Link>
    //                     // <span style={{color:'#337ab7', cursor: 'pointer'}}
    //                     // onClick={}
    //                     // >查看账单</span>
    //                 )
    //             }
    //         }
    //     })
    // }

    componentWillMount() {
        _state.getGoodsList();
    }


    render() {
        const rowSelection = {
            selectedRowKeys: _state.selectedRowKeys,
            onChange: _state.onSelectChange,
        };

        console.log(_state.detailData)

        return (
            <div className="sub-page">
                <div className="query-box">
                    <Query
                        queryParams={_state.queryParams}
                        setQueryParams={_state.setQueryParams}
                        getGoodsList={_state.getGoodsList}
                    ></Query>
                </div>
                <DeleteBtn
                    do_delete={_state.do_delete}
                    set_add_visible={_state.set_add_visible}
                ></DeleteBtn>
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
                            onDoubleClick: _state.getDetail.bind(this, record.goodsId),
                        }
                    }
                    }
                    rowSelection={rowSelection}
                />

                <Detail
                    detail_visible={_state.detail_visible}
                    set_detail_visible={_state.set_detail_visible}
                    detailData={_state.detailData}
                />

                <AddComponent
                    add_visible={_state.add_visible}
                    set_add_visible={_state.set_add_visible}
                />
            </div>
        );
    }

}

export default withRouter(Index);
