import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'

//引入页面组件
// import Home from '../page/home/home.jsx' //首页

// 商品
// 商品分类
import goodsCategory  from './../pages/goods/goodsCategory/index.component';
// 商品管理
import goodsManagement from './../pages/goods/goodsManagement/index.component';

// 订单
// 订单管理
import orderList from './../pages/order/orderlist/index.component'; 
// 账单管理
import billManagement from './../pages/order/billManagement/index.component';
// 支付单管理
import paymentBill from './../pages/order/paymentBill/index.component';

// 商户管理
import sellerList from './../pages/seller/sellerlist/index.component';
import systemUsers from './../pages/seller/systemUsers/index.component';






class RouteMap extends Component {
    render () {
        return (
            <Switch>
                {/* <Route path='/' component={goodsCategory}></Route> */}
                <Route exact path='/index' component={orderList}></Route>
                
                <Route exact path='/goods/goodsCategory' component={goodsCategory}></Route>
                <Route exact path='/goods/goodsManagement' component={goodsManagement}></Route>

                <Route exact path='/order/orderList' component={orderList}></Route>
                <Route exact path='/order/billManagement' component={billManagement}></Route>
                <Route exact path='/order/paymentBill' component={paymentBill}></Route>


                <Route exact path='/seller/sellerList' component={sellerList}></Route>
                <Route exact path='/seller/systemUsers' component={systemUsers}></Route>
                
            </Switch>
        )
    }
}

export default RouteMap