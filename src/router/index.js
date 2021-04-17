import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiForm from '../views/TugasPresentasiForm.vue'

const routes = [
  //USE CASE 1
  {
    path: '/',
    name: 'Home',
    component: HomeResiden
  },
  {
    path: '/components',
    name: 'Components',
    component: Home
  },
  {
    path: '/tugaspresentasiform',
    name: 'TugasPresentasiForm',
    component: TugasPresentasiForm
  },
  //USE CASE 2
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
