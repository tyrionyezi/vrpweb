import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
// import styles from './index.css';
import _state from './index.state.js';
import { _scroll_x, _columns } from './data.js';

// import Query from './components/query/index.component'
// import Detail from './components/detail/index.component'




@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        _state.getQuerydata();
        console.log(this.props.params)
    }
    componentDidMount() {
        console.log(this.props.params)
    }

    render() {
        return (
            <div className="sub-page">
                <div className="query-box">
                    {/* <Query
                        queryParams={_state.queryParams}
                        setQueryParams={_state.setQueryParams}
                        getGoodsList={_state.getGoodsList}
                    ></Query> */}
                </div>
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
                                onDoubleClick: _state.getDetail.bind(this, record.orderId),
                            }
                        }
                    }
                />

                {/* <Detail
                detail_visible={_state.detail_visible}
                set_detail_visible={_state.set_detail_visible}
                /> */}
            </div>
        );
    }
}

export default Index;
