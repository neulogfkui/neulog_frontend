<template>
  <LightHeader
    v-if="isMounted"
    title="Detail Laporan Pasien"
    :subtitle="this.subtitle"
    icon="file-text"
  >
  </LightHeader>
  <div class="container" v-if="isMounted">
    <div class="row mr-2 mb-4 justify-content-end upper">
      <div v-if="isResiden">
        <button
          id="completeButton"
          class="btn btn-danger mr-4"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          v-if="this.posts.status == 'DITOLAK'"
        >
          Delete
        </button>
        <router-link :to="'/laporanpasienform/' + this.posts.idLaporanPasien">
          <button
            class="btn btn-warning"
            v-if="this.posts.status != 'DISETUJUI'"
          >
            Edit
          </button>
        </router-link>
      </div>

      <div v-if="isKonsulen">
        <router-link :to="'/evaluasilaporanpasien/' + this.posts.idLaporanPasien">
          <button
            class="btn btn-warning"
            v-if="this.posts.status != 'DISETUJUI'"
          >
            Evaluasi
          </button>
        </router-link>
      </div>
      
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-4 mb-4">
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
                    <b v-if="this.posts.tanggalJaga != null">Ya</b>
                    <b v-if="this.posts.tanggalJaga == null">Tidak</b>
                  </th>
                </tr>
                <tr v-if="this.posts.tanggalJanga != null">
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
        v-if="this.posts.feedback != null"
        :updateStatus="this.posts.feedback"
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
    <!-- DIV BESAR MODAL -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- HEADER MODAL -->
          <div class="modal-header">
            <h5 v-if="status == 0" class="modal-title" id="exampleModalLabel">
              Apakah anda yakin untuk menghapus laporan pasien?
            </h5>
            <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
              Loading...
            </h5>
            <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
              Laporan Pasien Berhasil Dihapus!
            </h5>
            <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
              Laporan Pasien Gagal Dihapus!
            </h5>
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&#xD7;</span>
            </button>
          </div>
          <!-- BODY MODAL -->
          <div class="modal-body">
            <h5 v-if="status == 0" class="modal-title" id="exampleModalLabel">
              Laporan pasien akan dihapus dari sistem Neulog. Anda tidak dapat
              mengakses laporan tugas ini kembali
            </h5>
            <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
              Harap tunggu sebentar
            </h5>
            <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
              Laporan pasien Anda sudah dihapus dari sistem Neulog
            </h5>
            <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
              Terjadi kesalahan pada sistem.
            </h5>
          </div>
          <!-- FOOTER MODAL -->
          <div class="modal-footer">
            <div v-if="status == 0">
              <button class="btn btn-primary mr-4" @click="deleteLaporanPasien">
                Ya
              </button>

              <button class="btn btn-danger" type="button" data-dismiss="modal">
                Tidak
              </button>
            </div>
            <div v-if="status == 1"></div>
            <div v-if="status == 2">
              <router-link to="/"
                ><button class="btn btn-primary" data-dismiss="modal">
                  Ok
                </button></router-link
              >
            </div>
            <div v-if="status == 3">
              <button
                class="btn btn-primary"
                id="buttonFailed"
                type="button"
                data-dismiss="modal"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END MODAL -->
    <!-- ------------------------------------------------ -->
  </div>
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import LightHeader from "@/components/LightHeader.vue";
// import dataTableLoader from "@/js/datatable";
import CardTimeline from "@/components/CardTimeline.vue";
import CardTimelineEnter from "@/components/CardTimelineEnter.vue";
import authHeader from "@/services/auth-header";
import loadScript from '@/js/scripts.js';

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
        idResiden: null,
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
      status: 0,
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
    isResiden() {
      return JSON.parse(localStorage.getItem("user")).roles.includes(
        "ROLE_RESIDEN"
      );
    },
    isKonsulen() {
      return JSON.parse(localStorage.getItem("user")).roles.includes(
        "ROLE_KONSULEN"
      );
    },
  },
  methods: {
    strToList(dummy) {
      if (dummy == undefined) {
        return [];
      }
      var list = dummy.split(",");
      return list;
    },
    strToListNumber(dummy) {
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
    deleteLaporanPasien(e) {
      this.status = 1;
      axios
        .get(
          "http://localhost:8000/api/laporan-pasien/delete/" +
            this.$route.params.idLaporanPasien,  { headers: authHeader() }
        )
        .then((result) => {
          if (result.data == "Success") {
            this.status = 2;
          } else {
            this.status = 3;
          }
        });
      e.preventDefault();
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8000/api/laporan-pasien/" +
          this.$route.params.idLaporanPasien
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
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
        this.posts.idResiden = resp.data.residen.idResiden;
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
      .get(
        "http://localhost:8000/api/laporan-pasien/getformattribute"
      )
      .then((resp) => {
        this.listKompetensi = resp.data.listKompetensi;
        this.listKategoriTindakan = resp.data.listKategoriTindakan;
        this.isMounted = true;
      });
    loadScript();
  },
};
</script>

<style>
th {
  font-weight: normal;
}
</style>