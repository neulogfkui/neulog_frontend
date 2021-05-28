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
import TugasPresentasiDetail from "@/views/Details/TugasPresentasiDetail.vue"
import TugasPublikasiDetail from "@/views/Details/TugasPublikasiDetail.vue"
import TugasPenelitianAkhirDetail from "@/views/Details/TugasPenelitianAkhirDetail.vue"
import KasusSulitDetail from "@/views/Details/KasusSulitDetail.vue"
import MenuTugasPresentasi from '../views/DashboardPengurusAkademik/MenuTugasPresentasi.vue'
import MenuKasusSulit from '../views/DashboardPengurusAkademik/MenuKasusSulit.vue'
import MenuTugasPublikasi from '../views/DashboardPengurusAkademik/MenuTugasPublikasi.vue'
import MenuTugasAkhir from '../views/DashboardPengurusAkademik/MenuTugasAkhir.vue'
import MenuResidenOnGoing from '../views/DashboardPengurusAkademik/MenuResidenOnGoing.vue'
import MenuResidenLulus from '../views/DashboardPengurusAkademik/MenuResidenLulus.vue'
import DetailModulResiden from '../views/DashboardResiden/DetailModulResiden.vue'
import MenuKompetensi from '../views/DashboardPengurusAkademik/MenuKompetensi.vue'
import DetailMenuKompetensi from '../views/DashboardPengurusAkademik/DetailMenuKompetensi.vue'



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
      // {
      //   path: '/dashboardpengurusakademik/residen',
      //   name: 'MenuResiden',
      //   component: MenuResiden
      // },
      {
        path: '/dashboardpengurusakademik/residen/ongoing',
        name: 'MenuResidenOnGoing',
        component: MenuResidenOnGoing
      },
      {
        path: '/dashboardpengurusakademik/residen/lulus',
        name: 'MenuResidenLulus',
        component: MenuResidenLulus
      },
      {
        path: '/dashboardpengurusakademik/konsulen',
        name: 'MenuKonsulen',
        component: MenuKonsulen
      },
      // {
      //   path: '/dashboardpengurusakademik/laporantugas',
      //   name: 'MenuLaporanTugas',
      //   component: MenuLaporanTugas
      // },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaspresentasi',
        name: 'MenuTugasPresentasi',
        component: MenuTugasPresentasi
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/kasussulit',
        name: 'MenuKasusSulit',
        component: MenuKasusSulit
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugaspublikasi',
        name: 'MenuTugasPublikasi',
        component: MenuTugasPublikasi
      },
      {
        path: '/dashboardpengurusakademik/laporantugas/tugasakhir',
        name: 'MenuTugasAkhir',
        component: MenuTugasAkhir
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
        path: '/dashboardpengurusakademik/kompetensi',
        name: 'MenuKompetensi',
        component: MenuKompetensi
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
      },
      {
        path: '/dashboardpengurusakademik/kompetensi/:idKompetensi',
        name: 'DetailMenuKompetensi',
        component: DetailMenuKompetensi
      },
]

export default routes;