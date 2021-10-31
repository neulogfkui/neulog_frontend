<template>
  <MainHeader
    title="Dashboard Tugas Presentasi"
    :subtitle="this.subtitle"
    icon="file-text"
    :withLogo="false"
  />
  <div class="container" v-if="getReady">
    <div class="row justify-content-center mb-4 upper">
      <!-- <PieChart
        keterangan="Tugas Presentasi"
        :total="this.total"
        :label="this.label"
        :data="this.jumlah"
        title="Sebaran Status Laporan Tugas"
      /> -->
      <BarChart
        :label="this.labelBar"
        :data="this.jumlahBar"
        title="Sebaran Laporan Presentasi"
      />
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header border-bottom">
          <ul class="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="kasus-tab"
                href="#kasus"
                data-toggle="tab"
                role="tab"
                aria-controls="overview"
                aria-selected="true"
                @click="changeData(1)"
                >Presentasi Kasus</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="referat-tab"
                href="#referat"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                @click="changeData(2)"
                >Presentasi Referat</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="book-tab"
                href="#book"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                @click="changeData(3)"
                >Book Reading</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="journal-tab"
                href="#journal"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                @click="changeData(3)"
                >Journal Reading</a
              >
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="tab-content" id="cardTabContent">
            <!-- KASUS -->
            <div
              class="tab-pane fade show active"
              id="kasus"
              role="tabpanel"
              aria-labelledby="kasus-tab"
            >
              <div class="datatable" v-if="isMounted">
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
                      <th>Konsulen</th>
                      <th>Status</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in getMainList" v-bind:key="item.id">
                      <td>
                        {{ index + 1 }}
                      </td>
                      <td>
                        {{ item.tanggalDibuat }}
                      </td>
                      <td>
                        {{ item.tugasPresentasiModel.judulMakalah }}
                      </td>
                      <td>
                        {{ item.konsulenModel.pengguna.name }}
                      </td>
                      <td>
                        {{ item.status }}
                      </td>
                      <td>
                        <router-link
                          :to="'/detailtugas/tugaspresentasi/' + item.idLaporanTugas"
                        >
                          <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- END KASUS -->
            <!-- REFERAT -->
            <div
              class="tab-pane fade"
              role="tabpanel"

            >
              <h5 class="card-title">Example Pane</h5>
              <p class="card-text">...</p>
            </div>
            <!-- END REFERAT -->
            <!-- BOOK -->
            <div
              class="tab-pane fade"
              role="tabpanel"
            >
              <h5 class="card-title">Example Pane</h5>
              <p class="card-text">...</p>
            </div>
            <!-- END Book -->
            <!-- JOURNAL -->
            <div
              class="tab-pane fade"
              role="tabpanel"
            >
              <h5 class="card-title">Example Pane</h5>
              <p class="card-text">...</p>
            </div>
            <!-- END JOURNAL -->
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
import BarChart from "@/components/BarChart.vue";
// import dataTableLoader from "@/js/datatable";

export default {
  name: "DashboardTugasPresentasi",
  components: {
    MainHeader,
    PieChart,
    BarChart,
  },
  updated(){
    // dataTableLoader();
  },
  computed: {
    getReady() {
      return this.ready;
    },
    getMainList(){
      return this.mainList;
    },
  },
  data() {
    return {
      total: Number,
      jumlah: [],
      label: [],
      jumlahBar: [],
      labelBar: [],
      listReferat: [],
      listJournal: [],
      listKasus: [],
      listBook: [],
      isMounted: false,
      residen: null,
      ready: false,
      subtitle: null,
      mainList: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://neulogfkui.herokuapp.com/api/dashboardResiden/laporanTugas/tugasPresentasi/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.warn(resp.data);
        this.total = resp.data.total;
        this.jumlah = resp.data.jumlah;
        this.label = resp.data.label;
        this.jumlahBar = resp.data.jumlahBar;
        this.labelBar = resp.data.labelBar;
        this.listReferat = resp.data.listReferat;
        this.listJournal = resp.data.listJournal;
        this.listKasus = resp.data.listKasus;
        this.listBook = resp.data.listBook;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.mainList = this.listKasus;
        this.isMounted = true;
        // dataTableLoader();
        this.ready = true;
      });
  },
  methods: {
    changeData(num){
      if(num == 2){
        this.mainList = this.listReferat;
      }else if(num == 1){
        this.mainList = this.listKasus;
      }else if(num == 3){
        this.mainList = this.listBook;
      }else{
        this.mainList = this.listJournal;
      }
    }
  },
};
</script>