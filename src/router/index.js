import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "main" */'../views/Main/Main.vue')
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
