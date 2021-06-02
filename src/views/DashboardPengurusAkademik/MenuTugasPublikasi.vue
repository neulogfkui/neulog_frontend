<template>
  <MainHeader
    title= "Dashboard Laporan Tugas"
    :subtitle="this.subtitle"
    icon= "book-open">
  </MainHeader>
  <div class="container">
    <div class="row upper justify-content-center">
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

      <!-- TAB NAVBAR -->	
      <div class="container mt-5">
	  <nav class="nav nav-borders">
		<a class="nav-link" href="/dashboardpengurusakademik/laporantugas/tugaspresentasi">Tugas Presentasi</a>
		<a class="nav-link" href="/dashboardpengurusakademik/laporantugas/kasussulit">Kasus Sulit dan Multidisiplin</a>
        <a class="nav-link active ml-0" href="#">Tugas Publikasi</a>
        <a class="nav-link" href="/dashboardpengurusakademik/laporantugas/tugasakhir">Tugas Akhir</a>
	  </nav>
	  <hr class="nav-underline mt-0"/>
      </div>

      <div v-if="isDataTableReady" class="container">
		<div class="card mb-4">
        <div class="card card-header-actions">
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
                            :to="'tugaspublikasi/' + item.idLaporanTugas"
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
  </div>
  <!-- END PRESENTASI -->

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
  mounted() {
    this.subtitle = this.getNamaPA;
    axios
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/laporantugas/", { headers: authHeader() })
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
        dataTableLoader();
        this.ready = true;
      });
  }
};
</script>