<template>
  <div class="col-lg-4">
    <div class="card mb-4 h-100">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <div class="justify-content-center align-items-center text-center mx-auto">
        <br>
          <p class="text-secondary big">{{ count }}</p>
          <p>{{ caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigNumberCard",
  props: {
      title: Number,
      caption: String,
      count: Number,
  }
};
</script>

<style>
.big {
  font-size: 700%;
}
</style>