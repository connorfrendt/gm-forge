import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../components/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router