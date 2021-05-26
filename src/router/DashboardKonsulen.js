import LaporanPasienBelumDievaluasi from "@/views/DashboardKonsulen/DashboardLaporanPasienBelumDievaluasi"
import LaporanPasienSudahDievaluasi from "@/views/DashboardKonsulen/DashboardLaporanPasienSudahDievaluasi"
import TugasPresentasiBelumDievaluasi from "@/views/DashboardKonsulen/DashboardTugasPresentasiBelumDievaluasi"
import TugasPresentasiSudahDievaluasi from "@/views/DashboardKonsulen/DashboardTugasPresentasiSudahDievaluasi"
import TugasPublikasiBelumDievaluasi from "@/views/DashboardKonsulen/DashboardTugasPublikasiBelumDievaluasi"
import TugasPublikasiSudahDievaluasi from "@/views/DashboardKonsulen/DashboardTugasPublikasiSudahDievaluasi"
import KasusSulitBelumDievaluasi from "@/views/DashboardKonsulen/DashboardKasusSulitBelumDievaluasi"
import KasusSulitSudahDievaluasi from "@/views/DashboardKonsulen/DashboardKasusSulitSudahDievaluasi"
import PenelitianAkhirBelumDievaluasi from "@/views/DashboardKonsulen/DashboardPenelitianAkhirBelumDievaluasi"
import PenelitianAkhirSudahDievaluasi from "@/views/DashboardKonsulen/DashboardPenelitianAkhirSudahDievaluasi"
import TugasPresentasiReview from "@/views/DashboardKonsulen/DashboardTugasPresentasiReview"
import TugasPublikasiReview from "@/views/DashboardKonsulen/DashboardTugasPublikasiReview"
import KasusSulitReview from "@/views/DashboardKonsulen/DashboardTugasPresentasiReview"
import PenelitianAkhirReview from "@/views/DashboardKonsulen/DashboardPenelitianAkhirReview"

let routes = [
    {
        path: '/dashboard-konsulen/laporan-pasien/belum-dievaluasi',
        name: 'LaporanPasienBelumDievaluasi',
        component: LaporanPasienBelumDievaluasi,
    },
    {
        path: '/dashboard-konsulen/laporan-pasien/sudah-dievaluasi',
        name: 'LaporanPasienSudahDievaluasi',
        component: LaporanPasienSudahDievaluasi,
    },
    {
        path: '/dashboard-konsulen/tugas-presentasi/review',
        name: 'TugasPresentasiReview',
        component: TugasPresentasiReview,
    },
    {
        path: '/dashboard-konsulen/tugas-presentasi/belum-dievaluasi',
        name: 'TugasPresentasiBelumDievaluasi',
        component: TugasPresentasiBelumDievaluasi,
    },
    {
        path: '/dashboard-konsulen/tugas-presentasi/sudah-dievaluasi',
        name: 'TugasPresentasiSudahDievaluasi',
        component: TugasPresentasiSudahDievaluasi,
    },   
    {
        path: '/dashboard-konsulen/tugas-publikasi/review',
        name: 'TugasPublikasiReview',
        component: TugasPublikasiReview,
    },
    {
        path: '/dashboard-konsulen/tugas-publikasi/belum-dievaluasi',
        name: 'TugasPublikasiBelumDievaluasi',
        component: TugasPublikasiBelumDievaluasi,
    },
    {
        path: '/dashboard-konsulen/tugas-publikasi/sudah-dievaluasi',
        name: 'TugasPublikasiSudahDievaluasi',
        component: TugasPublikasiSudahDievaluasi,
    },
    {
        path: '/dashboard-konsulen/kasus-sulit/review',
        name: 'KasusSulitReview',
        component: KasusSulitReview,
    },
    {
        path: '/dashboard-konsulen/kasus-sulit/belum-dievaluasi',
        name: 'KasusSulitBelumDievaluasi',
        component: KasusSulitBelumDievaluasi,
    },
    {
        path: '/dashboard-konsulen/kasus-sulit/sudah-dievaluasi',
        name: 'KasusSulitSudahDievaluasi',
        component: KasusSulitSudahDievaluasi,
    },
    {
        path: '/dashboard-konsulen/penelitian-akhir/review',
        name: 'PenelitianAkhirReview',
        component: PenelitianAkhirReview,
    },
    {
        path: '/dashboard-konsulen/penelitian-akhir/belum-dievaluasi',
        name: 'PenelitianAkhirBelumDievaluasi',
        component: PenelitianAkhirBelumDievaluasi,
    },
    {
        path: '/dashboard-konsulen/penelitian-akhir/sudah-dievaluasi',
        name: 'PenelitianAkhirSudahDievaluasi',
        component: PenelitianAkhirSudahDievaluasi,
    },
]

export default routes;