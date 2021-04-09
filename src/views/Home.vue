<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Card title="Card Title" :updateStatus="updateStatus" />
    <TopNav />
    <Template />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/CardTimeline.vue'
import TopNav from '@/components/TopNav.vue'
import Template from '@/components/Template.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Card,
    TopNav,
    Template
  },
  data: function() {
       return {
          updateStatus: ["30/03/2021", "Dikirim", "30/03/2021", "Ditolak"]
      }
    }
}
</script>
