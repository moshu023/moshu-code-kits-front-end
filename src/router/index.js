/**
 * 路由控制
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/',name: 'home',component: () => import(/* webpackChunkName: "about" */ '../views/home.vue') },
    { path: '/demo',name: 'demo',component: () => import(/* webpackChunkName: "about" */ '../views/demo.vue') },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
