<template>
  <MainHeader
    title= "Dashboard Laporan Tugas"
    icon= "book-open">
  </MainHeader>
  <div class="container">
    <div class="row upper">
      <BarChart
        v-if="isMounted"
        :label="this.labelBar"
        :data="this.dataBar"
        title="Sebaran Jenis Tugas"
      >
      </BarChart>
      <PieChart
        v-if="isMounted"
        keterangan="Laporan Tugas"
        :persentase="this.persentase"
        :total="this.totalLaporanTugas"
        :label="this.labelPie"
        :data="this.dataPie"
        title="Sebaran Status Laporan Tugas"
      >
      </PieChart>
      <!-- Tabel Laporan Tugas -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card">
        <div class="card-header border-bottom">
            <ul class="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
            <li class="nav-item">
                <a
                class="nav-link active"
                id="presentasi-tab"
                href="#presentasi"
                data-toggle="tab"
                role="tab"
                aria-controls="overview"
                aria-selected="true"
                >Tugas Presentasi</a
                >
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                id="kasussulit-tab"
                href="#kasussulit"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                >Kasus Sulit dan Multidisiplin</a
                >
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                id="publikasi-tab"
                href="#publikasi"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                >Tugas Publikasi</a
                >
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                id="akhir-tab"
                href="#akhir"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                >Tugas Akhir</a
                >
            </li>
            </ul>
        </div>
        <div class="card-body">
          <div class="tab-content" id="cardTabContent">
                <!-- PRESENTASI -->
            <div
                class="tab-pane fade show active"
                id="presentasi"
                role="tabpanel"
                aria-labelledby="presentasi-tab"
            >
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
                        <th>Jenis</th>
                        <th>Judul</th>
                        <th>Modul</th>
                        <th>Konsulen</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in listTugasPresentasi"
                        v-bind:key="item.id"
                    >
                        <td>
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ item.tanggalDibuat }}
                        </td>
                        <td>
                        {{ item.tugasPresentasiModel.jenis }}
                        </td>
                        <td>
                        {{ item.tugasPresentasiModel.judulMakalah }}
                        </td>
                        <td>
                        {{ item.tugasPresentasiModel.modulModel.namaModul }}
                        </td>
                        <td>
                        {{ item.konsulenModel.pengguna.name }}
                        </td>
                         <td>
                        {{ item.status }}
                        </td>
                        <td>
                        <router-link
                            :to="'laporantugas/tugaspresentasi/' + item.idLaporanTugas"
                        >
                            <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!-- END PRESENTASI -->

            <!-- Data table nya blm kebaca -->
            <!-- KASUS SULIT -->
            <div
                class="tab-pane fade"
                id="kasussulit"
                role="tabpanel"
                aria-labelledby="kasussulit-tab"
            >
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
                        <th>Nama Pertemuan</th>
                        <th>Kasus</th>
                        <th>Konsulen</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in listPembahasanKasusSulitMultidisiplin"
                        v-bind:key="item.id"
                    >
                        <td>
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ item.tanggalDibuat }}
                        </td>
                        <td>
                        {{ item.pembahasanKasusSulitMultidisiplinModel.namaPertemuan }}
                        </td>
                        <td>
                        {{ item.pembahasanKasusSulitMultidisiplinModel.kasusYangDibahas }}
                        </td>
                        <td>
                        {{ item.konsulenModel.pengguna.name }}
                        </td>
                         <td>
                        {{ item.status }}
                        </td>
                        <td>
                        <router-link
                            :to="'laporantugas/tugaskasussulit/' + item.idLaporanTugas"
                        >
                            <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!-- END KASUS SULIT -->

            <!-- PUBLIKASI -->
            <div
                class="tab-pane fade"
                id="publikasi"
                role="tabpanel"
                aria-labelledby="publikasi-tab"
            >
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
                        <th>Judul</th>
                        <th>Event</th>
                        <th>Konsulen</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in listTugasPublikasi"
                        v-bind:key="item.id"
                    >
                        <td>
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ item.tanggalDibuat }}
                        </td>
                        <td>
                        {{ item.tugasPublikasiModel.judulPublikasi }}
                        </td>
                        <td>
                        {{ item.tugasPublikasiModel.eventPublikasi }}
                        </td>
                        <td>
                        {{ item.konsulenModel.pengguna.name }}
                        </td>
                         <td>
                        {{ item.status }}
                        </td>
                        <td>
                        <router-link
                            :to="'laporantugas/tugaspublikasi/' + item.idLaporanTugas"
                        >
                            <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!-- END PUBLIKASI -->

            <!-- TUGAS AKHIR -->
            <div
                class="tab-pane fade"
                id="akhir"
                role="tabpanel"
                aria-labelledby="akhir-tab"
            >
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
                        <th>Judul</th>
                        <th>Stage</th>
                        <th>Konsulen</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in listTugasPenelitianAkhir"
                        v-bind:key="item.id"
                    >
                        <td>
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ item.tanggalDibuat }}
                        </td>
                        <td>
                        {{ item.tugasPenelitianAkhirModel.judulProposal }}
                        </td>
                        <td>
                        {{ item.tugasPenelitianAkhirModel.stage }}
                        </td>
                        <td>
                        {{ item.konsulenModel.pengguna.name }}
                        </td>
                         <td>
                        {{ item.status }}
                        </td>
                        <td>
                        <router-link
                            :to="'laporantugas/tugasakhir/' + item.idLaporanTugas"
                        >
                            <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!-- END TUGAS AKHIR -->

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
  name: "MenuLaporanTugas",
  data() {
    return {
      labelBar: [],
      dataBar: [],
      labelPie: [],
      dataPie: [],
      totalLaporanTugas: Number,
      persentase: Number,
      listTugasPresentasi: Array,
      listPembahasanKasusSulitMultidisiplin: Array,
      listTugasPublikasi: Array,
      listTugasPenelitianAkhir: Array,
      isMounted: false,
      ready: false
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
    }
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/laporantugas/", { headers: authHeader() })
      .then((resp) => {
        console.warn(resp.data);
        this.labelBar = resp.data.labelJenisTugas;
        this.dataBar = resp.data.listJumlahTugasPerJenis;
        this.labelPie = resp.data.labelStatus;
        this.dataPie = resp.data.listJumlahLaporanPerStatus;
        this.totalLaporanTugas = resp.data.totalLaporanTugas;
        this.persentase = resp.data.persentaseDiterima;
        this.listTugasPresentasi = resp.data.listTugasPresentasi;
        this.listPembahasanKasusSulitMultidisiplin = resp.data.listPembahasanKasusSulitMultidisiplin;
        this.listTugasPublikasi = resp.data.listTugasPublikasi;
        this.listTugasPenelitianAkhir = resp.data.listTugasPenelitianAkhir;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
      });
  }
};
</script>