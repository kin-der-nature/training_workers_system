import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'auth',
    path: '/',
    meta: {
      layout: 'empty'
    },
    component: import('../screen/auth/index.vue')
  },
  {
    name: 'Home',
    path: '/home',
    meta: {
      roles: []
    },
    component: import('../screen/home/index.vue')
  },
  {
    name: 'courses',
    path: '/courses',
    meta: {
      title: 'Мои курсы'
    },
    component: () => import('../screen/courses/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router