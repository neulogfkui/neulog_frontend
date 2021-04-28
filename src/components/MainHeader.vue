<template>
  <header class="page-header page-header-dark" v-if="isSmall">
    <div class="container">
      <div class="page-header-content pt-4">
        <div class="row align-items-center justify-content-between">
          <div class="col-auto mt-4">
            <h1 class="page-header-title">
              <div class="page-header-icon">
                <i :data-feather="icon"></i>
              </div>
              {{ title }}
            </h1>
            <div class="page-header-subtitle">
              {{ subtitle }}
            </div>
          </div>
          <div class="col-12 col-xl-auto mt-4" v-if="this.withLogo">
            <div class="card justify-content-center align-items-center pr-1">
              <img
                class="pl-4"
                alt="fkui logo"
                src="@/assets/fkui.png"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header class="page-header page-header-dark pb-10" v-if="!isSmall">
    <div class="container">
      <div class="page-header-content pt-4">
        <div class="row align-items-center justify-content-between">
          <div class="col-auto mt-4">
            <h1 class="page-header-title">
              <div class="page-header-icon">
                <i :data-feather="icon"></i>
              </div>
              {{ title }}
            </h1>
            <div class="page-header-subtitle">
              {{ subtitle }}
            </div>
          </div>
          <div class="col-12 col-xl-auto mt-4" v-if="this.withLogo">
            <div class="card justify-content-center align-items-center pr-1">
              <img
                class="pl-4"
                alt="fkui logo"
                src="@/assets/fkui.png"
                width="200"
              />
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
  name: "MainHeader",
  props: {
    title: String,
    subtitle: String,
    icon: String,
    withLogo: false,
    isSmall: false,
  },
  mounted() {
    loadScript();
  },
};
</script>

