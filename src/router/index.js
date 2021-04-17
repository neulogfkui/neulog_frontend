import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiForm from '../views/TugasPresentasiForm.vue'
import KasusSulitForm from '../views/KasusSulitForm.vue'
import TugasPublikasiForm from '../views/TugasPublikasiForm.vue'
import TugasPenelitianAkhirForm from '../views/TugasPenelitianAkhirForm.vue'
import LaporanTugasChoice from '../views/LaporanTugasChoice.vue'

const routes = [
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
  {
    path: '/kasussulitform',
    name: 'KasusSulitForm',
    component: KasusSulitForm
  },
  {
    path: '/tugaspublikasiform',
    name: 'tugasPublikasiForm',
    component: TugasPublikasiForm
  },
  {
    path: '/tugaspenelitianakhirform',
    name: 'tugasPenelitianAkhirForm',
    component: TugasPenelitianAkhirForm
  },
  {
    path: '/addlaporantugas',
    name: 'laporanTugasChoice',
    component: LaporanTugasChoice
  },
  {
    path: '/addlaporantugas',
    name: 'laporanTugasChoice',
    component: LaporanTugasChoice
  },
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
