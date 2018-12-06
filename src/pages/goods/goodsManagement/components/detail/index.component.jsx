import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Modal, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

@observer
class Detail extends Component {
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

    setInputValue= () => {

    }



    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { detail_visible, detailData } = this.props;
        console.log(detailData);
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
                width={1080}
                visible={detail_visible}
                onCancel={this.handleCancel}
            >
                <Row>
                    <Col span={8}>
                    <FormItem
                        label="商品名称"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('goodsName')(
                            <Input
                                placeholder="请输入"
                                placeholder={detailData.goodsId}
                                disabled
                                onChange={this.setInputValue.bind(this, 'id')}
                            >
                            </Input>
                        )}
                    </FormItem>
                    </Col>
                </Row>
            </Modal>
        );
    }
}
const Index = Form.create()(Detail);
export default Index;
