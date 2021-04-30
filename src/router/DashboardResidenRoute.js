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
import DetailModulResiden from "@/views/DashboardResiden/DetailModulResiden.vue"
import DashboardTindakan from "@/views/DashboardResiden/DashboardTindakan.vue"
import DashboardKompetensi from "@/views/DashboardResiden/DashboardKompetensi.vue"
import DetailKompetensi from "@/views/DashboardResiden/DetailKompetensi.vue"
import DetailTindakan from "@/views/DashboardResiden/DetailTindakan.vue"


let routes = [{
        path: '/dashboardresiden/:idResiden',
        name: 'DashboardResidenMenu',
        component: DashboardResidenMenu
    },
    // DASHBOARD JAGA
    {
        path: '/dashboardjaga/:idResiden',
        name: 'DashboardJaga',
        component: DashboardJaga
    },
    // DASHBOARD PROGRESS TEST
    {
        path: '/dashboardprogresstest/:idResiden',
        name: 'DashboardProgressTest',
        component: DashboardProgressTest
    },
    // LAPORAN PASIEN
    {
        path: '/dashboardlaporanpasien/:idResiden',
        name: 'DashboardLaporanPasien',
        component: DashboardLaporanPasien
    },
    //LAPORAN TUGAS
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
    // MODUL
    {
        path: '/dashboardmodul/:idResiden',
        name: 'DashboardModul',
        component: DashboardModul
    },
    {
        path: '/detailmodulresiden/:idModulResiden',
        name: 'DetailModulResiden_Residen',
        component: DetailModulResiden
    },
    // TINDAKAN
    {
        path: '/dashboardtindakan/:idResiden',
        name: 'DashboardTindakan',
        component: DashboardTindakan
    },
    {
        path: '/detailtindakan/:idKategoriTindakan/:idResiden',
        name: 'DetailTindakan',
        component: DetailTindakan
    },
    // KOMPETENSI
    {
        path: '/dashboardkompetensi/:idResiden',
        name: 'DashboardKompetensi',
        component: DashboardKompetensi
    },
    {
        path: '/detailkompetensi/:idKompetensiLaporan',
        name: 'DetailKompetensi',
        component: DetailKompetensi
    },
]

export default routes;