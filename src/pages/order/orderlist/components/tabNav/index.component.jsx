import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Input, Button, Icon, Modal, Select } from 'antd';
const confirm = Modal.confirm;
const Option = Select.Option;
import { _dictionary } from '@utils';

@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        visible: false,
        orderStatusList: [],
    }

    componentWillMount() {

    }

    showConfirm = () => {
        let _this = this
        confirm({
            title: '警告',
            content: '确定删除？',
            onOk() {
                _this.props.do_delete();
            },
            onCancel() { },
        });
    }

    show_order_status = () => {
        let keys = Object.keys(_dictionary.orderStatus);
        let arr = [];
        this.setState({
            orderStatusList: [],
        })
        keys.map((item) => {
            arr.push({
                value:item,
                label:_dictionary.orderStatus[item]
            })
        })
        this.setState({
            orderStatusList: arr,
        })

        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    handleOk = () => {
        this.setState({ visible: false })
        this.props.update_order_status()
    }


    render() {

        return (
            <div className="tab-nav">
                {/* <Button onClick={this.props.set_add_visible.bind(this, true)}>新增</Button> */}
                <Button onClick={this.showConfirm}>删除</Button>
                <Button onClick={this.show_order_status}>修改订单状态</Button>

                <Modal
                    title="修改订单状态"
                    visible={this.state.visible}
                    height={300}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Select
                        style={{ width: 200 }}
                        placeholder="请选择"
                        onChange={this.props.set_orderStateCode}
                    >
                        {this.state.orderStatusList.map((item) => {
                            return (
                                <Option value={item.value}>{item.label}</Option>
                            )
                        })}
                    </Select>
                </Modal>
            </div>

        );
    }

}

export default Index;
