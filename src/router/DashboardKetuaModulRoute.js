import DashboardModulLulus from "@/views/DashboardKetuaModul/DashboardModulLulus.vue"
import DashboardModulOngoing from "@/views/DashboardKetuaModul/DashboardModulOngoing.vue"
import DetailModulResiden from "@/views/DashboardKetuaModul/DetailModulResiden.vue"

let routes = [{
    path: '/dashboardketuamodul/:idKetuaModul',
    name: 'DashboardKetuaModul',
    component: DashboardKetuaModul
},
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
    path: '/detailmodulresiden/:idModulResiden',
    name: 'DetailModulResiden',
    component: DetailModulResiden
},
]
export default routes;