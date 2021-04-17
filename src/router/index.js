import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiForm from '../views/TugasPresentasiForm.vue'
import KasusSulitForm from '../views/KasusSulitForm.vue'
import TugasPublikasiForm from '../views/TugasPublikasiForm.vue'
import TugasPenelitianAkhirForm from '../views/TugasPenelitianAkhirForm.vue'
import LaporanTugasChoice from '../views/LaporanTugasChoice.vue'
import DashboardPengurusAkademikMenu from '../views/DashboardPengurusAkademik/DashboardPengurusAkademikMenu.vue'

import DashboardResidenMenu from '../views/DashboardResiden/DashboardResidenMenu.vue'
import DashboardLaporanPasien from '../views/DashboardResiden/DashboardLaporanPasien.vue'

import DashboardLaporanTugas from '../views/DashboardResiden/DashboardLaporanTugas.vue'
import DashboardTugasPresentasi from '../views/DashboardResiden/DashboardTugasPresentasi.vue'
import DashboardPKSM from '../views/DashboardResiden/DashboardPKSM.vue'
import DashboardPublikasi from '../views/DashboardResiden/DashboardPublikasi.vue'
import DashboardTPA from '../views/DashboardResiden/DashboardTPA.vue'

import DashboardProgressTest from '../views/DashboardResiden/DashboardProgressTest.vue'
import DashboardKompetensi from '../views/DashboardResiden/DashboardKompetensi.vue'
import DashboardModul from '../views/DashboardResiden/DashboardModul.vue'
import DashboardTindakan from '../views/DashboardResiden/DashboardTindakan.vue'
import DashboardJaga from '../views/DashboardResiden/DashboardJaga.vue'

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/dashboardPengurusAkademik',
    name: 'dashboardPengurusAkademik',
    component: DashboardPengurusAkademikMenu
  },
  {
    path: '/dashboardResidenMenu',
    name: 'DashboardResidenMenu',
    component: DashboardResidenMenu
  },
  {
    path: '/dashboardLaporanPasien',
    name: 'DashboardLaporanPasien',
    component: DashboardLaporanPasien
  },
  {
    path: '/dashboardLaporanTugas',
    name: 'DashboardLaporanTugas',
    component: DashboardLaporanTugas
  },
  {
    path: '/dashboardLaporanTugas/TugasPresentasi',
    name: 'DashboardTugasPresentasi',
    component: DashboardTugasPresentasi
  },
  {
    path: '/dashboardLaporanTugas/PKSM',
    name: 'DashboardPKSM',
    component: DashboardPKSM
  },
  {
    path: '/dashboardLaporanTugas/Publikasi',
    name: 'DashboardPublikasi',
    component: DashboardPublikasi
  },
  {
    path: '/dashboardLaporanTugas/TPA',
    name: 'DashboardTPA',
    component: DashboardTPA
  },
  {
    path: '/dashboardProgressTest',
    name: 'DashboardProgressTest',
    component: DashboardProgressTest
  },
  {
    path: '/dashboardKompetensi',
    name: 'DashboardKompetensi',
    component: DashboardKompetensi
  },
  {
    path: '/dashboardModul',
    name: 'DashboardModul',
    component: DashboardModul
  },
  {
    path: '/dashboardTindakan',
    name: 'DashboardTindakan',
    component: DashboardTindakan
  },
  {
    path: '/dashboardJaga',
    name: 'DashboardJaga',
    component: DashboardJaga
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
