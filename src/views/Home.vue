<template>
  <MainHeader
    icon="home"
    :title="title"
    subtitle="Neulog - Departemen Neurologi FKUI - RSCM"
  />
  <div class="number-card-container container mt-n10">
    <div class="number-card card">
      <div class="card-body text-center">
        <p class="name">
          {{ person.name }}
        </p>
        <p class="email">
          {{ person.email }}
        </p>
        <p v-if="isResiden" class="role">Sebagai Residen</p>
        <p v-if="!isResiden" class="role">Sebagai Staff</p>
      </div>
    </div>
  </div>

  <div class="m-4 text-center">
    <div class="p-4" v-if="userRoles.includes('ROLE_RESIDEN')">
      <!-- Dashbooard -->
      <h5>Dashboard Residen</h5>
      <!-- <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkMenuResiden"
        >Menu</router-link
      > -->
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkLaporanPasien"
        >Pasien</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkLaporanTugas"
        >Tugas</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkProgressTest"
        >Progress Test</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkKompetensi"
        >Kompetensi</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkModul"
        >Modul</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkJaga"
        >Jaga</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        :to="links.linkTindakan"
        >Tindakan</router-link
      >
      <!-- Buat Laporan -->
      <h5 class="mt-4">Dashboard Residen</h5>
      <router-link class="nav-link btn btn-outline-primary btn-lg m-2" to="/laporanpasienform/0"
        >Pasien</router-link
      >
      <router-link class="nav-link btn btn-outline-primary btn-lg m-2" to="/addlaporantugas">Tugas</router-link>
      <router-link class="nav-link btn btn-outline-primary btn-lg m-2" to="/modulresidenform/0"
        >Kelulusan Modul</router-link
      >
    </div>

    <div class="p-4" v-if="userRoles.includes('ROLE_KONSULEN')">
      <h5>Dashboard Konsulen</h5>
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-konsulen/laporan-pasien/belum-dievaluasi"
        >Laporan Pasien</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-konsulen/tugas-presentasi/belum-dievaluasi"
        >Tugas Presentasi</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-konsulen/tugas-publikasi/belum-dievaluasi"
        >Tugas Publikasi</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-konsulen/penelitian-akhir/belum-dievaluasi"
        >Tugas Penelitian Akhir</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-konsulen/kasus-sulit/belum-dievaluasi"
        >Pembahasan Kasus Sulit</router-link
      >
    </div>

    <div class="p-4" v-if="userRoles.includes('ROLE_KETUAMODUL')">
      <h5>Dashboard Ketua Modul</h5>

      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-ketua-modul/belum-lulus"
        >Belum Lulus</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboard-ketua-modul/sudah-lulus"
        >Sudah Lulus</router-link
      >
    </div>

    <div class="p-4" v-if="userRoles.includes('ROLE_ADMIN')">
      <h5>Dashboard Admin</h5>
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/mengelola-akun/residen"
        >Kelola Akun Residen</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/mengelola-akun/staff"
        >Kelola Akun Staff</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/mengelola-akun/residen-register"
        >Registrasi Residen</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/mengelola-akun/staff-register"
        >Registrasi Staff</router-link
      >
    </div>

    <div class="p-4" v-if="userRoles.includes('ROLE_PENGURUSAKADEMIK')">
      <h5>Dashboard Pengurus Akademik</h5>
      <!-- <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik"
        >Menu Dashboard</router-link
      > -->
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/residen/ongoing"
        >Dashboard Residen</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/konsulen"
        >Dashboard Konsulen</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/laporanpasien"
        >Dashboard Laporan Pasien</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/laporantugas/tugaspresentasi"
        >Dashboard Laporan Tugas</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/modul"
        >Dashboard Modul</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/kompetensi"
        >Dashboard Kompetensi</router-link
      >
      <router-link
        class="nav-link btn btn-outline-primary btn-lg m-2"
        to="/dashboardpengurusakademik/tes-formatif"
        >Dashboard Tes Formatif</router-link
      >
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import loadScript from "@/js/scripts.js";

export default {
  name: "Home",
  components: { MainHeader },
  data: function () {
    return {
      role: [],
      id: Array,
      userData: JSON.parse(localStorage.getItem("userData")),
      linkMenuResiden: String,
      linkLaporanPasien: String,
      linkLaporanTugas: String,
      linkProgressTest: String,
      linkKompetensi: String,
      linkModul: String,
      linkJaga: String,
      linkTindakan: String,
    };
  },
  computed: {
    title() {
      return "Selamat Datang, " + this.$store.state.auth.user.username;
    },
    isLoggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    isResiden() {
      return JSON.parse(localStorage.getItem("userData")).residen == null
        ? false
        : true;
    },
    person() {
      return JSON.parse(localStorage.getItem("userData"));
    },
    userRoles() {
      if (this.isLoggedIn) return this.$store.state.auth.user.roles;
      else return ["ROLE_DEFAULT"];
    },
    links() {
      if (this.userRoles == "ROLE_RESIDEN" && this.userData.residen != null) {
        let link = {
          linkMenuResiden:
            "/dashboardresiden/" + this.userData.residen.idResiden,
          linkLaporanPasien:
            "/dashboardlaporanpasien/" + this.userData.residen.idResiden,
          linkLaporanTugas:
            "/dashboardlaporantugas/" + this.userData.residen.idResiden,
          linkProgressTest:
            "/dashboardprogresstest/" + this.userData.residen.idResiden,
          linkKompetensi:
            "/dashboardkompetensi/" + this.userData.residen.idResiden,
          linkModul: "/dashboardmodul/" + this.userData.residen.idResiden,
          linkJaga: "/dashboardjaga/" + this.userData.residen.idResiden,
          linkTindakan: "/dashboardtindakan/" + this.userData.residen.idResiden,
        };
        return link;
      } else return [];
    },
  },
  mounted() {
    loadScript();
    if (this.userRoles == "ROLE_RESIDEN") {
      this.linkMenuResiden =
        "/dashboardresiden/" + this.userData.residen.idResiden;
      this.linkLaporanPasien =
        "/dashboardlaporanpasien/" + this.userData.residen.idResiden;
      this.linkLaporanTugas =
        "/dashboardlaporantugas/" + this.userData.residen.idResiden;
      this.linkProgressTest =
        "/dashboardprogresstest/" + this.userData.residen.idResiden;
      this.linkKompetensi =
        "/dashboardkompetensi/" + this.userData.residen.idResiden;
      this.linkModul = "/dashboardmodul/" + this.userData.residen.idResiden;
      this.linkJaga = "/dashboardjaga/" + this.userData.residen.idResiden;
      this.linkTindakan =
        "/dashboardtindakan/" + this.userData.residen.idResiden;
    }
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },
  created() {
    loadScript();
  },
};
</script>

<style>
.name {
  font-size: 2rem;
  background: -webkit-linear-gradient(rgb(31, 223, 159), rgb(59, 104, 226));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.email {
  color: rgb(62, 62, 196);
}
.role {
  font-size: 1.2rem;
}
</style>