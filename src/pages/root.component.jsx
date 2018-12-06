import React, { Component } from 'react';
import Sider from './main/sider/index.component.jsx';
import Header from './main/header/index.component.jsx';
import Routes from './../router/router';
import './root.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <Sider />
                <div className="page-right">
                    <Header />
                    {/* <Router > */}
                    <div className="main-content">
                        {/* <Routes /> */}
                        {/* <Switch>
                            <Route path='/' strict component={Goodlist}></Route>
                            <Route path='/seller/sellderList' exact component={Sellerlist}></Route>

                        </Switch> */}
                        <Routes></Routes>
                    </div>
                    {/* </Router> */}
                </div>
            </div>
        );
    }
}

export default Root;
