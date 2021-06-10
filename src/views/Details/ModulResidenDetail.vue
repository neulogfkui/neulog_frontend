<template>
  <LightHeader
    v-if="getReady"
    :title="this.title"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="getReady">
    <div class="row mr-2 mb-4 justify-content-end upper">
      <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
      <div v-if="isResiden">
        <button
          id="completeButton"
          class="btn btn-danger mr-4"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          v-if="this.data.status == 'DITOLAK'"
        >
          Hapus
        </button>
        <router-link :to="'/modulresidenform/' + this.data.idModulResiden">
          <button
            class="btn btn-warning"
            v-if="this.data.status != 'DISETUJUI'"
          >
            Edit
          </button>
        </router-link>
      </div>

      <div v-if="isKetuaModul">
        <router-link :to="'/evaluasimodulresiden/' + this.data.idModulResiden">
          <button
            class="btn btn-warning"
            v-if="this.data.status != 'DISETUJUI'"
          >
            Evaluasi
          </button>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Data Modul</div>
          <div class="card-body">
            <table cellpadding="5">
              <tbody>
                <tr>
                  <td>Nama Residen</td>
                  <td>
                    <b>{{ data.residen.pengguna.name }}</b>
                  </td>
                </tr>
                                <tr>
                  <td>NPM Residen</td>
                  <td>
                    <b>{{ data.residen.npm }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Nama Modul</td>
                  <td>
                    <b>{{ data.modul.namaModul }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Tanggal Mulai</td>
                  <td>
                    <b>{{ data.tanggalMulai }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Tanggal Selesai</td>
                  <td>
                    <b>{{ data.tanggalSelesai }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Durasi</td>
                  <td>
                    <b>{{ data.durasi }}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- CARD 2 -->
      <CardTimeline
        title="Update Status"
        :updateStatus="this.data.updateStatus"
        v-if="getReady"
      ></CardTimeline>
      <!-- CARD 3 -->
      <CardTimelineEnter
        v-if="this.data.feedback != null"
        title="Feedback"
        :updateStatus="this.data.feedback"
      ></CardTimelineEnter>
    </div>
  </div>
  <!-- START MODAL -->
  <!-- ------------------------------------------------ -->
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
            Apakah anda yakin untuk menghapus laporan tugas?
          </h5>
          <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
            Loading...
          </h5>
          <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
            Laporan Tugas Berhasil Dihapus!
          </h5>
          <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
            Laporan Tugas Gagal Dihapus!
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
            Laporan tugas akan dihapus dari sistem Neulog. Anda tidak dapat
            mengakses laporan tugas ini kembali
          </h5>
          <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
            Harap tunggu sebentar
          </h5>
          <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
            Laporan tugas Anda sudah dihapus dari sistem Neulog
          </h5>
          <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
            Terjadi kesalahan pada sistem.
          </h5>
        </div>
        <!-- FOOTER MODAL -->
        <div class="modal-footer">
          <div v-if="status == 0">
            <button class="btn btn-primary mr-4" @click="deleteLaporanTugas">
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
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
import LightHeader from "@/components/LightHeader";
import CardTimeline from "@/components/CardTimeline";
import CardTimelineEnter from "@/components/CardTimelineEnter";
import authHeader from "@/services/auth-header";

export default {
  name: "ModulResidenDetail",
  components: { LightHeader, CardTimelineEnter, CardTimeline },
  data() {
    return {
      data: null,
      subtitle: null,
      title:null,
      residen: null,
      status: 0,
      ready: false,
    };
  },
  computed: {
    getReady() {
      return this.ready;
    },
    isResiden() {
      return JSON.parse(localStorage.getItem("user")).roles.includes(
        "ROLE_RESIDEN"
      );
    },
    isKetuaModul() {
      return JSON.parse(localStorage.getItem("user")).roles.includes(
        "ROLE_KETUAMODUL"
      );
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/modulResiden/" +
          this.$route.params.idModulResiden
      )
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        this.residen = resp.data.residen;
        this.title = "Modul " + resp.data.modul.namaModul;
        this.subtitle = resp.data.residen.npm + " - " + resp.data.residen.pengguna.name;
        this.ready = true;
      });
  },
  methods: {
    deleteLaporanTugas(e) {
      this.status = 1;
      console.warn(this.posts);
      axios
        .get(
          "http://localhost:8080/modulResiden/delete/" +
            this.$route.params.idModulResiden,
          { headers: authHeader() }
        )
        .then((result) => {
          if (result.data == "Success") {
            this.status = 2;
          } else {
            this.status = 3;
          }
          console.warn(result.data);
        });
      e.preventDefault();
    },
  },
};
</script>
<style>
th {
  word-wrap: break-word;
}
</style>