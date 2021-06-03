<template>
  <MainHeader
    title="Dashboard Laporan Pasien"
    :subtitle="this.subtitle"
    icon="user"
    :withLogo="false"
  />
  <div class="container" v-if="isDataTableReady">
    <div class="row upper">
      <PieChart
        keterangan="Laporan Pasien"
        :persentase="this.persentase"
        :total="this.createdLaporanPasien"
        :label="this.label"
        :data="this.jumlah"
        title="Sebaran Status Laporan Pasien"
      >
      </PieChart>
      <BigNumberCard
        title="Rata - Rata Laporan Pasien Per Bulan"
        :count="avgPasienPerMonth"
        caption="Pasien / Bulan"
      />
      <BarChart
        :label="this.labelBar"
        :data="this.dataBar"
        title="Sebaran Pasien"
      />
      <!-- Tabel Laporan Pasien -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>List Laporan Pasien</b>
          </div>
          <div class="card-body">
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
                    <th>Inisial Pasien</th>
                    <th>Usia</th>
                    <th>No Rekam Medis</th>
                    <th>Konsulen</th>
                    <th>Jaga</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listLaporanPasien"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.tanggalDibuat }}
                    </td>
                    <td>
                      {{ item.inisialPasien }}
                    </td>
                    <td>
                      {{ item.usiaPasien }}
                    </td>
                    <td>
                      {{ item.noRekamMedis }}
                    </td>
                    <td>
                      {{ item.konsulen.pengguna.name }}
                    </td>
                    <td v-if="item.isFromJaga">Ya</td>
                    <td v-if="!item.isFromJaga">Tidak</td>
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
import authHeader from "@/services/auth-header";
import dataTableLoader from "@/js/datatable";

export default {
  name: "DashboardLaporanPasien",
  data() {
    return {
      createdLaporanPasien: Number,
      label: [],
      jumlah: [],
      labelBar: [],
      dataBar: [],
      avgPasienPerMonth: Number,
      listLaporanPasien: Array,
      persentase: Number,
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
  },
  mounted() {
    axios
      .get(
        "https://neulogfkui.herokuapp.com/api/dashboardResiden/laporanPasien/" +
          this.$route.params.idResiden,
        {
          headers: authHeader(),
        }
      )
      .then((resp) => {
        console.warn(resp);
        this.createdLaporanPasien = resp.data.createdLaporanPasien;
        this.label = resp.data.label;
        this.jumlah = resp.data.jumlah;
        this.listLaporanPasien = resp.data.listLaporanPasien;
        this.persentase = resp.data.persentase;
        this.labelBar = resp.data.labelBar;
        this.dataBar = resp.data.dataBar;
        this.avgPasienPerMonth = resp.data.avgPasienPerMonth;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.isMounted = true;
        dataTableLoader();
        this.ready = true;
      });
  },
  methods: {},
};
</script>