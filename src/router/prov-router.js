import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'main',
        meta: { requiresAuth: false },
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
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Registeration.vue')
    },
    {
        path: '/check-in',
        name: 'checkIn',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/CheckIn.vue')
    },
    {
        path: '/medicine',
        name: 'medicine',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Medince.vue')
    },
    {
        path: '/orders',
        name: 'orders',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Orders.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Prov/Profile.vue')
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
