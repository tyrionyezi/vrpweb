import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Modal, Row, Col, Input, Button, Icon } from 'antd';

@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleSubmit = () => {
        if (this.props.getGoodsList) {
            this.props.getGoodsList();
        }
    }

    handleCancel = (e) => {
        console.log('1')
        this.props.set_detail_visible(false);
    }



    render() {
        const { detail_visible } = this.props;
        return (
            <Modal
                title="详情"
                width={1080}
                visible={detail_visible}
                onCancel={this.handleCancel}
                footer={null}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        );
    }
}

export default Index;
