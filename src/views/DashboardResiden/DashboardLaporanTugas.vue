<template>
    <h4>{{createdLaporanTugas}}</h4>
    <h4>{{persentase}}</h4>
    <h4 v-for="a in label" v-bind:key="a.id">{{a}}</h4>
    <h4 v-for="a in jumlah" v-bind:key="a.id">{{a}}</h4>
    <div class='container'>
        <SingleTab title='Daftar Tugas'></SingleTab>
        <div class='row'>
            <ColorCard title='Tugas Presentasi' subtitle="Laporan Tugas" color='bg-success' link='/dashboardLaporanTugas/TugasPresentasi' action='View More'></ColorCard>
            <ColorCard title='Pembahasan Kasus Sulit dan MultiDisiplin' subtitle="Laporan Tugas" color='bg-warning' link='/dashboardLaporanTugas/PKSM' action='View More'></ColorCard>
            <ColorCard title='Publikasi' subtitle="Laporan Tugas" color='bg-primary' link='/dashboardLaporanTugas/Publikasi' action='View More'></ColorCard>
            <ColorCard title='Tugas Penelitian Akhir' subtitle="Laporan Tugas" color='bg-secondary' link='/dashboardLaporanTugas/TPA' action='View More'></ColorCard>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import SingleTab from '@/components/SingleTab.vue'
import ColorCard from '@/components/ColorCard.vue'
export default {
    name: "DashboardLaporanTugas",
    components: {
        SingleTab, ColorCard
    },
    data() {
        return {
            createdLaporanTugas: Number,
            label: Array,
            jumlah: Array,
            listLaporanTugas: Array,
            persentase: Number
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/dashboardResiden/laporanTugas")
            .then((resp) => {
            console.warn(resp.data);
            this.createdLaporanTugas = resp.data.createdLaporanTugas;
            this.label = resp.data.label;
            this.jumlah = resp.data.jumlah;
            this.listLaporanTugas = resp.data.listLaporanTugas;
            this.persentase = resp.data.persentase;
        });
    }
}
</script>