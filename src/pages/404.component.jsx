import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { siderData } from './main/sider/siderData.js';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    to_router( path ) {
        console.log(path, 'to_router')
    }
    render() {
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                    >
                        {
                            siderData.map((item, index) => {
                                return (
                                    <SubMenu
                                        key={index}
                                        title={<span><Icon type={item.menuIcon} />{item.menuName}</span>}
                                    >
                                        {
                                            item.menuItems.map((it, index) => {
                                                return (
                                                    <Menu.Item
                                                        key={index}
                                                        onClick={this.to_router.bind(this, it.itemPath)}
                                                    >
                                                        <Icon type={it.itemIcon} />
                                                        <span className="nav-text">{it.itemName}</span>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }

                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Root;
