import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Layout from '../views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/layout',
    component: Layout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
