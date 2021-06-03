import ModulResidenForm from "@/views/ModulResiden/ModulResidenForm.vue"
import ModulResidenDetail from "@/views/Details/ModulResidenDetail.vue"
import EvaluasiModulResiden from "@/views/Evaluasi/EvaluasiModulResiden.vue"

let routes = [
    {
        path: '/modulresidenform/:operation',
        name: 'ModulResidenForm',
        component: ModulResidenForm,
    },
    {
        path: '/modulresidendetail/:idModulResiden',
        name: 'ModulResidenDetail',
        component: ModulResidenDetail,
    },
    {
        path: '/evaluasimodulresiden/:idModulResiden',
        name: 'EvaluasiModulResiden',
        component: EvaluasiModulResiden,
    }
]

export default routes;