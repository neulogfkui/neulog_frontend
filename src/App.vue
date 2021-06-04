<template>
  <body class="nav-fixed">
    <div v-if="!isLoggedIn">
      <!-- <Login /> -->
      <LoginSocial />
    </div>
    <div v-if="isLoggedIn">
    <nav
      class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
      id="sidenavAccordion"
    >
      <img
        class="pl-4"
        alt="neulog logo"
        src="./assets/neulog.png"
        width="120"
      />

      <!-- Sidenav Toggle Button-->
      <button
        class="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
        id="sidebarToggle"
      >
        <i data-feather="menu"></i>
      </button>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
          <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
              <!-- RESIDEN -->
              <!-- ----------------------------------------------------------------------------------------- -->
              
                <!-- Home -->
                <div class="sidenav-menu-heading">Home</div>
                <router-link to="/" class="nav-link">
                  <div class="nav-link-icon">
                    <i class="fas fa-home"></i>
                  </div>
                  Home</router-link
                >
              <div v-if="userRoles.includes('ROLE_RESIDEN')">
                <!-- Dashbooard -->
                <div class="sidenav-menu-heading">Dashboard</div>
                <a
                  class="nav-link collapsed"
                  href="javascript:void(0);"
                  data-toggle="collapse"
                  data-target="#collapseDashboards"
                  aria-expanded="false"
                  aria-controls="collapseDashboards"
                >
                  <div class="nav-link-icon">
                    <i data-feather="activity"></i>
                  </div>
                  Dashboards
                  <div class="sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseDashboards"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    class="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPages"
                  >
                    <router-link class="nav-link" :to="linkMenuResiden"
                      >Menu</router-link
                    >
                    <router-link class="nav-link" :to="linkLaporanPasien"
                      >Pasien</router-link
                    >
                    <router-link class="nav-link" :to="linkLaporanTugas"
                      >Tugas</router-link
                    >
                    <router-link class="nav-link" :to="linkProgressTest"
                      >Progress Test</router-link
                    >
                    <router-link class="nav-link" :to="linkKompetensi"
                      >Kompetensi</router-link
                    >
                    <router-link class="nav-link" :to="linkModul"
                      >Modul</router-link
                    >
                    <router-link class="nav-link" :to="linkJaga"
                      >Jaga</router-link
                    >
                    <router-link class="nav-link" :to="linkTindakan"
                      >Tindakan</router-link
                    >
                    <router-link class="nav-link" :to="linkTindakan2"
                      >Tindakan2</router-link
                    >
                  </nav>
                </div>
                <!-- Buat Laporan -->
                <div class="sidenav-menu-heading">Buat Laporan</div>
                <a
                  class="nav-link collapsed"
                  href="javascript:void(0);"
                  data-toggle="collapse"
                  data-target="#collapseBuatTugas"
                  aria-expanded="false"
                  aria-controls="collapseBuatTugas"
                >
                  <div class="nav-link-icon">
                    <i data-feather="activity"></i>
                  </div>
                  Laporan
                  <div class="sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseBuatTugas"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    class="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPages"
                  >
                    <router-link class="nav-link" to="/laporanpasienform/0"
                      >Pasien</router-link
                    >
                    <router-link class="nav-link" to="/addlaporantugas"
                      >Tugas</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Kelulusan Modul</router-link
                    >
                  </nav>
              </div>
				      </div>

              <div v-if="userRoles.includes('ROLE_KONSULEN')">
                <!-- Dashbooard -->
                <div class="sidenav-menu-heading">Dashboard</div>
                <a
                  class="nav-link collapsed"
                  href="javascript:void(0);"
                  data-toggle="collapse"
                  data-target="#collapseDashboardKonsulen"
                  aria-expanded="false"
                  aria-controls="collapseDashboardKonsulen"
                >
                  <div class="nav-link-icon">
                    <i data-feather="activity"></i>
                  </div>
                  Dashboard Konsulen
                  <div class="sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseDashboardKonsulen"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    class="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPages"
                  >
                    <router-link class="nav-link" to="/dashboard-konsulen/laporan-pasien/belum-dievaluasi"
                      >Laporan Pasien</router-link
                    >
                    <router-link class="nav-link" to="/dashboard-konsulen/tugas-presentasi/belum-dievaluasi"
                      >Tugas Presentasi</router-link
                    >
                    <router-link class="nav-link" to="/dashboard-konsulen/tugas-publikasi/belum-dievaluasi"
                      >Tugas Publikasi</router-link
                    >
                    <router-link class="nav-link" to="/dashboard-konsulen/penelitian-akhir/belum-dievaluasi"
                      >Tugas Penelitian Akhir</router-link
                    >
                    <router-link class="nav-link" to="/dashboard-konsulen/kasus-sulit/belum-dievaluasi"
                      >Pembahasan Kasus Sulit</router-link
                    >
                  </nav>
                </div>
              </div>
                <!-- END OF RESIDEN -->
                <!-- ----------------------------------------------------------------------------------------- -->

                <!-- PENGURUS AKADEMIK [BEKA] -->
                <!-- ----------------------------------------------------------------------------------------- -->

                  <!-- <div v-if="userRoles.includes('ROLE_PENGURUSAKADEMIK')"> -->
                  <!-- Dashbooard -->
                  <!-- <div class="sidenav-menu-heading">Dashboard Pengurus Akademik</div>
                  <a
                    class="nav-link collapsed"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#collapseDashboards"
                    aria-expanded="false"
                    aria-controls="collapseDashboards"
                  >
                    <div class="nav-link-icon">
                      <i class="fas fa-th-large"></i>
                    </div>
                    Dashboard
                    <div class="sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseDashboards"
                    data-parent="#accordionSidenav"
                  >
                    <nav
                      class="sidenav-menu-nested nav accordion"
                      id="accordionSidenavPages"
                    >
                      <router-link class="nav-link" to="/dashboardpengurusakademik"
                        >Menu</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/residen/ongoing"
                        >Residen</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/konsulen"
                        >Konsulen</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/laporanpasien"
                        >Laporan Pasien</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/laporantugas/tugaspresentasi"
                        >Laporan Tugas</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/modul"
                        >Modul</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/kompetensi"
                        >Kompetensi</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/tes-formatif"
                        >Tes Formatif</router-link
                      >
                    </nav>
                  </div>
                </div> -->
                  <!-- END OF RESIDEN -->
                  <!-- ----------------------------------------------------------------------------------------- -->
                
                
                <!-- ADMIN MENU [AVI] -->
                <!-- ----------------------------------------------------------------------------------------- -->
                
                  <!-- Home -->
                  <!-- <div class="sidenav-menu-heading">Home</div>
                  <router-link to="/mengelola-akun" class="nav-link">
                    <div class="nav-link-icon">
                      <i class="fas fa-home"></i>
                    </div>
                    Admin Home</router-link
                  > -->
                  <div v-if="userRoles.includes('ROLE_ADMIN')">
                  <!-- Dashbooard -->
                  <a
                    class="nav-link collapsed"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#collapseDashboardAdmin"
                    aria-expanded="false"
                    aria-controls="collapseDashboardAdmin"
                  >
                    <div class="nav-link-icon">
                      <i data-feather="layout"></i>
                    </div>
                    Dashboard Admin
                    <div class="sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseDashboardAdmin"
                    data-parent="#accordionSidenav"
                  >
                    <nav
                      class="sidenav-menu-nested nav accordion"
                      id="accordionSidenavPages"
                    >
                      <router-link class="nav-link" to="/mengelola-akun/residen"
                        >Mengelola Akun Residen</router-link
                      >
                      <router-link class="nav-link" to="/mengelola-akun/staff"
                        >Mengelola Akun Staff</router-link
                      >
                      <router-link class="nav-link" to="/mengelola-akun/residen-register"
                        >Registrasi Residen</router-link
                      >
                      <router-link class="nav-link" to="/mengelola-akun/staff-register"
                        >Registrasi Staff</router-link
                      >
                    </nav>
                  </div>
                  <!-- END OF RESIDEN -->

                  <!-- PENGURUS AKADEMIK MENU [BEKA] -->
                <!-- ----------------------------------------------------------------------------------------- -->
                
                  <!-- Home -->
                  <!-- <div class="sidenav-menu-heading">Home</div>
                  <router-link to="/mengelola-akun" class="nav-link">
                    <div class="nav-link-icon">
                      <i class="fas fa-home"></i>
                    </div>
                    Admin Home</router-link
                  > -->
                  <div v-if="userRoles.includes('ROLE_PENGURUSAKADEMIK')">
                  <!-- Dashbooard -->
                  <a
                    class="nav-link collapsed"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#collapseDashboardPengurusAkademik"
                    aria-expanded="false"
                    aria-controls="collapseDashboardPengurusAkademik"
                  >
                    <div class="nav-link-icon">
                      <i class="fas fa-th-large"></i>
                    </div>
                    Dashboard Pengurus Akademik
                    <div class="sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseDashboardPengurusAkademik"
                    data-parent="#accordionSidenav"
                  >
                    <nav
                      class="sidenav-menu-nested nav accordion"
                      id="accordionSidenavPages"
                    >  
                      <router-link class="nav-link" to="/dashboardpengurusakademik"
                        >Menu Dashboard</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/residen/ongoing"
                        >Dashboard Residen</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/konsulen"
                        >Dashboard Konsulen</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/laporanpasien"
                        >Dashboard Laporan Pasien</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/laporantugas/tugaspresentasi"
                        >Dashboard Laporan Tugas</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/modul"
                        >Dashboard Modul</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/kompetensi"
                        >Dashboard Kompetensi</router-link
                      >
                      <router-link class="nav-link" to="/dashboardpengurusakademik/tes-formatif"
                        >Dashboard Tes Formatif</router-link
                      >
                    </nav>
                  </div>
                  <!-- END OF PENGURUS AKADEMIK -->
                
                </div>
                </div>
              </div>
            </div>
          <!-- Sidenav Footer-->
          <div class="sidenav-footer">
            <div class="sidenav-footer-content">
              <div class="sidenav-footer-subtitle">Logged in as:</div>
              <div class="sidenav-footer-title">{{userData.name}} ({{userData.username}})</div>
              <button 
                class="btn btn-danger" 
                style="margin-bottom:2rem!important;"
                @click="logOut">Logout</button>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <!-- <nav>
      <router-link to="/tugaspresentasiform">TugasPresentasiForm</router-link>
      <br>
      <router-link to="/kasussulitform">KasusSulitForm</router-link>
      <router-link to="/tugaspublikasiform">TugasPublikasiForm</router-link>
      <router-link to="/tugaspenelitianakhirform">TugasPenelitianAkhirForm</router-link>
      <router-link to="/addlaporantugas">LaporanTugasChoice</router-link>
      <router-link to="/components">Components</router-link>
      <br>
      <router-link to="/login">Login</router-link>
      <br>
      <router-link to="/about">About</router-link>
      <br>
      <router-link to="/dashboardPengurusAkademik">DashboardPengurusAkademik</router-link>
      <router-link to="/dashboardResidenMenu">DashboardResidenMenu</router-link>
    </nav>
    <nav>
    <router-link to="/about"> Tes Link </router-link> 
      </nav> -->

        <router-view></router-view>

        <footer class="footer mt-auto footer-light">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 small">Copyright &#xA9; Neulog 2021</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  </body>
</template>

<script>
import Login from './components/Login';
import LoginSocial from './components/LoginSocial';
import loadScript from './js/scripts';

export default {
  name: "App",
  components: {Login, LoginSocial},
  data: function () {
    return {
      role: [],
      id: Array,
      userData: JSON.parse(localStorage.getItem('userData')),
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
    isLoggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    // userData() {
    //   return (JSON.parse(localStorage.getItem('userData')));
    // },
    userRoles() {
      if (this.isLoggedIn) return this.$store.state.auth.user.roles;
      else return ["ROLE_DEFAULT"];
    },
    linkTindakan2() {
      return "/dashboardtindakan/" + this.userData.residen.idResiden;
    }
  },
  
  mounted() {
    loadScript();
    if(this.userRoles == "ROLE_RESIDEN"){
      this.linkMenuResiden = "/dashboardresiden/" + this.userData.residen.idResiden;
      this.linkLaporanPasien = "/dashboardlaporanpasien/" + this.userData.residen.idResiden;
      this.linkLaporanTugas = "/dashboardlaporantugas/" + this.userData.residen.idResiden;
      this.linkProgressTest = "/dashboardprogresstest/" + this.userData.residen.idResiden;
      this.linkKompetensi = "/dashboardkompetensi/" + this.userData.residen.idResiden;
      this.linkModul = "/dashboardmodul/" + this.userData.residen.idResiden;
      this.linkJaga = "/dashboardjaga/" + this.userData.residen.idResiden;
      this.linkTindakan = "/dashboardtindakan/" + this.userData.residen.idResiden;
    }
  },

  updated() {
    loadScript();
    this.userData = JSON.parse(localStorage.getItem('userData'));
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },

    // isRole(role) {
    //   if user
    // }
  }
}
</script>
<style>
.sidenav-footer {
  padding-top: 1rem !important;
  height: fit-content !important;
}
</style>