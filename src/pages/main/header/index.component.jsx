import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// import GoodsList  from './../../goods/goodslist/index.component.jsx'
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} />
                // <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                //  {/* <GoodsList></GoodsList> */}
                // </Content>
            // </Layout>
        );
    }
}

export default Index;
