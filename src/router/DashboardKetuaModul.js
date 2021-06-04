import DashboardModulBelumLulus from "@/views/DashboardKetuaModul/DashboardModulBelumLulus"
import DashboardModulSudahLulus from "@/views/DashboardKetuaModul/DashboardModulSudahLulus"

let routes = [
    {
        path: '/dashboard-ketua-modul/belum-lulus',
        name: 'DashboardModulBelumLulus',
        component: DashboardModulBelumLulus,
    },
    {
        path: '/dashboard-ketua-modul/sudah-lulus',
        name: 'DashboardModulSudahLulus',
        component: DashboardModulSudahLulus,
    },
]

export default routes;