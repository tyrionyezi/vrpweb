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
        isEdit: false
    };

    componentWillMount() {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.update_sys_userInfo();
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
        this.props.set_detail_visible(false);
    }

    setEdit = () => {
        this.setState({ isEdit: true })
    }

    handleOk = () => {

    }

    setInputValue = (key, e) => {
        let val = e.target.value;
        this.props.set_userInfo(key, val);
    }



    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { detail_visible, detailData, isEdit } = this.props;
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
                title="详情"
                visible={detail_visible}
                width={800}
                onCancel={this.handleCancel}
                footer={
                    this.state.isEdit ?
                        [<Button key="submit" type="primary" onClick={this.handleSubmit}>保存</Button>]
                        :
                        [<Button key="back" onClick={this.setEdit}>编辑</Button>]
                }
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
                            initialValue: detailData.username
                        })(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.username}
                                disabled={this.state.isEdit ? false : true}
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
                            initialValue: detailData.password
                        })(
                            <Input
                                placeholder="请输入"
                                type="password"
                                disabled={this.state.isEdit ? false : true}
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
                            initialValue: detailData.password
                        })(
                            <Input
                                placeholder="请输入"
                                type="password"
                                disabled={this.state.isEdit ? false : true}
                                onBlur={this.handleConfirmBlur}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email',{
                            initialValue: detailData.password
                        })(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.email}
                                disabled={this.state.isEdit ? false : true}
                                onChange={this.setInputValue.bind(this, 'email')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="昵称"
                    >
                        {getFieldDecorator('nickname',{
                            initialValue: detailData.nickname
                        })(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.nickname}
                                disabled={this.state.isEdit ? false : true}
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
                            initialValue: detailData.phone
                        })(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.phone}
                                disabled={this.state.isEdit ? false : true}
                                onChange={this.setInputValue.bind(this, 'phone')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="角色ID"
                    >
                        {getFieldDecorator('roleId',{
                            initialValue: detailData.roleId
                        })(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.roleId}
                                disabled={this.state.isEdit ? false : true}
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
