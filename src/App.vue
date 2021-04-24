<template>
  <body class="nav-fixed">
    <div v-if="!isLoggedIn">
      <Login />
    </div>
    <div v-else>
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
              <div v-if="role.includes('residen')">
                <!-- Home -->
                <div class="sidenav-menu-heading">Home</div>
                <router-link to="/" class="nav-link">
                  <div class="nav-link-icon">
                    <i data-feather="bar-chart"></i>
                  </div>
                  Home</router-link
                >
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
                    <router-link class="nav-link" to="/components"
                      >Menu</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Pasien</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Tugas</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Progress Test</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Kompetensi</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Modul</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Jaga</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Tindakan</router-link
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
                    <router-link class="nav-link" to="/components"
                      >Pasien</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Tugas</router-link
                    >
                    <router-link class="nav-link" to="/components"
                      >Kelulusan Modul</router-link
                    >
                  </nav>
                </div>
				</div>
                <!-- END OF RESIDEN -->
                <!-- ----------------------------------------------------------------------------------------- -->

                <!-- KONSULEN -->
                <!-- ----------------------------------------------------------------------------------------- -->
                <div v-if="role.includes('konsulen')">
                  <!-- Home -->
                  <div class="sidenav-menu-heading">Home</div>
                  <router-link to="/" class="nav-link">
                    <div class="nav-link-icon">
                      <i data-feather="bar-chart"></i>
                    </div>
                    Home</router-link
                  >
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
                    Dashboard Konsulen
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
                      <router-link class="nav-link" to="/components"
                        >Sudah Dievaluasi</router-link
                      >
                      <router-link class="nav-link" to="/components"
                        >Belum Dievaluasi</router-link
                      >
                      <router-link class="nav-link" to="/components"
                        >Tugas Bimbingan</router-link
                      >
                    </nav>
                  </div>
                  <!-- END OF RESIDEN -->
                  <!-- ----------------------------------------------------------------------------------------- -->
                </div>
              </div>
            </div>
          <!-- Sidenav Footer-->
          <div class="sidenav-footer">
            <div class="sidenav-footer-content">
              <div class="sidenav-footer-subtitle">Logged in as:</div>
              <div class="sidenav-footer-title">Valerie Luna</div>
              <button 
                class="btn btn-danger m-1" 
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

export default {
  name: "App",
  components: {Login},
  data: function () {
    return {
      isLoggedIn: this.$store.state.auth.status.loggedIn,
      role: [],
      id: Array
    };
  },
  // computed: {
  //   isLoggedIn(){ this.$store.state.status.loggedIn;},
  // },
  mounted() {
    this.role = ["konsulen"];
    this.id = [1];
    // this.loadDataTable();
  },
  updated() {
    this.isLoggedIn = this.$store.state.auth.status.loggedIn;
    console.log(this.isLoggedIn);
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
      this.isLoggedIn = this.$store.state.auth.status.loggedIn;
    }
  }
}
</script>