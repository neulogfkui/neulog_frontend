import DashboardResidenMenu from '@/views/DashboardResiden/DashboardResidenMenu.vue'

import DashboardLaporanPasien from '@/views/DashboardResiden/DashboardLaporanPasien.vue'
import LaporanPasienDetail from '@/views/DashboardResiden/LaporanPasienDetail.vue'

import DashboardLaporanTugas from '@/views/DashboardResiden/DashboardLaporanTugas.vue'
import DashboardTugasPresentasi from '@/views/DashboardResiden/DashboardTugasPresentasi.vue'
import DashboardPKSM from '@/views/DashboardResiden/DashboardPKSM.vue'
import DashboardPublikasi from '@/views/DashboardResiden/DashboardPublikasi.vue'
import DashboardTPA from '@/views/DashboardResiden/DashboardTPA.vue'

import DashboardProgressTest from '@/views/DashboardResiden/DashboardProgressTest.vue'

import DashboardKompetensi from '@/views/DashboardResiden/DashboardKompetensi.vue'
import KompetensiDetail from '@/views/DashboardResiden/KompetensiDetail.vue'

import DashboardModul from '@/views/DashboardResiden/DashboardModul.vue'
import ModulDetail from '@/views/DashboardResiden/ModulDetail.vue'

import DashboardTindakan from '@/views/DashboardResiden/DashboardTindakan.vue'
import TindakanDetail from '@/views/DashboardResiden/TindakanDetail.vue'

import DashboardJaga from '@/views/DashboardResiden/DashboardJaga.vue'

let routes = [
    {
    path: '/dashboardresidenmenu/:idResiden',
    name: 'DashboardResidenMenu',
    component: DashboardResidenMenu
    },
    {
    path: '/dashboardlaporanpasien/:idResiden',
    name: 'DashboardLaporanPasien',
    component: DashboardLaporanPasien
    },
    {
    path: '/laporanpasiendetail/:idLaporanPasien',
    name: 'LaporanPasienDetail',
    component: LaporanPasienDetail
    },
    {
    path: '/dashboardlaporantugas/:idResiden',
    name: 'DashboardLaporanTugas',
    component: DashboardLaporanTugas
    },
    {
    path: '/dashboardtugaspresentasi/:idResiden',
    name: 'DashboardTugasPresentasi',
    component: DashboardTugasPresentasi
    },
    {
    path: '/dashboardPKSM/:idResiden',
    name: 'DashboardPKSM',
    component: DashboardPKSM
    },
    {
    path: '/dashboardpublikasi/:idResiden',
    name: 'DashboardPublikasi',
    component: DashboardPublikasi
    },
    {
    path: '/dashboardTPA/:idResiden',
    name: 'DashboardTPA',
    component: DashboardTPA
    },
    {
    path: '/dashboardprogresstest/:idResiden',
    name: 'DashboardProgressTest',
    component: DashboardProgressTest
    },
    {
    path: '/dashboardkompetensi/:idResiden',
    name: 'DashboardKompetensi',
    component: DashboardKompetensi
    },
    {
    path: '/kompetensidetail/:idKompetensi',
    name: 'KompetensiDetail',
    component: KompetensiDetail
    },
    {
    path: '/dashboardmodul/:idResiden',
    name: 'DashboardModul',
    component: DashboardModul
    },
    {
    path: '/moduldetail/:idModulResiden',
    name: 'ModulDetail',
    component: ModulDetail
    },
    {
    path: '/dashboardjaga/:idResiden',
    name: 'DashboardJaga',
    component: DashboardJaga
    },
    {
    path: '/dashboardtindakan/:idResiden',
    name: 'DashboardTindakan',
    component: DashboardTindakan
    },
    {
    path: '/tindakandetail/:idTindakan',
    name: 'TindakanDetail',
    component: TindakanDetail
    },
]

export default routes;