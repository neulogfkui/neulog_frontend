<template>
  <div class="col-xxl-3 col-lg-3">
    <router-link :to="link"  custom v-slot="{ navigate }">
      <div
        class="card bg-primary text-white mb-4"
        :class="color"
        @click="navigate"
      >
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="mr-3">
              <div class="text-white-75 small">{{ subtitle }}</div>
              <div class="text-lg font-weight-bold">{{ title }}</div>
            </div>
            <i class="feather-xl text-white-50" :data-feather="icon"></i>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ColorCardNoFooter",
  props: {
    subtitle: String,
    title: String,
    color: String,
    link: String,
    icon: String,
  },
};
</script>

<style>
</style>