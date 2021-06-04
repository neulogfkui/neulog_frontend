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
    </div>
      <!-- Tabel Laporan Tugas -->

    <nav class="nav nav-borders mt-4" v-if="isDataTableReady">
      <router-link class="nav-link" to="/dashboardpengurusakademik/laporantugas/tugaspresentasi">Tugas Presentasi</router-link>
      <router-link class="nav-link active" to="/dashboardpengurusakademik/laporantugas/kasussulit">Kasus Sulit dan Multidisiplin</router-link>
      <router-link class="nav-link" to="/dashboardpengurusakademik/laporantugas/tugaspublikasi">Tugas Publikasi</router-link>
      <router-link class="nav-link" to="/dashboardpengurusakademik/laporantugas/tugasakhir">Tugas Akhir</router-link>
    </nav>
	  <hr class="nav-underline mt-0 mb-4"/>

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
                            :to="'tugaskasussulit/' + item.idLaporanTugas"
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