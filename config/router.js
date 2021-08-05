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
                name: '首页',
                path: '/home',
                component: './home',
                
            },
            {
                name: '图表',
                path: '/chart',
                component: './chart',
               
            },
            {
                name: '设置',
                path: '/setting',
                component: './setting',
            },
            {
                name: '菜单',
                path: '/menu',
                component: './menu',
            }
        ]
    },
    
]
