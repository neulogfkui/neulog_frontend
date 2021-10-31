<template>
  <MainHeader
    title="Dashboard Tugas Publikasi"
    :subtitle="this.subtitle"
    icon="file-text"
    :withLogo="false"
    isSmall="true"
  />
  <div class="container" v-if="getReady">
    <!-- <div class="row container justify-content-center upper">
      <PieChart
        :label="this.label"
        :data="this.jumlah"
        title="Sebaran Tugas Publikasi"
      />
    </div> -->

    <div class="row container">
      <!-- Tabel Tugas  -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>List Tugas Akhir</b>
          </div>
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
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Judul</th>
                    <th>Stage</th>
                    <th>Konsulen</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in listTugas" v-bind:key="item.id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.tanggalDibuat }}
                    </td>
                    <td>
                      {{
                        item.tugasPenelitianAkhirModel
                          .judulProposal
                      }}
                    </td>
                    <td>
                      {{
                        item.tugasPenelitianAkhirModel
                          .stage
                      }}
                    </td>
                    <td>
                      {{ item.konsulenModel.pengguna.name }}
                    </td>
                    <td>
                      {{ item.status }}
                    </td>
                    <td>
                      <router-link
                        :to="'/detailtugas/tpa/' + item.idLaporanTugas"
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
import PieChart from "@/components/PieChart.vue";

export default {
  name: "DashboardTPA",
  components: {
    MainHeader,
    PieChart,
  },
  data() {
    return {
      total: Number,
      jumlah: [],
      label: [],
      listTugas: [],
      persentase: null,
      residen: null,
      ready: false,
      subtitle: null,
      mainList: null,
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
        "https://neulogfkui.herokuapp.com/api/dashboardResiden/laporanTugas/TPA/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        this.total = resp.data.total;
        this.jumlah = resp.data.jumlah;
        this.label = resp.data.label;
        this.listTugas = resp.data.listTugas;
        this.persentase = resp.data.persentase;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        dataTableLoader();
        this.ready = true;
        console.warn(this.jumlah);
      });
  },
  method() {},
};
</script>