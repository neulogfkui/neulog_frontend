<template>
  <div class="col">
    <div class="card mb-4 h-100">
      <div class="card-header"><b>{{ title }}</b></div>
      <div class="card-body">
        <div class="justify-content-center align-items-center text-center mx-auto">
            <div class="row">
                <div class="col-5" style="position: relative;">
                    <p class="pl-3" style="position: absolute; top: 50%;">Rata-Rata:</p>
                </div>
                <div class="col-7">
                    <p><span class="text-secondary big">{{ count1 }}</span>&nbsp&nbsp&nbsp{{ caption1 }}</p>
                </div>
            </div>
        </div>
        <div class="justify-content-center align-items-center text-center mx-auto">
            <div class="row">
                <div class="col-5" style="position: relative;">
                    <p class="pl-3" style="position: absolute; top: 50%;">Paling Cepat:</p>
                </div>
                <div class="col-7">
                    <p><span class="text-secondary big">{{ count2 }}</span>&nbsp&nbsp&nbsp{{ caption2 }}</p>
                </div>
            </div>
        </div>
        <div class="justify-content-center align-items-center text-center mx-auto">
            <div class="row">
                <div class="col-5" style="position: relative;">
                    <p class="pl-3" style="position: absolute; top: 50%;">Paling Lambat:</p>
                </div>
                <div class="col-7">
                    <p><span class="text-secondary big">{{ count3 }}</span>&nbsp&nbsp&nbsp{{ caption3 }}</p>
                </div>
            </div>
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
      caption1: String,
      count1: Number,
      caption2: String,
      count2: Number,
      caption3: String,
      count3: Number,
  }
};
</script>

<style>
.big {
  font-size: 400%;
}
</style>