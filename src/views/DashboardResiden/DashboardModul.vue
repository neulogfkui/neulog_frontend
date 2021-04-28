<template>
  <MainHeader
    v-if="isDataTableReady"
    title="Dashboard Modul"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="isDataTableReady">
    <div class="row upper">
      <BigNumberCard
        title="Total Modul Selesai"
        :count="total"
        caption="Modul Selesai"
      />
      <PieChart
        v-if="isMounted"
        keterangan="Modul yang Lulus Tepat Waktu"
        :persentase="this.angkaPersentase"
        :total="this.listModulResiden.length"
        :label="this.labelPersentase"
        :data="this.persentase"
        title="Persentase Lulus Tepat Waktu"
      />
      <BigNumberCard
        title="Rata-Rata Lama Prolong"
        :count="persenAvgProlongDays"
        caption="Hari"
      />
      <!-- Tabel -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Modul</b>
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
                    <th>Modul</th>
                    <th>Periode Modul</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listModulResiden"
                    v-bind:key="item.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.modul.namaModul }}</td>
                    <td>
                      {{ item.tanggalMulai + " - " + item.tanggalSelesai }}
                    </td>
                    <td>{{ item.status }}</td>
                    <td>
                      <router-link :to="'/moduldetail/' + item.idModulResiden">
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
  name: "DashboardModul",
  data() {
    return {
      listModulResiden: Array,
      label: [],
      jumlah: [],
      total: String,
      angkaPersentase: Number,
      labelPersentase: [],
      persentase: [],
      persenAvgProlongDays: Number,
      totalProlongDays: Number,
      isMounted: false,
      ready: false,
      residen: null,
      subtitle: null,
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
        "http://localhost:8000/api/dashboardResiden/modul/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.warn(resp.data);
        this.listModulResiden = resp.data.listModulResiden;
        this.label = resp.data.label;
        this.jumlah = resp.data.jumlah;
        this.total = resp.data.total;
        this.angkaPersentase = resp.data.angkaPersentase;
        this.labelPersentase = resp.data.labelPersentase;
        this.persentase = resp.data.persentase;
        this.persenAvgProlongDays = resp.data.persenAvgProlongDays;
        this.totalProlongDays = resp.data.totalProlongDays;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.ready = true;
        dataTableLoader();
        this.isMounted = true;
      });
  },
};
</script>