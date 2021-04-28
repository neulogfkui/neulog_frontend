<template>
  <header class="page-header page-header-light bg-light mb-0">
    <div class="container">
      <div class="page-header-content pt-4">
        <div class="row align-items-center justify-content-between">
          <div class="col-auto mt-4">
            <h1 class="page-header-title">
              <div class="page-header-icon"><i :data-feather="icon"></i></div>
              {{ title }}
            </h1>
            <div class="page-header-subtitle">
             {{ subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import loadScript from "@/js/scripts";
export default {
  name: "LightHeader",
  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
  mounted() {
    loadScript();
  },
};
</script>

<style scoped>
.page-header{
    background: none !important
}
</style>