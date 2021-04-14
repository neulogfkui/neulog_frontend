<template>
<div class="container">
    <SingleTab title="Pilih Tugas"/> 
    <div class="row">
        <ColorCard title="Tugas Presentasi" subtitle="Laporan Tugas" color="bg-success" link="/tugaspresentasiform"/>
        <ColorCard title="Pembahasan Kasus Sulit dan Multidisiplin" subtitle="Laporan Tugas" color="bg-warning" link="/kasussulitform"/>
        <ColorCard title="Tugas Publikasi" subtitle="Laporan Tugas" color="bg-primary" link="/tugaspublikasiform"/>
        <ColorCard title="Tugas Penelitian Akhir" subtitle="Laporan Tugas" color="bg-secondary" link="/tugaspenelitianakhirform"/>
    </div>
</div>
    
</template>


<script>
import SingleTab from '@/components/SingleTab.vue'
import ColorCard from '@/components/ColorCard.vue'

export default {
    name: "LaporanTugasChoice",
    components: {
        SingleTab,
        ColorCard
    }
}
</script>