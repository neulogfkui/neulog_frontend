<template>
  <body class="nav-fixed">
    <nav
      class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
      id="sidenavAccordion"
    >
      <!-- Navbar Brand-->
      <!-- * * Tip * * You can use text or an image for your navbar brand.-->
      <!-- * * * * * * When using an image, we recommend the SVG format.-->
      <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px-->
      <!-- <a class="navbar-brand" href="index.html">SB Admin Pro</a> -->
      <img class="pl-4" alt="neulog logo" src="./assets/neulog.png" width="120" />

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
              <!-- Sidenav Menu Heading (Core)-->
              <div class="sidenav-menu-heading">Core</div>
              <!-- Sidenav Accordion (Dashboard)-->
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-toggle="collapse"
                data-target="#collapseDashboards"
                aria-expanded="false"
                aria-controls="collapseDashboards"
              >
                <div class="nav-link-icon"><i data-feather="activity"></i></div>
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
                  <a class="nav-link" href="index.html">
                    Default
                    <span class="badge badge-primary-soft text-primary ml-auto"
                      >Updated</span
                    >
                  </a>
                  <a class="nav-link" href="dashboard-2.html">Multipurpose</a>
                  <a class="nav-link" href="dashboard-3.html">Affiliate</a>
                </nav>
              </div>
              <!-- Sidenav Menu Heading (Core)-->
              <div class="sidenav-menu-heading">Links</div>
              <!-- Sidenav Link (Charts)-->
              <a class="nav-link" href="charts.html">
                <div class="nav-link-icon">
                  <i data-feather="bar-chart"></i>
                </div>
                Charts
              </a>
              <!-- Sidenav Link (Tables)-->
              <a class="nav-link" href="tables.html">
                <div class="nav-link-icon"><i data-feather="filter"></i></div>
                Tables
              </a>
            </div>
          </div>
          <!-- Sidenav Footer-->
          <div class="sidenav-footer">
            <div class="sidenav-footer-content">
              <div class="sidenav-footer-subtitle">Logged in as:</div>
              <div class="sidenav-footer-title">Valerie Luna</div>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
      <nav>
      <router-link to="/tugaspresentasiform">TugasPresentasiForm</router-link>
      <router-link to="/kasussulitform">KasusSulitForm</router-link>
      <router-link to="/tugaspublikasiform">TugasPublikasiForm</router-link>
      <router-link to="/tugaspenelitianakhirform">TugasPenelitianAkhirForm</router-link>
      <router-link to="/addlaporantugas">LaporanTugasChoice</router-link>
      <router-link to="/components">Components</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/about">About</router-link>
      <br>
      <router-link to="/dashboardPengurusAkademik">DashboardPengurusAkademik</router-link>
    </nav>
    <nav>
    <router-link to="/about"> Tes Link </router-link> 
      </nav>


    <router-view></router-view>



        <footer class="footer mt-auto footer-light">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &#xA9; Neulog 2021
              </div>
              <!-- <div class="col-md-6 text-md-right small">
                <a href="#!">Privacy Policy</a>
                &#xB7;
                <a href="#!">Terms &amp; Conditions</a>
              </div> -->
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'App',
}
</script>

<style>
@import "./css/styles.css";
/* @import './vendors/jquery/jquery.min.js'; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
