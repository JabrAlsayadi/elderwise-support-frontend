import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '/',
    //     name: 'main',
    //     meta: { requiresAuth: false },
    //     component: () => import(/* webpackChunkName: "main" */'../views/Admin/main.vue')
    // },
    {
        path: '/login',
        name: 'login',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/login.vue')
    },
    {
        path: '/',
        name: 'home',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/home.vue')
    },
    {
        path: '/registeration',
        name: 'registeration',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/registeration.vue')
    },
    {
        path: '/medicine',
        name: 'medicine',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/medicine.vue')
    },
    {
        path: '/orders',
        name: 'orders',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/orders.vue')
    },
    {
        path: '/users',
        name: 'users',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/usermanagment.vue')
    },
]

const router = new createRouter({
    history: process.env.NODE_ENV === 'development' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('adminToken')
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
