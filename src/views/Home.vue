<template>
  <MainHeader icon="home" :title="title" subtitle="Neulog - Departemen Neurologi FKUI - RSCM"/>
    <div class="number-card-container container mt-n10">
        <div class="number-card card">
            <div class="card-body text-center">
                <p class="name">
                  {{ person.name }}
                </p>
                <p class="email">
                  {{ person.email }}
                </p>
                <button @click="redirectToResidenRegister" class="btn btn-teal">Buat Akun Residen</button>
            </div>
        </div>
    </div>
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
     },
     isResiden() {
       return JSON.parse(localStorage.getItem('userData')).residen == null? false : true;
     },
     person() {
       return JSON.parse(localStorage.getItem('userData'));
     }
 },
 created() {
   loadScript();
 } 
}
</script>

<style>

</style>