<template>
  <LightHeader
    v-if="getReady"
    :title="
      'Detail Kompetensi ' +
      this.data.kompetensiLaporan.kompetensi.namaKompetensi
    "
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="getReady">
    <div class="row container justify-content-center">
      <PieChart
        keterangan="Target Tercapai"
        :persentase="this.data.persentase"
        :total="this.data.listLaporanPasien.length"
        :label="this.data.label"
        :data="this.data.jumlah"
        :title="
          'Pencapaian Kompetensi ' +
          this.data.kompetensiLaporan.kompetensi.namaKompetensi
        "
      />
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Kompetensi</b>
          </div>
          <div class="card-body">
            <table cellpadding="5">
              <tbody>
                <tr>
                  <th>Nama Kompetensi&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{
                      data.kompetensiLaporan.kompetensi.namaKompetensi
                    }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Jenis Kompetensi&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b
                      v-if="
                        !this.data.kompetensiLaporan.kompetensi.kompetensiLanjut
                      "
                      >Dasar</b
                    >
                    <b
                      v-if="
                        this.data.kompetensiLaporan.kompetensi.kompetensiLanjut
                      "
                    >
                      Lanjut</b
                    >
                  </th>
                </tr>
                <tr>
                  <th>Target&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.kompetensiLaporan.kompetensi.target }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Deskripsi&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.kompetensiLaporan.kompetensi.deskripsi }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Residen&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.residen.pengguna.name }}</b>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="row container justify-content-center">
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b
              >Daftar Pasien Dengan Tindakan
              {{ data.kompetensiLaporan.kompetensi.namaKompetensi }}</b
            >
          </div>
          <div class="card-body">
            <div class="datatable" v-if="getReady">
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
                    v-for="(item, index) in data.listLaporanPasien"
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
import LightHeader from "@/components/LightHeader";
import dataTableLoader from "@/js/datatable.js";
import PieChart from "@/components/PieChart";

export default {
  name: "DetailKompetensi",
  components: { LightHeader, PieChart },
  data() {
    return {
      data: null,
      ready: false,
      subtitle: null,
      residen: null,
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
        "http://localhost:8000/api/dashboardResiden/kompetensilaporan/" +
          this.$route.params.idKompetensiLaporan
      )
      .then((resp) => {
        console.log(resp.data);
        this.data = resp.data;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.ready = true;
        dataTableLoader();
      });
  },
};
</script>