import LaporanPasienForm from "@/views/LaporanPasien/LaporanPasienForm.vue"

let routes = [
    {
        path: '/laporanpasienform/:operation',
        name: 'LaporanPasienForm',
        component: LaporanPasienForm,
    }
]

export default routes;