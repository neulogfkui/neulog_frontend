<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Card title="Card Title" :updateStatus="updateStatus" />
<<<<<<< HEAD
    <ColorCard
      subtitle="Dashboard"
      title="Laporan Pasien"
      color="bg-success"
      link="/about"
    />
    <ColorCardNoFooter
      subtitle="Dashboard"
      title="Laporan Pasien"
      color="bg-success"
      link="/about"
    />
    <BarChart />
    <!-- <TestTable /> -->

    <div class="container mt-n10">
    <div class="card mb-4">
      <div class="card-header">Extended DataTables</div>
      <div class="card-body">
        <div class="datatable">
          <table
            class="table table-bordered table-hover"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Data</th>
                <th>Options</th>
                <th>Select</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Data</th>
                <th>Options</th>
                <th>Select</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(item, index) in data" v-bind:key="item.id">
                <td>{{ item }}</td>
                <td>{{ options[index] }}</td>
                <td><input type="checkbox" @change="check(item)"></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
        </div>
      

    

=======
    <ColorCard subtitle="Dashboard" title="Laporan Pasien" color="bg-success" link="/about"/>
    <ColorCardNoFooter subtitle="Dashboard" title="Laporan Pasien" color="bg-success" link="/about" />
    <!-- <MultiSelect /> -->
>>>>>>> ddd5a29c68fe2cf2df8812c0a6f3d0e4be78591b
    <!-- <TopNav /> -->
    <!-- <Template /> -->
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/CardTimeline.vue";
import TopNav from "@/components/TopNav.vue";
import Template from "@/components/Template.vue";
import ColorCard from "@/components/ColorCard.vue";
import ColorCardNoFooter from "@/components/ColorCardNoFooter.vue";
import BarChart from "@/components/BarChart.vue"
import TestTable from "@/components/TestTable.vue"

export default {
  name: "Home",
  // extends: BarChart,
  components: {
    HelloWorld,
    Card,
    TopNav,
    Template,
    ColorCard,
    ColorCardNoFooter,
    BarChart,
    TestTable
  },
  data: function () {
    return {
      checked:[],
      updateStatus: ["30/03/2021", "Dikirim", "30/03/2021", "Ditolak"],
      data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      options: ["Mon", "Tue", "Wed", "Mon", "Tue", "Wed","Mon", "Tue", "Wed", "Mon", "Tue", "Wed"],
    };
  },
  methods:{
    check(item){
      if(this.checked.includes(item)){
        this.checked.pop(item)
      }else{
        this.checked.push(item)
      }
      console.log(this.checked)
    }
  }
};
</script>
