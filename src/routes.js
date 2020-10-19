import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/components/sign-in/index.vue'),
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/components/chart/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
