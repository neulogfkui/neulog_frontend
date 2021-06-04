import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiDetail from '../views/Details/TugasPresentasiDetail.vue'
import TugasPublikasiDetail from '../views/Details/TugasPublikasiDetail.vue'
import KasusSulitDetail from '../views/Details/KasusSulitDetail.vue'
import TugasPenelitianAkhirDetail from '../views/Details/TugasPenelitianAkhirDetail.vue'
import DashboardResidenMenu from '../views/DashboardResiden/DashboardResidenMenu.vue'
import DashboardLaporanPasien from '../views/DashboardResiden/DashboardLaporanPasien.vue'
import DashboardTugasPresentasi from '../views/DashboardResiden/DashboardTugasPresentasi.vue'
import LaporanPasienDetail from '../views/DashboardResiden/LaporanPasienDetail.vue'

import PageNotFound from '../views/errors/404'

import LaporanPasienRoute from "@/router/LaporanPasienRoute.js" 
import ModulResidenRoute from "@/router/ModulResidenRoute.js" 
import MengelolaAkunRoute from "@/router/MengelolaAkunRoute.js"
import DashboardPengurusAkademikRoute from "@/router/DashboardPengurusAkademikRoute.js" 
import DashboardKonsulen from "@/router/DashboardKonsulen.js"
import LaporanTugasRoute from "@/router/LaporanTugasRoute.js" 
import DashboardResidenRoute from "@/router/DashboardResidenRoute.js" 
import DashboardKetuaModul from "@/router/DashboardKetuaModul.js" 
import ModulRoute from "@/router/ModulRoute.js" 
import KompetensiRoute from "@/router/KompetensiRoute.js" 

const routes = [
  ...LaporanPasienRoute,
  ...DashboardPengurusAkademikRoute,
  ...DashboardKonsulen,
  ...MengelolaAkunRoute,
  ...LaporanTugasRoute,
  ...DashboardResidenRoute,
  ...ModulRoute,
  ...KompetensiRoute,
  ...ModulResidenRoute,
  ...DashboardKetuaModul,


  //ALL
  //AUTHOR: ALL
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  //USE CASE 1
  //AUTHOR: NUR
  // --------------------------------------------
  {
    path: '/dashboardtugaspresentasi/:idResiden',
    name: 'DashboardTugasPresentasi',
    component: DashboardTugasPresentasi
  },

  {
    path: '/laporanpasiendetail/:idLaporanPasien',
    name: 'LaporanPasienDetail',
    component: LaporanPasienDetail
  },
  {
    path: '/components',
    name: 'Components',
    component: Home
  },
  {
    path: '/tugaspresentasidetail/:idLaporanTugas',
    name: 'TugasPresentasiDetail',
    component: TugasPresentasiDetail,
  },
  {
    path: '/tugaspublikasidetail/:idLaporanTugas',
    name: 'TugasPublikasiDetail',
    component: TugasPublikasiDetail,
  },
  {
    path: '/kasussulitdetail/:idLaporanTugas',
    name: 'KasusSulitDetail',
    component: KasusSulitDetail,
  },
  {
    path: '/tugaspenelitianakhirdetail/:idLaporanTugas',
    name: 'TugasPenelitianAkhirDetail',
    component: TugasPenelitianAkhirDetail,
  },

  // MISCELLANEOUS
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: PageNotFound
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
