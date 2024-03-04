import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'auth',
    path: '/',
    component: import('../screen/auth/index.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: import('../screen/home/index.vue')
  },
  {
    name: 'courses',
    path: '/courses',
    meta: {
      title: 'Мои курсы',
      layout: 'defaultLayout'
    },
    component: () => import('../screen/courses/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router