import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wait from '../views/Wait.vue'
import Click from '../views/Click.vue'
import Result from '../views/Result.vue'

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
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router
