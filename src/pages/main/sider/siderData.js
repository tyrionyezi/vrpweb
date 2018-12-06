const siderData = [
    {
        menuName: '首页',
        menuIcon: 'user',
        menuPath: '',
        menuItems: [
            {
                itemId: '1-1',
                itemName: '今日销量',
                itemIcon: 'user',
                itemPath: '13123123'
            }

        ]
    },{
        menuName: '商品',
        menuIcon: 'bar-chart',
        menuPath: '',
        menuItems: [
            {
                itemId: '1-1',
                itemName: '商品管理',
                itemIcon: 'bar-chart',
                itemPath: '/goods/goodsManagement'
            },{
                itemId: '2-2',
                itemName: '商品分类',
                itemIcon: 'bar-chart',
                itemPath: '/goods/goodsCategory'
            }
        ]
    },{
        menuName: '订单',
        menuIcon: 'bar-chart',
        menuPath: '',
        menuItems: [
            {
                itemId: '2-1',
                itemName: '订单管理',
                itemIcon: 'bar-chart',
                itemPath: '/order/orderList'
            },{
                itemId: '2-2',
                itemName: '账单管理',
                itemIcon: 'bar-chart',
                itemPath: '/order/billManagement'
            },{
                itemId: '2-3',
                itemName: '支付单管理',
                itemIcon: 'bar-chart',
                itemPath: '/order/paymentBill'
            },
        ]
    },{
        menuName: '用户',
        menuIcon: 'bar-chart',
        menuPath: '',
        menuItems: [
            {
                itemId: '3-1',
                itemName: '商户管理',
                itemIcon: 'bar-chart',
                itemPath: '/seller/sellerList'
            },{
                itemId: '3-2',
                itemName: '系统用户管理',
                itemIcon: 'bar-chart',
                itemPath: '/seller/systemUsers'
            },{
                itemId: '3-3',
                itemName: '用户收益管理',
                itemIcon: 'bar-chart',
                itemPath: '/seller/sellerList'
            },
        ]
    },
]


export {
    siderData,
}