<template>
<div class="container">
    <SingleTab title="Daftar Dashboard"/> 
    <div class="row">
        <ColorCard title="Residen" subtitle="Dashboard" color="bg-primary" link="/dashboardpengurusakademik/residen" action="View Dashboard"/>
        <ColorCard title="Konsulen" subtitle="Dashboard" color="bg-secondary" link="/dashboardpengurusakademik/konsulen" action="View Dashboard"/>
        <ColorCard title="Modul" subtitle="Dashboard" color="bg-success" link="/dashboardpengurusakademik/modul" action="View Dashboard"/>
        <ColorCard title="Laporan Pasien" subtitle="Dashboard" color="bg-warning" link="/dashboardpengurusakademik/laporanpasien" action="View Dashboard"/>
        <ColorCard title="Laporan Tugas" subtitle="Dashboard" color="bg-info" link="/dashboardpengurusakademik/laporantugas" action="View Dashboard"/>
    </div>
</div>
    
</template>


<script>
import SingleTab from '@/components/SingleTab.vue'
import ColorCard from '@/components/ColorCard.vue'

export default {
    name: "DashboardPengurusAkademikMenu",
    components: {
        SingleTab,
        ColorCard
    }
}
</script>