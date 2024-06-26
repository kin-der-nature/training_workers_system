import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/user'

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
      title: 'Мои курсы',
      roles: []
    },
    component: () => import('../screen/courses/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {

  const userStore = useUserStore();

  if (to.meta.roles && !userStore.isAuth) {
    return '/';
  }

})

export default router