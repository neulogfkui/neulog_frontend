<template></template>
<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
import dataTableLoader from "@/js/datatable";
export default {
  name: "DetailModulResiden",
  components: { LightHeader },
  data(){
      return{
          data: null,
          residen: null, 
          subtitle: null,
          ready: false,
      }
  },
  computed: {
    isDataTableReady() {
      return this.ready;
    },
  },
  mounted(){
      axios.get("http://localhost:8000/api/dashboardResiden/modul/" + this.$route.params.idModulResiden)
      .then((resp) =>{
          console.log(resp.data)
          this.data = resp.data
          this.residen = 

      })
  }
};
</script>