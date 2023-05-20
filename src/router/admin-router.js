import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/main.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/home.vue')
    },
    {
        path: '/registeration',
        name: 'registeration',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/registeration.vue')
    },
    {
        path: '/medicine',
        name: 'medicine',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/medicine.vue')
    },
    {
        path: '/help',
        name: 'help',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/help.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/feedback.vue')
    },
    {
        path: '/users',
        name: 'users',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Admin/usermanagment.vue')
    },
]

const router = new createRouter({
    history: process.env.NODE_ENV === 'development' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
