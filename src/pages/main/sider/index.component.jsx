import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {withRouter, Link} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { siderData } from './siderData.js';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    to_router = (path) => {
        console.log(path)
        this.props.history.push(path);
    }
    render() {
        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {
                        siderData.map((item, index1) => {
                            return (
                                <SubMenu
                                    key={index1}
                                    title={<span><Icon type={item.menuIcon} />{item.menuName}</span>}
                                >
                                    {
                                        item.menuItems.map((it, index2) => {
                                            return (
                                                <Menu.Item
                                                    key={index1 + `-` + index2}
                                                onClick={this.to_router.bind(this, it.itemPath)}
                                                >
                                                    <Icon type={it.itemIcon} />
                                                    {/* <Link to={item.itemPath}> */}
                                                        <span>{it.itemName}</span>
                                                    {/* </Link> */}

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
        );
    }
}

export default withRouter(Index);
