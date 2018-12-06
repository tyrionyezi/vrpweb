import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

@observer
class Query extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleSubmit = () => {
        if(this.props.getGoodsList) {
            this.props.getGoodsList();
        }
    }

    setInputValue = (key, value) => {
        console.log(value)
        let val = value.target.value;
        if (this.props.setQueryParams) {
            this.props.setQueryParams(key, val);
        }
    }

    emitEmpty = (key) => {
        if (key == 'id') {
            this.props.form.setFieldsValue({
                id: null
            })
        }
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { queryParams } = this.props
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={8}>
                        <FormItem
                            label="订单编号"
                        >
                            {getFieldDecorator('id')(
                                <Input
                                    placeholder="请输入"
                                    onChange={this.setInputValue.bind(this, 'id')}
                                    suffix={
                                        queryParams.id ? <Icon type='close-circle'
                                            onClick={this.emitEmpty.bind(this, 'id')} /> : null
                                    }
                                >
                                </Input>
                            )}
                        </FormItem>
                    </Col>

                    <Col span={8}>

                    </Col>

                    <Col span={8} className="search-Col">
                        <Button
                            type="primary"
                            htmlType="submit"
                        >查询</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const Index = Form.create()(Query);
export default Index;
