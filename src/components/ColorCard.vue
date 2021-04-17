<template>
  <div class="col-xxl-3 col-lg-3">
    <div class="card bg-primary text-white mb-4" :class="color">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-3">
            <div class="text-white-75 small">{{ subtitle }}</div>
            <div class="text-lg font-weight-bold" v-if="title.length>39">{{ title }}</div>
            <div class="text-lg font-weight-bold" v-if="title.length<39">{{ title }}<br><br></div>
          </div>
          <i class="feather-xl text-white-50" data-feather="calendar"></i>
        </div>
      </div>
      <div
        class="card-footer d-flex align-items-center justify-content-between"
      >
<<<<<<< HEAD
        <a class="small text-white stretched-link" :href="link">{{ action }}</a>
=======
        <a class="small text-white stretched-link" :href="link">
          {{action}}
        </a>
>>>>>>> 177d08af16320c2080bfcdbd9bed50f08ec10f0b

        <div class="small text-white">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ColorCard",
  props: {
    subtitle: String,
    title: String,
    color: String,
    link: String,
    action: String,
  },
};
</script>

<style>
</style>