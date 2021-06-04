<template>
<LightHeader
    title="Tambah Laporan Tugas"
    icon="file-text"
    :subtitle="subtitleHeader"
  />
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
import LightHeader from "@/components/LightHeader.vue";
import loadScript from "@/js/scripts.js";

export default {
    name: "LaporanTugasChoice",
     data(){
        return {
            subtitleHeader:
        JSON.parse(localStorage.getItem("userData")).name +
        " - " +
        JSON.parse(localStorage.getItem("userData")).residen.npm,
        }
    },
    components: {
        SingleTab,
        ColorCard, 
        LightHeader,
    }
   

}
</script>