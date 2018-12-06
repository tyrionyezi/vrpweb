import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Modal, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

@observer
class Add extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    componentWillMount() {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.do_add_user();
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致！');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleCancel = (e) => {
        this.props.set_add_visible(false);
    }

    handleOk = () => {

    }

    setInputValue = (key, e) => {
        console.log(e, key)
        let val = e.target.value;
        this.props.set_userObj(key, val);
    }



    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { add_visible } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Modal
                title="添加用户"
                visible={add_visible}
                width={800}
                onOk={this.handleSubmit}
                okText={"确定"}
                cancelText={"取消"}
                onCancel={this.handleCancel}
            >
                <Form onSubmit={this.handleSubmit}>
                    {/* <Row>
                        <Col span="8"></Col>
                        <Col span="16"></Col>
                    </Row> */}
                    <FormItem
                        {...formItemLayout}
                        label="用户名"
                    >
                        {getFieldDecorator('username', {
                            rules: [{
                                required: true, message: '请填写用户名！',
                            }],
                        })(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'username')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码！',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input
                                placeholder="请输入"
                                type="password"
                                onChange={this.setInputValue.bind(this, 'password')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="确认密码"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请输入密码',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input
                                placeholder="请输入"
                                type="password"
                                onBlur={this.handleConfirmBlur}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'email')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="昵称"
                    >
                        {getFieldDecorator('nickname')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'nickname')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="手机"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{
                                required: true, message: '请填写用户名！',
                            }],
                        })(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'phone')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="角色ID"
                    >
                        {getFieldDecorator('roleId')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'roleId')}
                            >
                            </Input>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}
const Index = Form.create()(Add);
export default Index;
