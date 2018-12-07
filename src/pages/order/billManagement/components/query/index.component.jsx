import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Input, Button, Icon, DatePicker } from 'antd';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
@observer
class Query extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleSubmit = () => {
        if(this.props.getQueryData) {
            this.props.getQueryData();
        }
    }

    setInputValue = (key, value) => {
        console.log(value)
        let val = value.target.value;
        if (this.props.setQueryParams) {
            this.props.setQueryParams(key, val);
        }
    }

    set_rangeDate = (start, end, date, dateArr) => {
        this.props.setQueryParams(start, dateArr[0]);
        this.props.setQueryParams(end, dateArr[0]);
    }


    emitEmpty = (key) => {
        if (key == 'id') {
            this.props.form.setFieldsValue({
                id: null
            })
        }
        if (key == 'orderNo') {
            this.props.form.setFieldsValue({
                id: null
            })
        }
        if (key == 'buyerId') {
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
                            label="订单Id"
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
                        <FormItem
                            label="订单编号"
                        >
                            {getFieldDecorator('orderNo')(
                                <Input
                                    placeholder="请输入"
                                    onChange={this.setInputValue.bind(this, 'orderNo')}
                                    suffix={
                                        queryParams.id ? <Icon type='close-circle'
                                            onClick={this.emitEmpty.bind(this, 'orderNo')} /> : null
                                    }
                                >
                                </Input>
                            )}
                        </FormItem>
                    </Col>

                    <Col span={8}>
                        <FormItem
                            label="用户Id"
                        >
                            {getFieldDecorator('buyerId')(
                                <Input
                                    placeholder="请输入"
                                    onChange={this.setInputValue.bind(this, 'buyerId')}
                                    suffix={
                                        queryParams.id ? <Icon type='close-circle'
                                            onClick={this.emitEmpty.bind(this, 'buyerId')} /> : null
                                    }
                                >
                                </Input>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem
                            label="订单编号"
                        >
                            {getFieldDecorator('startTime')(
                                <RangePicker
                                    onChange={this.set_rangeDate.bind(this, 'startTime', 'endTime')}
                                />
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
