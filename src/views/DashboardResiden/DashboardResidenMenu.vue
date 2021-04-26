<template>
    <div class='container'>
        <SingleTab title='Daftar Dashboard'></SingleTab>
        <div class='row justify-content-center'>
            <ColorCard subtitle='Dashboard' title='Laporan Pasien' color='bg-primary' link='/dashboardlaporanpasien/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Laporan Tugas' color='bg-secondary' link='/dashboardlaporantugas/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Progress Test' color='bg-warning' link='/dashboardprogresstest/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Kompetensi' color='bg-danger' link='/dashboardkompetensi/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Modul' color='bg-info' link='/dashboardmodul/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Jaga' color='bg-primary' link='/dashboardjaga/1' action='View More'></ColorCard>
            <ColorCard subtitle='Dashboard' title='Tindakan' color='bg-secondary' link='/dashboardtindakan/1' action='View More'></ColorCard>
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