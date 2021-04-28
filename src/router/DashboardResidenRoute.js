import DashboardResidenMenu from "@/views/DashboardResiden/DashboardResidenMenu.vue"
import DashboardLaporanPasien from "@/views/DashboardResiden/DashboardLaporanPasien.vue"
import DetailMenuLaporanPasien from "@/views/DashboardPengurusAkademik/DetailMenuLaporanPasien.vue"
import DashboardLaporanTugas from "@/views/DashboardResiden/DashboardLaporanTugas.vue"
import DashboardTugasPresentasi from "@/views/DashboardResiden/DashboardTugasPresentasi.vue"
import DashboardPKSM from "@/views/DashboardResiden/DashboardPKSM.vue"
import DashboardPublikasi from "@/views/DashboardResiden/DashboardPublikasi.vue"
import DashboardTPA from "@/views/DashboardResiden/DashboardTPA.vue"
import KasusSulitDetail from "@/views/Details/KasusSulitDetail.vue"
import TugasPresentasiDetail from "@/views/Details/TugasPresentasiDetail.vue"
import TugasPublikasiDetail from "@/views/Details/TugasPublikasiDetail.vue"
import TugasPenelitianAkhirDetail from "@/views/Details/TugasPenelitianAkhirDetail.vue"
import DashboardJaga from "@/views/DashboardResiden/DashboardJaga.vue"
import DashboardProgressTest from "@/views/DashboardResiden/DashboardProgressTest.vue"
import DashboardModul from "@/views/DashboardResiden/DashboardModul.vue"

let routes = [{
        path: '/dashboardresiden',
        name: 'DashboardResidenMenu',
        component: DashboardResidenMenu
    }, {
        path: '/dashboardjaga/:idResiden',
        name: 'DashboardJaga',
        component: DashboardJaga
    },
    {
        path: '/dashboardprogresstest/:idResiden',
        name: 'DashboardProgressTest',
        component: DashboardProgressTest
    },
    {
        path: '/dashboardmodul/:idResiden',
        name: 'DashboardModul',
        component: DashboardModul
    },
    {
        path: '/dashboardlaporanpasien/:idResiden',
        name: 'DashboardLaporanPasien',
        component: DashboardLaporanPasien
    },
    {
        path: '/dashboardlaporantugas/:idResiden',
        name: 'DashboardLaporanTugas',
        component: DashboardLaporanTugas
    },
    // CHILD TUGAS
    {
        path: '/dashboardtugaspresentasi/:idResiden',
        name: 'DashboardTugasPresentasi',
        component: DashboardTugasPresentasi
    },
    {
        path: '/dashboardpksm/:idResiden',
        name: 'DashboardPKSM',
        component: DashboardPKSM
    },
    {
        path: '/dashboardtugaspublikasi/:idResiden',
        name: 'DashboardPublikasi',
        component: DashboardPublikasi
    },
    {
        path: '/dashboardtpa/:idResiden',
        name: 'DashboardTPA',
        component: DashboardTPA
    },
    // DETAIL TUGAS
    {
        path: '/detailtugas/tugaspresentasi/:idLaporanTugas',
        name: 'TugasPresentasiDetail_Residen',
        component: TugasPresentasiDetail
    },
    {
        path: '/detailtugas/pksm/:idLaporanTugas',
        name: 'KasusSulitDetail_Residen',
        component: KasusSulitDetail
    },
    {
        path: '/detailtugas/tugaspublikasi/:idLaporanTugas',
        name: 'TugasPublikasiDetail_Residen',
        component: TugasPublikasiDetail
    },
    {
        path: '/detailtugas/tpa/:idLaporanTugas',
        name: 'TugasPenelitianAkhirDetail_Residen',
        component: TugasPenelitianAkhirDetail
    },
    // END OF CHILD TUGAS
    {
        path: '/laporanpasiendetail/:idLaporanPasien',
        name: 'DetailMenuLaporanPasien_Residen',
        component: DetailMenuLaporanPasien
    },
]

export default routes;