import LaporanPasienForm from "@/views/LaporanPasien/LaporanPasienForm.vue"
import EvaluasiLaporanPasien from "@/views/Evaluasi/EvaluasiLaporanPasien.vue"

let routes = [
    {
        path: '/laporanpasienform/:operation',
        name: 'LaporanPasienForm',
        component: LaporanPasienForm,
    },
    {
        path: '/evaluasilaporanpasien/:idLaporanPasien',
        name: 'EvaluasiLaporanPasien',
        component: EvaluasiLaporanPasien,
    }
]

export default routes;