<template>
  <div class="col-xxl-4 col-xl-4 mb-4">
    <div class="card card-header-actions h-100">
      <div class="card-header">
        <b>{{ title }}</b>
      </div>
      <div class="card-body">
        <div class="timeline timeline-xs" v-for="(item, index) in updateStatus" v-bind:key="item.id">
          <!-- Timeline Item -->
          <div class="timeline-item" v-if="index % 2 == 0">
            <p>{{item}}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p><b>{{ updateStatus[index+1] }}</b></p>
          </div>
          <!-- Timeline Item -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTimeline",
  props: {
    title: String,
    updateStatus: Array,
  },

};
</script>

<style>
</style>