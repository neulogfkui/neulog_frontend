import DashboardModulLulus from "@/views/DashboardKetuaModul/DashboardModulLulus.vue"
import DashboardModulOngoing from "@/views/DashboardKetuaModul/DashboardModulOngoing.vue"
import DetailModulResidenKetua from "@/views/DashboardKetuaModul/DetailModulResidenKetua.vue"
import FeedbackKelulusanForm from "@/views/DashboardKetuaModul/FeedbackKelulusanForm.vue"

let routes = [
// DASHBOARD MODUL LULUS
{
    path: '/dashboardmodullulus/:idModul',
    name: 'DashboardModulLulus',
    component: DashboardModulLulus
},
// DASHBOARD MODUL ONGOING
{
    path: '/dashboardmodulongoing/:idModul',
    name: 'DashboardModulOngoing',
    component: DashboardModulOngoing
},
// DETAIL MODUL RESIDEN
{
    path: '/detailmodulresidenketua/:idModulResiden',
    name: 'DetailModulResidenKetua',
    component: DetailModulResidenKetua
},
// FEEDBACK KELULUSAN FORM
{
    path: '/feedbackkelulusanform/:idModulResiden',
    name: 'FeedbackKelulusanForm',
    component: FeedbackKelulusanForm
},
]
export default routes;