<template>
  <MainHeader
    title= "Dashboard Laporan Pasien"
    :subtitle="this.subtitle"
    icon= "file-text">
  </MainHeader>
  <div class="container">
    <div class="row upper justify-content-center">
      <!-- <BarChart
        v-if="isMounted"
        :label="this.labelBarTindakan"
        :data="this.dataBarTindakan"
        title="Sebaran Tindakan"
      >
      </BarChart> -->
      <PieChart
        v-if="isMounted"
        keterangan="Laporan Pasien Dibuat"
        :persentase="this.persentase"
        :total="this.totalLaporanPasien"
        :label="this.labelPie"
        :data="this.dataPie"
        title="Sebaran Status Laporan Pasien"
      >
      </PieChart>
      <!-- Masih error -->
      <BarChart
        v-if="isMounted"
        :label="this.labelBarLaporan"
        :data="this.dataBarLaporan"
        title="Sebaran Tipe Laporan"
      >
      </BarChart>
      <!-- Tabel Laporan Pasien -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Laporan Pasien</b>
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
                    <th>Residen</th>
                    <th>BPJP</th>
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
                      {{ item.residen.pengguna.name }}
                    </td>
                    <td>
                      {{ item.konsulen.pengguna.name }}
                    </td>
                    <td v-if="item.isFromJaga">Ya</td>
                    <td v-if="!item.isFromJaga">Tidak</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <router-link
                        :to="'laporanpasien/' + item.idLaporanPasien"
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
import BarChart from "@/components/BarChart.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "MenuLaporanPasien",
  data() {
    return {
      labelBarTindakan: [],
      dataBarTindakan: [],
      labelPie: [],
      dataPie: [],
      totalLaporanPasien: Number,
      persentase: Number,
      labelBarLaporan: [],
      dataBarLaporan: [],
      listLaporanPasien: [],
      isMounted: false,
      ready: false,
      subtitle: String,
    };
  },
  components: {
    MainHeader,
    PieChart,
    BarChart,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    },
    getNamaPA(){
      return JSON.parse(localStorage.getItem("userData")).pengurusAkademik.pengguna.name;
    }
  },
  created() {
    this.subtitle = this.getNamaPA;
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/laporanpasien/", { headers: authHeader() })
      .then((resp) => {
        console.warn(resp.data);
        this.labelBarTindakan = resp.data.labelTindakan;
        this.dataBarTindakan = resp.data.listJumlahTindakanPerKategori;
        this.labelPie = resp.data.labelStatus;
        this.dataPie = resp.data.listJumlahLaporanPerStatus;
        this.totalLaporanPasien = resp.data.totalLaporanPasien;
        this.persentase = resp.data.persentaseDisetujui;
        this.labelBarLaporan = resp.data.labelLaporan;
        this.dataBarLaporan = resp.data.listJumlahLaporanPasienPerTipe;
        this.listLaporanPasien = resp.data.listLaporanPasien;
        this.isMounted = true;
        dataTableLoader();
        this.ready = true;
      });
  }
};
</script>