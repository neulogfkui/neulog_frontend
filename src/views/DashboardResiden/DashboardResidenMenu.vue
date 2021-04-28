<template>
  <MainHeader
    title="Dashboard Residen"
    :subtitle="subtitleHeader"
    icon="trello"
    isSmall="true"
  ></MainHeader>
  <div class="container">
    <SingleTab title="Daftar Dashboard"></SingleTab>
    <div class="row">
      <ColorCard
        subtitle="Dashboard"
        title="Laporan Pasien"
        color="bg-primary"
        :link="'/dashboardlaporanpasien/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Laporan Tugas"
        color="bg-secondary"
        :link="'/dashboardlaporantugas/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Progress Test"
        color="bg-warning"
        :link="'/dashboardprogresstest/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Kompetensi"
        color="bg-danger"
        :link="'/dashboardkompetensi/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Modul"
        color="bg-info"
        :link="'/dashboardmodul/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Jaga"
        color="bg-primary"
        :link="'/dashboardjaga/' + this.idResiden"
        action="View More"
      ></ColorCard>
      <ColorCard
        subtitle="Dashboard"
        title="Tindakan"
        color="bg-secondary"
        :link="'/dashboardtindakan/' + this.idResiden"
        action="View More"
      ></ColorCard>
    </div>
  </div>
</template>

<script>
import SingleTab from "@/components/SingleTab.vue";
import ColorCard from "@/components/ColorCard.vue";
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: "DashboardResidenMenu",
  data() {
    return {
      subtitleHeader:
        JSON.parse(localStorage.getItem("userData")).name +
        " - " +
        JSON.parse(localStorage.getItem("userData")).residen.npm,
        idResiden: JSON.parse(localStorage.getItem("userData")).residen.idResiden,
    };
  },
  components: {
    SingleTab,
    ColorCard,
    MainHeader,
  },
};
</script>