<template>
    <MainHeader/>
    <div class="container">
        <div class="row upper justify-content-center">
            <PieChart
                v-if="isMounted"
                keterangan="Laporan Tugas Dibuat"
                :persentase="this.persentase"
                :total="this.createdLaporanTugas"
                :label="this.label"
                :data="this.jumlah"
                title="Sebaran Status Laporan Tugas"
            />
        </div>
    </div>
    <div class='container'>
        <SingleTab title='Daftar Tugas'></SingleTab>
        <div class='row'>
            <ColorCard title='Tugas Presentasi' subtitle="Laporan Tugas" color='bg-success' link='/dashboardtugaspresentasi/1' action='View More'></ColorCard>
            <ColorCard title='Pembahasan Kasus Sulit dan MultiDisiplin' subtitle="Laporan Tugas" color='bg-warning' link='/dashboardPKSM/1' action='View More'></ColorCard>
            <ColorCard title='Publikasi' subtitle="Laporan Tugas" color='bg-primary' link='/dashboardpublikasi/1' action='View More'></ColorCard>
            <ColorCard title='Tugas Penelitian Akhir' subtitle="Laporan Tugas" color='bg-secondary' link='/dashboardTPA/1' action='View More'></ColorCard>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import SingleTab from '@/components/SingleTab.vue'
import ColorCard from '@/components/ColorCard.vue'
import MainHeader from "@/components/MainHeader.vue";
import PieChart from "@/components/PieChart.vue";
import BigNumberCard from "@/components/BigNumberCard.vue";
import BarChart from "@/components/BarChart.vue";

export default {
    name: "DashboardLaporanTugas",
    components: {
        SingleTab, ColorCard, MainHeader, PieChart, BigNumberCard, BarChart
    },
    data() {
        return {
            createdLaporanTugas: Number,
            label: Array,
            jumlah: Array,
            listLaporanTugas: Array,
            persentase: Number,
            isMounted: false
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/dashboardResiden/laporanTugas/1")
            .then((resp) => {
            console.warn(resp.data);
            this.createdLaporanTugas = resp.data.createdLaporanTugas;
            this.label = resp.data.label;
            this.jumlah = resp.data.jumlah;
            this.listLaporanTugas = resp.data.listLaporanTugas;
            this.persentase = resp.data.persentase;
            this.isMounted = true;
        });
    }
}
</script>