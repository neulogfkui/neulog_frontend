<template>
<MainHeader
    title= "Dashboard Pengurus Akademik"
    :subtitle="this.subtitle"
    isSmall="true"
    icon= "home">
</MainHeader>
<div class="container">
    <SingleTab title="Daftar Dashboard"/>
    <div class="row">
        <ColorCard title="Residen" subtitle="Dashboard" color="bg-primary" link="/dashboardpengurusakademik/residen/ongoing" action="View Dashboard" icon="user"/>
        <ColorCard title="Konsulen" subtitle="Dashboard" color="bg-secondary" link="/dashboardpengurusakademik/konsulen" action="View Dashboard" icon="users"/>
        <ColorCard title="Laporan Pasien" subtitle="Dashboard" color="bg-warning" link="/dashboardpengurusakademik/laporanpasien" action="View Dashboard" icon="file-text"/>
        <ColorCard title="Laporan Tugas" subtitle="Dashboard" color="bg-info" link="/dashboardpengurusakademik/laporantugas/tugaspresentasi" action="View Dashboard" icon="book-open"/>
        <ColorCard title="Modul" subtitle="Dashboard" color="bg-success" link="/dashboardpengurusakademik/modul" action="View Dashboard" icon="briefcase"/>
        <ColorCard title="Kompetensi" subtitle="Dashboard" color="bg-primary" link="/dashboardpengurusakademik/kompetensi" action="View Dashboard" icon="trending-up"/>
        <ColorCard title="Tes Formatif" subtitle="Dashboard" color="bg-secondary" link="/dashboardpengurusakademik/tes-formatif" action="View Dashboard" icon="edit"/>
    </div>
</div>
    
</template>


<script>
import MainHeader from "@/components/MainHeader.vue";
import SingleTab from '@/components/SingleTab.vue';
import ColorCard from '@/components/ColorCard.vue';
import { computed } from 'vue';
import loadScript from '@/js/scripts.js';

export default {
    name: "DashboardPengurusAkademikMenu",
    components: {
        MainHeader,
        SingleTab,
        ColorCard
    },
    data() {
        return {
            subtitle: String,
        };
    },
    computed:{
        getnamaPA(){
            return JSON.parse(localStorage.getItem("userData")).pengurusAkademik.pengguna.name;
        }
    },
    mounted(){
        this.subtitle = this.getnamaPA
        loadScript();
    }
}
</script>