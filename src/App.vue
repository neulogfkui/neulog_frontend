<template>
  <body class="nav-fixed">
    <div v-if="!isLoggedIn">
      <!-- <Login /> -->
      <LoginSocial />
    </div>

    <div v-if="isLoggedIn">
      <nav
        class="
          topnav
          navbar navbar-expand
          shadow
          justify-content-between justify-content-sm-start
          navbar-light
          bg-white
        "
        id="sidenavAccordion"
      >
        <img
          class="pl-4"
          alt="neulog logo"
          src="./assets/neulog.png"
          width="120"
        />

          <button class="btn btn-primary btn-sm ml-4" @click="goToHome">
            Home
          </button>

        <button class="btn btn-danger btn-sm ml-2" @click="logOut">
          Logout
        </button>
      </nav>

      <div class="mt-4 pt-4">
        <router-view></router-view>
      </div>
    </div>
  </body>
</template>

<script>
import Login from "./components/Login";
import LoginSocial from "./components/LoginSocial";
import loadScript from "./js/scripts";

export default {
  name: "App",
  components: { Login, LoginSocial },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  updated() {
    loadScript();
    // this.userData = JSON.parse(localStorage.getItem('userData'));
  },

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    goToHome(){
      this.$router.push("/");
    }
  },
};
</script>
<style>
.sidenav-footer {
  padding-top: 1rem !important;
  height: fit-content !important;
}
</style>