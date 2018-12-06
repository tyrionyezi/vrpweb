// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//     BrowserRouter as Router,
//     HashRouter,
//     Switch,
//     Route,
//     Redirect
// } from 'react-router-dom';
// import { LocaleProvider } from 'antd';
// import createHistory from 'history/createBrowserHistory';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';
// import Root from './pages/root.component';
// // import goodsList from './pages/goods/goodslist/index.component'

// const history = createHistory();
// window.appHistory = history;
// import Nomatch from './pages/404.component.jsx';

// ReactDOM.render(
//     <LocaleProvider locale={zh_CN}>
//         <HashRouter history={history}>
//             <Switch>
//                 <Route  path='/' strict component={Root}/>
//             </Switch>
//         </HashRouter>
//     </LocaleProvider>,
//     // <Root />,
//     document.getElementById('root')
// );


import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './pages/login/login.jsx'
import Root from './pages/root.component.jsx'
import registerServiceWorker from './registerServiceWorker';
import './style/reset.less';

//认证

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth : true, // 表示是否认证通过
        };
    }

    onLogin = (val) => {
        this.setState({
            auth: val,
        })
    }

    componentDidMount() {

    }

    render() {

        //登录拦截
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                this.state.auth ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
            )}/>
        )
        return (

            <Router>
                <Switch>
                    <Route  path='/login'
                            render={props => (<Login onLongin={this.onLogin} {...props} />
                    )}>
                    </Route>
                    {/*<Route path="/" component={Layout}></Route>*/}
                    <PrivateRoute path="/" component={Root}/>
                </Switch>
            </Router>

        );
    }
}



ReactDOM.render(
    <App/>,
    // <Root />,
    document.getElementById('root')
);
// registerServiceWorker();