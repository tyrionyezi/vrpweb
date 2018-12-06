import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Input, Button, Icon, Modal } from 'antd';
const confirm = Modal.confirm;

@observer
class Index extends Component {
    constructor(props) {
        super(props);
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

    render() {

        return (
            <div className="tab-nav">
                {/* <Button onClick={this.props.set_add_visible.bind(this, true)}>新增</Button> */}
                <Button onClick={this.showConfirm}>删除</Button>

            </div>

        );
    }
}

export default Index;
