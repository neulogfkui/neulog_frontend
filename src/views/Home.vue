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
                <p v-if="isResiden" class="role">
                  Sebagai Residen
                </p>
                <p v-if="!isResiden" class="role">
                  Sebagai Staff
                </p>
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
.name {
    font-size: 2rem;
    background: -webkit-linear-gradient(rgb(31, 223, 159), rgb(59, 104, 226));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
.email {
  color: rgb(62, 62, 196);
}
.role {
  font-size: 1.2rem;
}
</style>