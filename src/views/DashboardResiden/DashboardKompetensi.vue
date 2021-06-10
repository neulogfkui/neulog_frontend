<template>
  <MainHeader
    v-if="getReady"
    title="Dashboard Kompetensi"
    :subtitle="this.subtitle"
    icon="file-text"
    :withLogo="false"
  />
  <div class="container" v-if="getReady">
    <div class="row container justify-content-center upper">
      <PieChart
        keterangan="Target Tercapai"
        :persentase="this.data.persentase"
        :total="this.data.jumlah[0]"
        :label="this.data.label"
        :data="this.data.jumlah"
        title="Pencapaian Kompetensi"
      >
      </PieChart>
    </div>
    <div class="row container">
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>List Laporan Pasien</b>
          </div>
          <div class="card-body">
            <div class="datatable" v-if="getReady">
              <table
                class="table table-bordered table-hover"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Kompetensi</th>
                    <th>Target</th>
                    <th>Tercapai</th>
                    <th>Persentase</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in data.listKompetensi"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.kompetensi.namaKompetensi }}
                    </td>
                    <td>
                      {{ item.kompetensi.jumlahMinimal }}
                    </td>
                    <td>
                      {{ data.listFreq[index] }}
                    </td>
                    <td>
                      {{ data.listPersentase[index] }}
                    </td>
                    <td>
                      <router-link
                        :to="
                          '/detailkompetensi/' +
                          item.idKompetensiLaporan 
                        "
                      >
                        <button class="btn btn-secondary">Lihat</button>
                      </router-link>
                    </td>
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
import dataTableLoader from "@/js/datatable.js";
import MainHeader from "@/components/MainHeader.vue";
import PieChart from "@/components/PieChart";

export default {
  name: "DashboardKompetensi",
  components: { PieChart, MainHeader },
  data() {
    return {
      data: null,
      ready: false,
      subtitle: null,
      residen: null,
    };
  },
  computed: {
    getReady() {
      return this.ready;
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/api/dashboardResiden/kompetensi/" +
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