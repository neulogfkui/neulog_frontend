<template>
<LightHeader
    v-if="isMounted"
    title= "Detail Laporan Pasien"
    :subtitle = this.subtitle
    icon= "file-text">
</LightHeader>
<div class="container upper">
    <div class="row">
        <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Laporan Pasien</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Tanggal
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tanggal }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Inisial Pasien
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ inisialPasien }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Usia
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ usia }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            No Rekam Medis
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ noRekam }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Pasien Jaga
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text" v-if="jaga">
                            Ya
                        </p>
                        <p class="card-text" v-if="!jaga">
                            Tidak
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Konsulen
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ konsulenName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Status
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ status }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Update Status</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4" v-for="(item) in updateStatus"
                    v-bind:key="item.id">
                        <p class="card-text">
                            {{ item }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Feedback</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                        <p class="card-text">
                            {{ feedback }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Diagnosis</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                        <p class="card-text">
                            {{ diagnosis }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Tindakan yang Dilakukan</b>
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
                    <th>Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listTindakan"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.namaTindakan }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Kompetensi yang Didapatkan</b>
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
                    <th>Kompetensi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listKompetensi"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.kompetensi.namaKompetensi }}
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
import LightHeader from "@/components/LightHeader.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "DetailMenuLaporanPasien",
  data() {
    return {
      subtitle: String,
      laporanPasien: Array,
      tanggal: String,
      inisialPasien: String,
      usia: String,
      noRekam: String,
      jaga: Boolean,
      konsulenName: String,
      status: String,
      updateStatus: Array,
      feedback: String,
      diagnosis: String,
      listTindakan: Array,
      listKompetensi: Array,
      isMounted: false,
      ready: false
    };
  },
  components: {
    MainHeader,
    LightHeader,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    }
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/laporanpasien/" + this.$route.params.idLaporanPasien, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.laporanPasien = resp.data.laporanPasien;
        this.tanggal = resp.data.laporanPasien.tanggalDibuat
        this.inisialPasien = resp.data.laporanPasien.inisialPasien
        this.usia = resp.data.laporanPasien.usiaPasien
        this.noRekam = resp.data.laporanPasien.noRekamMedis
        this.jaga = resp.data.laporanPasien.isFromJaga
        this.konsulenName = resp.data.laporanPasien.konsulen.pengguna.name
        this.status = resp.data.laporanPasien.status
        this.updateStatus = resp.data.updateStatus
        this.feedback = resp.data.laporanPasien.feedback
        this.diagnosis = resp.data.laporanPasien.diagnosis
        this.listTindakan = resp.data.laporanPasien.listTindakan
        this.listKompetensi = resp.data.listKompetensiLaporan
        this.isMounted = true;
        this.subtitle = resp.data.laporanPasien.residen.pengguna.name + " - " + resp.data.laporanPasien.residen.npm
        dataTableLoader();
      });
  }
};
</script>