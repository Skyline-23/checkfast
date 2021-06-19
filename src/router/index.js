import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wait from '../views/Wait.vue'
import Click from '../views/Click.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wait',
    name: 'Wait',
    component: Wait
  },
  {
    path: '/click',
    name: 'Click',
    component: Click
  }
]

const router = new VueRouter({
  routes
})

export default router
