export default [
    {
        path: '/user',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        name: '登录',
                        path: '/user/login',
                        component: './user/Login',
                    },
                ],
            },
        ],
    },
    {        
        path: '/',
        component: '../layouts/MainLayout', 
        routes: [
            {   
                name: '工作台首页',
                path: '/home',
                component: './home',
                
            },
            {
                name: '图表详情页',
                path: '/chart',
                component: './chart',
               
            },
            {
                name: '设置详情页',
                path: '/setting',
                component: './setting',
            },
            {
                name: '菜单详情页',
                path: '/menu',
                component: './menu',
            },
            {
                name: '其他详情页',
                path: '/other',
                component: './others',
            }
        ]
    },
    
]
