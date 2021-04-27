<template>
  <LightHeader
    v-if="isMounted"
    title="Detail Laporan Pasien"
    :subtitle="this.subtitle"
    icon="file-text"
  >
  </LightHeader>
  <div class="container">
    <div class="row mr-2 mb-4 justify-content-end upper">
      <button class="btn btn-danger mr-3">Delete</button>
      <button class="btn btn-warning">Edit</button>
    </div>
    <div class="row">
      <div class="col-xxl-4 col-xl-4 mb-4" v-if="isMounted">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Laporan Pasien</b>
          </div>
          <div class="card-body">
            <table cellpadding="5">
              <tbody>
                <tr>
                  <th>Inisial Pasien&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ posts.inisialPasien }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Usia Pasien&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ posts.usiaPasien }}</b>
                  </th>
                </tr>
                <tr>
                  <th>No Rekam Medis&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ posts.noRekamMedis }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Pasien Jaga&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b v-if="this.posts.isJaga">Ya</b>
                    <b v-if="!this.posts.isJaga">Tidak</b>
                  </th>
                </tr>
                <tr v-if="this.posts.isJaga">
                  <th>Tanggal Jaga&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ posts.tanggalJaga }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Konsulen&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ posts.konsulen.pengguna.name }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Status&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <div class="badge badge-primary badge-pill">
                      {{ posts.status }}
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CardTimeline
        title="Update Status"
        :updateStatus="this.posts.updateStatus"
        v-if="isMounted"
      ></CardTimeline>
      <CardTimelineEnter
        title="Feedback"
        :updateStatus="this.posts.feedback"
        v-if="isMounted"
      ></CardTimelineEnter>
    </div>
    <div class="row">
      <div class="col-xxl-12 col-xl-12 mb-4" v-if="isMounted">
        <div class="card card-header-actions h-100">
          <div class="card-header">Diagnosis</div>
          <div class="card-body">
            <div class="container">{{ posts.diagnosis }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="isMounted">
      <div class="col-xxl-6 col-xl-6">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Tindakan yang Dilakukan</b>
          </div>
          <div class="card-body">
            <div class="container">
              <div v-for="item in listKategoriTindakan" v-bind:key="item.id">
                <h5 v-if="this.tempTindakan.includes(item.idKategoriTindakan)">
                  {{ item.namaKategoriTindakan }}
                </h5>
              </div>
              <div v-for="item in tempTindakanLain" v-bind:key="item.id">
                <h5>
                  {{ item }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Kompetensi yang Didapatkan</b>
          </div>
          <div class="card-body">
            <div class="container">
              <div v-for="item in listKompetensi" v-bind:key="item.id">
                <h5 v-if="this.tempKompetensi.includes(item.idKompetensi)">
                  {{ item.namaKompetensi }}
                </h5>
              </div>
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
// import dataTableLoader from "@/js/datatable";
import CardTimeline from "@/components/CardTimeline.vue";
import CardTimelineEnter from "@/components/CardTimelineEnter.vue";

export default {
  name: "DetailMenuLaporanPasien",
  data() {
    return {
      posts: {
        idLaporanPasien: null,
        inisialPasien: null,
        usiaPasien: null,
        noRekamMedis: null,
        diagnosis: null,
        isJaga: false,
        tanggalJaga: null,
        idKonsulen: null,
        idResiden: JSON.parse(localStorage.getItem("userData")).residen
          .idResiden,
        strKompetensi: null,
        strTindakan: null,
        strTindakanLain: null,
        status: null,
        updateStatus: null,
        konsulen: null,
        feedback: null,
      },
      tempKompetensi: [],
      tempTindakan: [],
      tempTindakanLain: [],
      isMounted: false,
      listKompetensi: [],
      listKategoriTindakan: [],
    };
  },
  components: {
    MainHeader,
    LightHeader,
    CardTimeline,
    CardTimelineEnter,
  },
  computed: {
    isDataTableReady() {
      return this.ready;
    },
  },
  methods: {
    strToList(dummy) {
      console.log(dummy);
      if (dummy == undefined) {
        return [];
      }
      var list = dummy.split(",");
      return list;
    },
    strToListNumber(dummy) {
      console.log(dummy);
      if (dummy == undefined) {
        return [];
      }
      var newList = [];
      var list = dummy.split(",");
      var i;
      for (i = 0; i < list.length; i++) {
        newList.push(parseInt(list[i]));
      }
      return newList;
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8000/api/laporan-pasien/" +
          this.$route.params.idLaporanPasien
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.posts.idLaporanPasien = resp.data.idLaporanPasien;
        this.posts.inisialPasien = resp.data.inisialPasien;
        this.posts.usiaPasien = resp.data.usiaPasien;
        this.posts.noRekamMedis = resp.data.noRekamMedis;
        this.posts.diagnosis = resp.data.diagnosis;
        this.posts.isJaga = resp.data.isFromJaga;
        this.posts.tanggalJaga = resp.data.tanggalJaga;
        this.posts.idKonsulen = resp.data.konsulen.idKonsulen;
        this.posts.idResiden = resp.data.konsulen.idKonsulen;
        this.posts.strKompetensi = resp.data.strKompetensi;
        this.posts.strTindakan = resp.data.strTindakan;
        this.posts.strTindakanLain = resp.data.strTindakanLain;
        this.posts.updateStatus = resp.data.updateStatus;
        this.posts.status = resp.data.status;
        this.posts.konsulen = resp.data.konsulen;
        this.posts.feedback = resp.data.feedback;
        this.tempKompetensi = this.strToListNumber(this.posts.strKompetensi);
        this.tempTindakan = this.strToListNumber(this.posts.strTindakan);
        this.tempTindakanLain = this.strToList(this.posts.strTindakanLain);
        this.subtitle =
          resp.data.residen.pengguna.name + " - " + resp.data.residen.npm;
        // this.listUpdateStatus = this.updateStatus.split(",");
        // this.isDataTableReady = true;
        // dataTableLoader();
      });
    axios
      .get("http://localhost:8000/api/laporan-pasien/getformattribute")
      .then((resp) => {
        this.listKompetensi = resp.data.listKompetensi;
        this.listKategoriTindakan = resp.data.listKategoriTindakan;
        this.isMounted = true;
        console.warn(this.listKompetensi);
      });
  },
};
</script>

<style>
th {
  font-weight: normal;
}
</style>