<template>
  <LightHeader
    title="Evaluasi Laporan Tugas"
    icon="file-text"
    :subtitle="subtitleHeader"
  />
  <div class="container" v-if="isReady">
    <form @submit="postData">
      <div class="row">
        <!-- CARD KIRI -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Data Tugas</b>
            </div>
            <div class="card-body">
              <table cellpadding="10">
                <tbody>
                  <tr>
                    <th>Residen</th>
                    <th>
                      <b>{{ data.penggunaresiden.name }}</b>
                    </th>
                  </tr>
                  <tr>
                    <th>Tanggal Dibuat</th>
                    <th>
                      <b>{{ data.tugas.tanggalDibuat }}</b>
                    </th>
                  </tr>
                  <tr>
                    <th>Link Tugas</th>
                    <th>
                      <b>{{ data.tugas.linkTugas }}</b>
                    </th>
                  </tr>
                  <!-- TUGAS PRESENTASI -->
                  <tr v-if="!(this.data.tugas.tugasPresentasiModel == null)">
                    <th>Jenis Presentasi</th>
                    <th>
                      <b>{{ data.tugas.tugasPresentasiModel.jenis }}</b>
                    </th>
                  </tr>
                  <tr v-if="!(this.data.tugas.tugasPresentasiModel == null)">
                    <th>Modul</th>
                    <th>
                      <b>{{
                        data.tugas.tugasPresentasiModel.modulModel.namaModul
                      }}</b>
                    </th>
                  </tr>
                  <tr v-if="!(this.data.tugas.tugasPresentasiModel == null)">
                    <th>Judul Makalah</th>
                    <th>
                      <b>{{ data.tugas.tugasPresentasiModel.judulMakalah }}</b>
                    </th>
                  </tr>
                  <!-- KASUS SULIT -->
                  <tr
                    v-if="
                      !(
                        this.data.tugas
                          .pembahasanKasusSulitMultidisiplinModel == null
                      )
                    "
                  >
                    <th>Kasus Yang Dibahas</th>
                    <th>
                      <b>{{
                        data.tugas.pembahasanKasusSulitMultidisiplinModel
                          .kasusYangDibahas
                      }}</b>
                    </th>
                  </tr>
                  <tr
                    v-if="
                      !(
                        this.data.tugas
                          .pembahasanKasusSulitMultidisiplinModel == null
                      )
                    "
                  >
                    <th>Nama Pertemuan</th>
                    <th>
                      <b>{{
                        data.tugas.pembahasanKasusSulitMultidisiplinModel
                          .namaPertemuan
                      }}</b>
                    </th>
                  </tr>
                  <!-- TUGAS PUBLIKASI -->
                  <tr v-if="!(this.data.tugas.tugasPublikasiModel == null)">
                    <th>Event Publikasi</th>
                    <th>
                      <b>{{ data.tugas.tugasPublikasiModel.eventPublikasi }}</b>
                    </th>
                  </tr>
                  <tr v-if="!(this.data.tugas.tugasPublikasiModel == null)">
                    <th>Judul Publikasi</th>
                    <th>
                      <b>{{ data.tugas.tugasPublikasiModel.judulPublikasi }}</b>
                    </th>
                  </tr>
                  <!-- TUGAS PENELITIAN AKHIR -->
                  <tr
                    v-if="!(this.data.tugas.tugasPenelitianAkhirModel == null)"
                  >
                    <th>Judul Proposal</th>
                    <th>
                      <b>{{
                        data.tugas.tugasPenelitianAkhirModel.judulProposal
                      }}</b>
                    </th>
                  </tr>
                  <tr
                    v-if="!(this.data.tugas.tugasPenelitianAkhirModel == null)"
                  >
                    <th>Jenis Tugas</th>
                    <th>
                      <b>{{
                        data.tugas.tugasPenelitianAkhirModel.jenisTugas
                      }}</b>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- CARD KANAN -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Formulir Evaluasi</b>
            </div>
            <div class="card-body">
              <div class="container">
                <h4 class="text-secondary"><b>Status Evaluasi</b></h4>
              </div>
              <div class="row container">
                <div class="col container m-2">
                  <input
                    class="mr-4"
                    type="radio"
                    name="status"
                    value="DISETUJUI"
                    v-model="posts.status"
                  />
                  <label>DISETUJUI</label>
                </div>
                <div class="col container m-2">
                  <input
                   class="mr-4"
                    type="radio"
                    name="status"
                    value="DITOLAK"
                    v-model="posts.status"
                  />
                  <label>DITOLAK</label>
                </div>
              </div>

              <div class="col container">
                <label class="text-primary">Feedback Konsulen</label>
                <br>
                <textarea
                  class="form-control form-control-lg h-10"
                  placeholder="Masukan Feedback"
                  v-model="posts.feedback"
                />
                <br />
              </div>
            </div>
          </div>
        </div>
        <!-- START MODAL -->
        <!-- ------------------------------------------------ -->
        <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
        <div class="row container justify-content-center align-self-center">
          <button
            id="completeButton"
            class="btn btn-primary mr-4"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            @click="refreshSubmitted"
          >
            Kirim
          </button>
          <router-link to="/">
            <button class="btn btn-danger">Batal</button>
          </router-link>
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
                <h5
                  v-if="status == 0"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Apakah anda yakin untuk mengirim laporan tugas?
                </h5>
                <h5
                  v-if="status == 1"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Loading...
                </h5>
                <h5
                  v-if="status == 2"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Laporan Tugas Berhasil Dikirimkan!
                </h5>
                <h5
                  v-if="status == 3"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Laporan Tugas Gagal Dikirimkan!
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
                <h5
                  v-if="status == 0"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Anda dapat mengubah laporan ini sebelum konsulen memberi
                  evaluasi
                </h5>
                <h5
                  v-if="status == 1"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Harap tunggu sebentar
                </h5>
                <h5
                  v-if="status == 2"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Residen telah diberikan notifikasi
                </h5>
                <h5
                  v-if="status == 3"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Terjadi kesalahan pada sistem. Mohon lengkapi data pada
                  formulir.
                </h5>
              </div>
              <!-- FOOTER MODAL -->
              <div class="modal-footer">
                <div v-if="status == 0">
                  <button class="btn btn-primary mr-4" type="submit">Ya</button>

                  <button
                    class="btn btn-danger"
                    type="button"
                    data-dismiss="modal"
                  >
                    Tidak
                  </button>
                </div>
                <div v-if="status == 1"></div>
                <div v-if="status == 2">
                  <router-link :to="'/'"
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
    </form>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";

export default {
  name: "EvaluasiLaporanTugas",
  data() {
    return {
      posts: {
        idLaporanTugas: null,
        feedback: null,
        updateStatus: null,
        status: null,
      },
      data: null,
      subtitleHeader: null,
      ready: false,
      tugas: null,
      status: 0,
    };
  },
  components: { LightHeader },
  mounted() {
    this.posts.idLaporanTugas = this.$route.params.idLaporanTugas;
    axios
      .get(
        "https://neulogfkui.herokuapp.com/laporantugas/" +
          this.$route.params.idLaporanTugas,
        { headers: authHeader() }
      )
      .then((resp) => {
        this.data = resp.data;
        console.log(this.data);
        this.subtitleHeader =
          this.data.residen.npm + " - " + this.data.penggunaresiden.name;
        this.ready = true;
      });
  },
  computed: {
    isReady() {
      return this.ready;
    },
  },
  methods: {
    postData(e) {
      this.status = 1;
      console.warn(this.posts);

      var url = "https://neulogfkui.herokuapp.com/laporantugas/evaluasitugas/";

      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        if (result.data == "Success") {
          this.status = 2;
        } else {
          this.status = 3;
        }
        console.warn(result);
      });
      e.preventDefault();
    },
  },
};
</script>
