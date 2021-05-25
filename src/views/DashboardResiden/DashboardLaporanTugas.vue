<template>
  <MainHeader
    title="Dashboard Laporan Tugas"
    :subtitle="this.subtitle"
    icon="file-text"
    :withLogo="false"
  />
  <div class="container" v-if="getReady">
    <div class="row upper justify-content-center">
      <PieChart
        keterangan="Laporan Pasien"
        :persentase="this.persentase"
        :total="this.createdLaporanTugas"
        :label="this.label"
        :data="this.jumlah"
        title="Sebaran Status Laporan Tugas"
      >
      </PieChart>
      <BigNumberCard
        title="Rata - Rata Laporan Tugas Per Bulan"
        :count="avgTugasPerMonth"
        caption="Tugas / Bulan"
      />
    </div>

    <div class="container">
      <SingleTab title="Daftar Tugas"></SingleTab>
      <div class="row">
        <ColorCard
          title="Tugas Presentasi"
          subtitle="Laporan Tugas"
          color="bg-success"
          :link="'/dashboardtugaspresentasi/' + this.$route.params.idResiden"
          action="View More"
        ></ColorCard>
        <ColorCard
          title="Pembahasan Kasus Sulit dan MultiDisiplin"
          subtitle="Laporan Tugas"
          color="bg-warning"
          :link="'/dashboardpksm/' + this.$route.params.idResiden"
          action="View More"
        ></ColorCard>
        <ColorCard
          title="Publikasi"
          subtitle="Laporan Tugas"
          color="bg-primary"
          :link="'/dashboardtugaspublikasi/' + this.$route.params.idResiden"
          action="View More"
        ></ColorCard>
        <ColorCard
          title="Tugas Penelitian Akhir"
          subtitle="Laporan Tugas"
          color="bg-secondary"
          :link="'/dashboardtpa/' + this.$route.params.idResiden"
          action="View More"
        ></ColorCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleTab from "@/components/SingleTab.vue";
import ColorCard from "@/components/ColorCard.vue";
import MainHeader from "@/components/MainHeader.vue";
import PieChart from "@/components/PieChart.vue";
import BigNumberCard from "@/components/BigNumberCard.vue";
export default {
  name: "DashboardLaporanTugas",
  components: {
    SingleTab,
    ColorCard,
    MainHeader, PieChart, BigNumberCard
  },
  data() {
    return {
      createdLaporanTugas: Number,
      label: Array,
      jumlah: Array,
      listLaporanTugas: Array,
      persentase: Number,
      residen: null,
      subtitle: null,
      ready: false,
      avgTugasPerMonth: null,
    };
  },
  computed: {
      getReady(){
          return this.ready;
      }
  },
  mounted() {
    axios
      .get(
        "http://localhost:8000/api/dashboardResiden/laporanTugas/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.warn(resp.data);
        this.createdLaporanTugas = resp.data.createdLaporanTugas;
        this.label = resp.data.label;
        this.jumlah = resp.data.jumlah;
        this.listLaporanTugas = resp.data.listLaporanTugas;
        this.persentase = resp.data.persentase;
        this.residen = resp.data.residen;
        this.avgTugasPerMonth = resp.data.avgTugasPerMonth;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.ready = true;
      });
  },
};
</script>