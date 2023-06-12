import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Main.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/register.vue')
    },
    {
        path: '/registeration',
        name: 'registeration',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Registeration.vue')
    },
    {
        path: '/check-in',
        name: 'checkIn',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/CheckIn.vue')
    },
    {
        path: '/medicine',
        name: 'medicine',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Medince.vue')
    },
    {
        path: '/orders',
        name: 'orders',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Orders.vue')
    },
]

const router = new createRouter({
    history: process.env.NODE_ENV === 'development' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('provToken')
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
