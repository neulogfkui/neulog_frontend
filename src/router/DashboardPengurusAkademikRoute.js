import DashboardPengurusAkademikMenu from '../views/DashboardPengurusAkademik/DashboardPengurusAkademikMenu.vue'
import MenuLaporanPasien from '../views/DashboardPengurusAkademik/MenuLaporanPasien.vue'
import MenuResiden from '../views/DashboardPengurusAkademik/MenuResiden.vue'
import MenuKonsulen from '../views/DashboardPengurusAkademik/MenuKonsulen.vue'
import MenuLaporanTugas from '../views/DashboardPengurusAkademik/MenuLaporanTugas.vue'
import MenuModul from '../views/DashboardPengurusAkademik/MenuModul.vue'
import MenuTesFormatif from '../views/DashboardPengurusAkademik/MenuTesFormatif'
import DetailMenuResiden from '../views/DashboardPengurusAkademik/DetailMenuResiden.vue'
import DetailMenuKonsulen from '../views/DashboardPengurusAkademik/DetailMenuKonsulen.vue'
import DetailMenuModul from '../views/DashboardPengurusAkademik/DetailMenuModul.vue'
import DetailMenuLaporanPasien from '../views/DashboardPengurusAkademik/DetailMenuLaporanPasien.vue'
import DetailMenuTugasPresentasi from '../views/DashboardPengurusAkademik/DetailMenuTugasPresentasi.vue'
import DetailMenuTugasPublikasi from '../views/DashboardPengurusAkademik/DetailMenuTugasPublikasi.vue'
import DetailMenuTugasKasusSulit from '../views/DashboardPengurusAkademik/DetailMenuTugasKasusSulit.vue'
import DetailMenuTugasAkhir from '../views/DashboardPengurusAkademik/DetailMenuTugasAkhir.vue'


let routes = [
    {
        path: '/dashboardpengurusakademik',
        name: 'DashboardPengurusAkademik',
        component: DashboardPengurusAkademikMenu
    },
    {
        path: '/dashboardpengurusakademik/laporanpasien',
        name: 'MenuLaporanPasien',
        component: MenuLaporanPasien
      },
      {
        path: '/dashboardpengurusakademik/residen',
        name: 'MenuResiden',
        component: MenuResiden
      },
      {
        path: '/dashboardpengurusakademik/konsulen',
        name: 'MenuKonsulen',
        component: MenuKonsulen
      },
      {
        path: '/dashboardpengurusakademik/laporantugas',
        name: 'MenuLaporanTugas',
        component: MenuLaporanTugas
      },
      {
        path: '/dashboardpengurusakademik/modul',
        name: 'MenuModul',
        component: MenuModul
      },
      {
        path: '/dashboardpengurusakademik/tes-formatif',
        name: 'MenuTesFormatif',
        component: MenuTesFormatif
      },
      {
        path: '/dashboardpengurusakademik/residen/:idResiden',
        name: 'DetailMenuResiden',
        component: DetailMenuResiden
      },
      {
        path: '/dashboardpengurusakademik/konsulen/:idKonsulen',
        name: 'DetailMenuKonsulen',
        component: DetailMenuKonsulen
      },
      {
        path: '/dashboardpengurusakademik/modul/:idModul',
        name: 'DetailMenuModul',
        component: DetailMenuModul
      },
      {
        path: '/dashboardpengurusakademik/laporanpasien/:idLaporanPasien',
        name: 'DetailMenuLaporanPasien',
        component: DetailMenuLaporanPasien
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaspresentasi/:idLaporanTugas',
        name: 'DetailMenuTugasPresentasi',
        component: DetailMenuTugasPresentasi
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaspublikasi/:idLaporanTugas',
        name: 'DetailMenuTugasPublikasi',
        component: DetailMenuTugasPublikasi
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaskasussulit/:idLaporanTugas',
        name: 'DetailMenuTugasKasusSulit',
        component: DetailMenuTugasKasusSulit
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugasakhir/:idLaporanTugas',
        name: 'DetailMenuTugasAkhir',
        component: DetailMenuTugasAkhir
      }
]

export default routes;