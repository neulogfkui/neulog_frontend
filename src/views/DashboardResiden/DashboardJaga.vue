<template>
  <MainHeader
    v-if="isDataTableReady"
    title="Dashboard Jaga"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container">
    <div class="row upper justify-content-center">
      <PieChart
        v-if="isMounted"
        keterangan="Laporan Pasien Jaga Dibuat"
        :persentase="this.angkaPersentase"
        :total="this.totalJaga"
        :label="this.label"
        :data="this.jumlah"
        title="Sebaran Status Laporan Pasien Jaga"
      />
      <!-- Tabel -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Laporan Pasien Jaga</b>
          </div>
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
                    <th>Tanggal</th>
                    <th>Inisial Pasien</th>
                    <th>Usia</th>
                    <th>No Rekam Medis</th>
                    <th>Konsulen</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in listJaga" v-bind:key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.tanggalDibuat }}</td>
                    <td>{{ item.inisialPasien }}</td>
                    <td>{{ item.usiaPasien }}</td>
                    <td>{{ item.noRekamMedis }}</td>
                    <td>{{ item.konsulen.pengguna.name }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <router-link
                        :to="'/laporanpasiendetail/' + item.idLaporanPasien"
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
import MainHeader from "@/components/MainHeader.vue";
import PieChart from "@/components/PieChart.vue";
import BigNumberCard from "@/components/BigNumberCard.vue";
import BarChart from "@/components/BarChart.vue";
import dataTableLoader from "@/js/datatable";

export default {
  name: "DashboardJaga",
  data() {
    return {
      totalJaga: Number,
      listJaga: Array,
      label: [],
      jumlah: [],
      angkaPersentase: Number,
      isMounted: false,
      ready: false,
      subtitle: null,
      residen: null,
    };
  },
  components: {
    MainHeader,
    PieChart,
    BigNumberCard,
    BarChart,
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
        "https://neulogfkui.herokuapp.com/api/dashboardResiden/jaga/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.warn(resp.data);
        this.totalJaga = resp.data.totalJaga;
        this.listJaga = resp.data.listJaga;
        this.label = resp.data.label;
        this.jumlah = resp.data.jumlah;
        this.angkaPersentase = resp.data.angkaPersentase;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        dataTableLoader();
        this.ready = true;
        this.isMounted = true;
      });
  },
  methods: {},
};
</script>