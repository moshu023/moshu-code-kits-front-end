/**
 * 路由控制
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/',name: 'login',component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue') },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
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
