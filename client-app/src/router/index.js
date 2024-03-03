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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router