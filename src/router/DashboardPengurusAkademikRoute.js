import DashboardPengurusAkademikMenu from '../views/DashboardPengurusAkademik/DashboardPengurusAkademikMenu.vue'
import MenuLaporanPasien from '../views/DashboardPengurusAkademik/MenuLaporanPasien.vue'
import MenuResiden from '../views/DashboardPengurusAkademik/MenuResiden.vue'
import MenuKonsulen from '../views/DashboardPengurusAkademik/MenuKonsulen.vue'
import MenuLaporanTugas from '../views/DashboardPengurusAkademik/MenuLaporanTugas.vue'
import MenuModul from '../views/DashboardPengurusAkademik/MenuModul.vue'
import DetailMenuResiden from '../views/DashboardPengurusAkademik/DetailMenuResiden.vue'
import DetailMenuKonsulen from '../views/DashboardPengurusAkademik/DetailMenuKonsulen.vue'
import DetailMenuModul from '../views/DashboardPengurusAkademik/DetailMenuModul.vue'
import DetailMenuLaporanPasien from '../views/DashboardPengurusAkademik/DetailMenuLaporanPasien.vue'
import TugasPresentasiDetail from "@/views/Details/TugasPresentasiDetail.vue"
import TugasPublikasiDetail from "@/views/Details/TugasPublikasiDetail.vue"
import TugasPenelitianAkhirDetail from "@/views/Details/TugasPenelitianAkhirDetail.vue"
import KasusSulitDetail from "@/views/Details/KasusSulitDetail.vue"


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
        component: TugasPresentasiDetail
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaspublikasi/:idLaporanTugas',
        name: 'DetailMenuTugasPublikasi',
        component: TugasPublikasiDetail
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaskasussulit/:idLaporanTugas',
        name: 'DetailMenuTugasKasusSulit',
        component: KasusSulitDetail
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugasakhir/:idLaporanTugas',
        name: 'DetailMenuTugasAkhir',
        component: TugasPenelitianAkhirDetail
      }
]

export default routes;