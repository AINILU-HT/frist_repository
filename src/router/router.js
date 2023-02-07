// src/router/routes.js

const routes = [
    {
        path: '/',
        component: () => import('../views/login/index')
    },
    {
        path: '/home',
        redirect:'',
        component: () => import('../views/home/index')
    },

]

export { routes }