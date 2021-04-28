<template>
<div class="container">
    <SingleTab title="Pilih Tugas"/> 
    <div class="row">
        <ColorCard title="Tugas Presentasi" subtitle="Laporan Tugas" color="bg-success" link="/tugaspresentasiform/0" action="Buat Tugas"/>
        <ColorCard title="Pembahasan Kasus Sulit dan Multidisiplin" subtitle="Laporan Tugas" color="bg-warning" link="/kasussulitform/0" action="Buat Tugas"/>
        <ColorCard title="Tugas Publikasi" subtitle="Laporan Tugas" color="bg-primary" link="/tugaspublikasiform/0" action="Buat Tugas"/>
        <ColorCard title="Tugas Penelitian Akhir" subtitle="Laporan Tugas" color="bg-secondary" link="/tugaspenelitianakhirform/0" action="Buat Tugas"/>
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