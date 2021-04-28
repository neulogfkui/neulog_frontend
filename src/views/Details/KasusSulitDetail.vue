<template>
  <LightHeader
    v-if="getReady"
    title="Detail Kasus Sulit dan Multidisiplin"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="getReady">
    <div class="row mr-2 mb-4 justify-content-end upper">
      <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
      <button
        id="completeButton"
        class="btn btn-danger mr-4"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        v-if="this.data.laporanTugas.status == 'DITOLAK'"
      >
        Hapus
      </button>
      <router-link
        :to="'/kasussulitform/' + this.data.laporanTugas.idLaporanTugas"
      >
        <button
          class="btn btn-warning"
          v-if="this.data.laporanTugas.status != 'DITERIMA'"
        >
          Edit
        </button>
      </router-link>
    </div>
    <div class="row">
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Data Tugas Presentasi</div>
          <div class="card-body">
            <table cellpadding="5">
              <tbody>
                <tr>
                  <td>Tanggal&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <b>{{ data.laporanTugas.tanggalDibuat }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Nama Pertemuan&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <b>{{
                      data.laporanTugas.pembahasanKasusSulitMultidisiplinModel.namaPertemuan
                    }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Kasus yang Dibahas&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <b>{{
                      data.laporanTugas.pembahasanKasusSulitMultidisiplinModel.kasusYangDibahas
                    }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Konsulen&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <b>{{ data.laporanTugas.konsulenModel.pengguna.name }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Link&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <b>{{ data.laporanTugas.linkTugas }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Status&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <div class="badge badge-primary badge-pill">
                      {{ data.laporanTugas.status }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td><b></b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- CARD 2 -->
      <CardTimeline
        title="Update Status"
        :updateStatus="this.data.laporanTugas.updateStatus"
        v-if="isMounted"
      ></CardTimeline>
      <!-- CARD 3 -->
      <CardTimelineEnter
        v-if="this.data.laporanTugas.feedback != null"
        title="Feedback"
        :updateStatus="this.data.laporanTugas.feedback"
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

export default {
  name: "KasusSulitDetail",
  components: { LightHeader, CardTimelineEnter, CardTimeline },
  data() {
    return {
      delete: { idLaporanTugas: this.$route.params.idLaporanTugas },
      data: null,
      feedback: String,
      subtitle: String,
      residen: null,
      delete: { idLaporanTugas: null },
      status: 0,
      ready: false,
    };
  },
  computed: {
    getReady() {
      return this.ready;
    },
  },
  mounted() {
    this.delete.idLaporanTugas = this.$route.params.idLaporanTugas;
    axios
      .get(
        "http://localhost:8000/api/dashboardPengurusAkademik/laporantugas/" +
          this.$route.params.idLaporanTugas
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
      });
    axios
      .get(
        "http://localhost:8000/api/dashboardPengurusAkademik/getResiden/" +
          this.$route.params.idLaporanTugas
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.residen = resp.data;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.isMounted = true;
        this.ready = true;
      });
  },
  methods: {
    deleteLaporanTugas(e) {
      this.status = 1;
      console.warn(this.posts);
      axios
        .post(
          "http://localhost:8000/laporantugas/deletepembahasankasussulit/",
          this.delete
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
th{
  word-wrap: break-word;
}
</style>