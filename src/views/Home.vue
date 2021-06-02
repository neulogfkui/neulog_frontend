<template>
  <MainHeader icon="home" :title="title" subtitle="Neulog - Departemen Neurologi FKUI - RSCM"/>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import loadScript from "@/js/scripts.js";

export default {
 name: "Home",
 components: { MainHeader },
 computed: {
     title() {
         return "Selamat Datang, "+(this.$store.state.auth.user.username);
     }
 },
 created() {
   loadScript();
 } 
}
</script>

<style>

</style>