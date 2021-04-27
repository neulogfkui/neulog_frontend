import LaporanPasienForm from "@/views/LaporanPasien/LaporanPasienForm.vue"

let routes = [
    {
        path: '/laporanpasienform/:idResiden',
        name: 'LaporanPasienForm',
        component: LaporanPasienForm,
    }
]

export default routes;