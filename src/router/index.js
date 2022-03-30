/**
 * 路由控制
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/',name: 'home',component: () => import(/* webpackChunkName: "about" */ '../views/home.vue') },
    { path: '/demo',name: 'demo',component: () => import(/* webpackChunkName: "about" */ '../views/demo.vue') },
    {
        path: '/center',
        name: 'center',
        component: () => import(/* webpackChunkName: "about" */ '../views/center.vue'),
        children:[
            {
                path: '/center',
                name: 'centerPage',
                component: () => import(/* webpackChunkName: "about" */ '../views/center/centerPage.vue'),
            },
            {
                path: '/system/userManage',
                name: 'userManage',
                component: () => import(/* webpackChunkName: "about" */ '../views/system/userManage.vue'),
            },
            {
                path: '/system/userPower',
                name: 'userPower',
                component: () => import(/* webpackChunkName: "about" */ '../views/system/userPower.vue'),
            },
            {
                path: '/system/systemRecord',
                name: 'systemRecord',
                component: () => import(/* webpackChunkName: "about" */ '../views/system/systemRecord.vue'),
            },
        ]
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
