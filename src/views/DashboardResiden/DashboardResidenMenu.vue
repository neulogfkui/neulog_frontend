<template>
    <div class='container'>
        <SingleTab title='Daftar Dashboard'></SingleTab>
        <div class='row'>
            <ColorCard subtitle='Dashboard' title='Laporan Pasien' color='bg-primary' link='/dashboardLaporanPasien' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Laporan Tugas' color='bg-secondary' link='/dashboardLaporanTugas' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Progress Test' color='bg-warning' link='/dashboardProgressTest' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Kompetensi' color='bg-danger' link='/dashboardKompetensi' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Modul' color='bg-info' link='/dashboardModul' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Jaga' color='bg-primary' link='/dashboardJaga' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Tindakan' color='bg-secondary' link='/dashboardTindakan' action='View More'></ColorCard>
        </div>
    </div>
</template>

<script>
import SingleTab from '@/components/SingleTab.vue'
import ColorCard from '@/components/ColorCard.vue'
export default {
    name: "DashboardResidenMenu",
    components: {
        SingleTab, ColorCard
    }
}
</script>