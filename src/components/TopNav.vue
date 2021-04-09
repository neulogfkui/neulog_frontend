<template>
  <nav
    class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
    id="sidenavAccordion"
  >
    <!-- Navbar Brand-->
    <!-- * * Tip * * You can use text or an image for your navbar brand.-->
    <!-- * * * * * * When using an image, we recommend the SVG format.-->
    <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px-->
    <!-- <a class="navbar-brand" href="index.html">SB Admin Pro</a> -->
    <img alt="neulog logo" src="../assets/neulog.png" width="90">

    <!-- Sidenav Toggle Button-->
    <button
      class="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
      id="sidebarToggle"
    >
      <i data-feather="menu"></i>

    </button>

  </nav>
</template>

<script>
export default {
  name: "TopNav",
  props: {
    title: String,
    updateStatus: Array,
  },
};
</script>

<style>
</style>
