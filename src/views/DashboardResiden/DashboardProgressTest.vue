<template>
  <MainHeader
    v-if="isDataTableReady"
    title="Dashboard Progress Test"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="isDataTableReady">
    <div class="row container upper">
      <AreaChart
        title="Grafik Nilai"
        :label="this.data.label"
        :data="this.data.nilai"
      />
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Sebaran Nilai</div>
          <div class="card-body">
            <div class="datatable" v-if="isDataTableReady">
              <table
                class="table table-bordered table-hover"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Tes</th>
                    <th>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data.listNilaiTesFormatif" v-bind:key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.tanggalTes }}</td>
                    <td>{{ item.nilai }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import dataTableLoader from "@/js/datatable";
import AreaChart from "@/components/AreaChart.vue";

export default {
  name: "DashboardProgressTest",
  data() {
    return {
      data: null,
      ready: false,
      subtitle: null,
      residen: null,
    };
  },
  components: {
    MainHeader,
    AreaChart,
  },
  computed: {
    isDataTableReady() {
      return this.ready;
    },
    getIdResiden() {
      return JSON.parse(localStorage.getItem("userData")).residen.idResiden;
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/api/dashboardResiden/progressTest/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.log(resp.data);
        this.data = resp.data;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.ready = true;
        dataTableLoader();
      });
  },
};
</script>