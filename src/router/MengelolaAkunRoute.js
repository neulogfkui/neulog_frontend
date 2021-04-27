import MengelolaAkunResiden from '../views/mengelolaAkun/MengelolaAkunResiden.vue'
import MengelolaAkunStaff from '../views/mengelolaAkun/MengelolaAkunStaff.vue'
import ResidenRegister from '../views/mengelolaAkun/ResidenRegister.vue'
import ViewResiden from '../views/mengelolaAkun/ViewResiden.vue'
import StaffRegister from '../views/mengelolaAkun/StaffRegister.vue'
import ViewStaff from '../views/mengelolaAkun/ViewStaff.vue'
import UpdateResiden from '../views/mengelolaAkun/UpdateResiden.vue'
import UpdateStaff from '../views/mengelolaAkun/UpdateStaff.vue'

let routes = [
    {
        path: '/mengelola-akun',
        name: 'MengelolaAkun',
        component: MengelolaAkunResiden,
      },
      {
        path: '/mengelola-akun/residen',
        name: 'MengelolaAkunResiden',
        component: MengelolaAkunResiden,
      },
      {
        path: '/mengelola-akun/staff',
        name: 'MengelolaAkunStaff',
        component: MengelolaAkunStaff,
      },
      {
        path: '/mengelola-akun/view-residen/:idResiden',
        name: 'ViewResiden',
        component: ViewResiden,
      },
      {
        path: '/mengelola-akun/view-staff/:username',
        name: 'ViewStaff',
        component: ViewStaff,
      },
      {
        path: '/mengelola-akun/residen-register',
        name: 'ResidenRegister',
        component: ResidenRegister,
      },
      {
        path: '/mengelola-akun/staff-register',
        name: 'StaffRegister',
        component: StaffRegister,
      },
      {
        path: '/mengelola-akun/residen-update/:idResiden',
        name: 'UpdateResiden',
        component: UpdateResiden,
      },
      {
        path: '/mengelola-akun/staff-update/:username',
        name: 'UpdateStaff',
        component: UpdateStaff,
      },
]

export default routes;