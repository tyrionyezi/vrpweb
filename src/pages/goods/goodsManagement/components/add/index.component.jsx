import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Modal, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

@observer
class Add extends Component {
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
        this.props.set_add_visible(false);
    }

    handleOk = () => {

    }

    setInputValue = () => {

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
                title="添加商品"
                visible={add_visible}
                width={800}
                onOk={this.handleOk}
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
                        label="商品名称"
                    >
                        {getFieldDecorator('goodsName')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'id')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="押金"
                    >
                        {getFieldDecorator('depositPrice')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'id')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="商品数量"
                    >
                        {getFieldDecorator('goodsNum')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'id')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="商品价格"
                    >
                        {getFieldDecorator('goodsPrice')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'id')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="商品标题"
                    >
                        {getFieldDecorator('goodsTitle')(
                            <Input
                                placeholder="请输入"
                                onChange={this.setInputValue.bind(this, 'id')}
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
