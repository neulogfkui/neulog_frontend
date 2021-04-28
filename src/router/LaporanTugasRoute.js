import TugasPresentasiForm from '@/views/LaporanTugas/TugasPresentasiForm.vue'
import KasusSulitForm from '@/views/LaporanTugas/KasusSulitForm.vue'
import TugasPublikasiForm from '@/views/LaporanTugas/TugasPublikasiForm.vue'
import TugasPenelitianAkhirForm from '@/views/LaporanTugas/TugasPenelitianAkhirForm.vue'
import LaporanTugasChoice from '@/views/LaporanTugas/LaporanTugasChoice.vue'


let routes = [
    {
        path: '/tugaspresentasiform/:operation',
        name: 'TugasPresentasiForm',
        component: TugasPresentasiForm,
      },
      {
        path: '/kasussulitform/:operation',
        name: 'KasusSulitForm',
        component: KasusSulitForm
      },
      {
        path: '/tugaspublikasiform/:operation',
        name: 'tugasPublikasiForm',
        component: TugasPublikasiForm
      },
      {
        path: '/tugaspenelitianakhirform/:operation',
        name: 'tugasPenelitianAkhirForm',
        component: TugasPenelitianAkhirForm
      },
      {
        path: '/addlaporantugas',
        name: 'laporanTugasChoice',
        component: LaporanTugasChoice
      },
]

export default routes;