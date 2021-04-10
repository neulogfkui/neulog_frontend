<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Card title="Card Title" :updateStatus="updateStatus" />
    <ColorCard subtitle="Dashboard" title="Laporan Pasien" color="bg-success" link="/about"/>
    <ColorCardNoFooter subtitle="Dashboard" title="Laporan Pasien" color="bg-success" link="/about" />
    <MultiSelect />
    <!-- <TopNav /> -->
    <!-- <Template /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/CardTimeline.vue'
import TopNav from '@/components/TopNav.vue'
import Template from '@/components/Template.vue'
import ColorCard from '@/components/ColorCard.vue'
import ColorCardNoFooter from '@/components/ColorCardNoFooter.vue'
import MultiSelect from '@/components/MultiSelect.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Card,
    TopNav,
    Template, 
    ColorCard,
    ColorCardNoFooter,
    MultiSelect
  },
  data: function() {
       return {
          updateStatus: ["30/03/2021", "Dikirim", "30/03/2021", "Ditolak"]
      }
    }
}
</script>
