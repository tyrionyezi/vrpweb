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


    render() {

        return (
            <Button onClick={this.showConfirm}>删除</Button>
        );
    }
}

export default Index;
