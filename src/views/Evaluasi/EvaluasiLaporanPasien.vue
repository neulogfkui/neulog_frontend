<template>
  <LightHeader
    title="Evaluasi Laporan Pasien"
    icon="file-text"
    v-if="isReady"
    :subtitle="subtitleHeader"
  />
  <div class="container" v-if="isReady">
    <form @submit="postData">
      <div class="row">
        <!-- CARD KIRI -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="card card-header-actions h-40">
            <div class="card-header">
              <b>Data Tugas</b>
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
        <!-- CARD KANAN -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="col">
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

                <div class="col container mt-4">
                  <label class="text-primary">Feedback Konsulen</label>
                  <br />
                  <textarea
                    class="form-control form-control-lg h-10"
                    placeholder="Masukan Feedback"
                    v-model="posts.feedback"
                  />
                  <br />
                </div>

                <div class="container mt-4">
                  <h4 class="text-secondary"><b>Daftar Kompetensi</b></h4>
                </div>

                <div class="container mt-3">
                  <div
                    v-for="kompetensi in listKompetensi"
                    v-bind:key="kompetensi.id"
                  >
                    <div>
                      <input
                        type="checkbox"
                        @change="changeTempKompetensi(kompetensi.idKompetensi)"
                        :checked="
                          tempKompetensi.includes(kompetensi.idKompetensi)
                        "
                      />
                      <label class="ml-2">{{
                        kompetensi.namaKompetensi
                      }}</label>
                    </div>
                  </div>
                </div>

                <div class="container mt-4">
                  <h4 class="text-secondary"><b>Daftar Tindakan</b></h4>
                </div>

                <div class="container mt-3">
                  <!-- KATEGORI TINDAKAN -->
                  <div
                    v-for="kategoriTindakan in listKategoriTindakan"
                    v-bind:key="kategoriTindakan.id"
                  >
                    <div>
                      <input
                        type="checkbox"
                        @change="
                          changeTempTindakan(
                            kategoriTindakan.idKategoriTindakan
                          )
                        "
                        :checked="
                          tempTindakan.includes(
                            kategoriTindakan.idKategoriTindakan
                          )
                        "
                      />
                      <label class="ml-2">{{
                        kategoriTindakan.namaKategoriTindakan
                      }}</label>
                    </div>
                  </div>
                  <!-- TINDAKAN LAIN -->
                  <div>
                    <div
                      v-for="namaTindakan in getTindakanLainChoice"
                      v-bind:key="namaTindakan.id"
                    >
                      <div>
                        <input
                          type="checkbox"
                          @change="changeTempTindakanLain(namaTindakan)"
                          :checked="tempTindakanLain.includes(namaTindakan)"
                        />
                        <label class="ml-2">{{ namaTindakan }}</label>
                      </div>
                    </div>
                  </div>
                  <!-- Button trigger modal-->
                  <button
                    class="btn btn-primary btn-sm mt-2 mb-4"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                  >
                    Tambah Tindakan Lain
                  </button>
                </div>
              </div>
            </div>

            <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
            <div class="row container justify-content-center pt-4">
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
                Apakah anda yakin untuk mengirim laporan pasien?
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Loading...
              </h5>
              <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
                Laporan Pasien Berhasil Dikirimkan!
              </h5>
              <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
                Laporan Pasien Gagal Dikirimkan!
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
                Anda dapat mengubah laporan ini sebelum konsulen memberi
                evaluasi
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Harap tunggu sebentar
              </h5>
              <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
                Konsulen dan reviewer telah diberikan notifikasi
              </h5>
              <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
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
                <router-link
                  :to="'/laporanpasiendetail/' + posts.idLaporanPasien"
                  ><button class="btn btn-primary" data-dismiss="modal">
                    Ok
                  </button></router-link
                >
              </div>
              <div v-if="status == 3">
                <button
                  class="btn btn-primary"
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
        <!-- Modal-->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Tambah Tindakan
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
              <div class="modal-body">
                <label class="medium mb-1">Tambah Tindakan Lain</label>
                <input
                  class="form-control"
                  name="newTindakan"
                  id="newTindakan"
                  type="text"
                  placeholder="Masukkan nama tindakan"
                />
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  class="btn btn-primary"
                  @click="addTindakanLainChoice"
                  data-dismiss="modal"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
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
  name: "EvaluasiLaporanPasien",
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
        konsulen: null,
        status: null,
        feedback: null,
        isDisetujui: null
      },
      tempKompetensi: [],
      tempTindakan: [],
      tempTindakanLain: [],
      showTanggal: false,
      listKonsulen: [],
      listKompetensi: [],
      listKategoriTindakan: [],
      isCreated: false,
      tindakanLainChoice: [],
      subtitleHeader: null,
      status: 0,
      ready: false,
    };
  },
  created() {
    Array.prototype.remove = function () {
      var what,
        a = arguments,
        L = a.length,
        ax;
      while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
        }
      }
      return this;
    };
  },
  computed: {
    getTindakanLainChoice() {
      return this.tindakanLainChoice;
    },
    isReady() {
      return this.ready;
    },
  },
  components: { LightHeader },
  methods: {
    changeShowTanggal() {
      this.showTanggal = !this.showTanggal;
      this.posts.isJaga = !this.posts.isJaga;
    },
    changeIsRefresh() {
      this.isRefresh = false;
    },
    changeTempKompetensi(idKompetensi) {
      if (!this.tempKompetensi.includes(idKompetensi)) {
        this.tempKompetensi.push(idKompetensi);
      } else {
        this.tempKompetensi.remove(idKompetensi);
      }
      console.warn(this.tempKompetensi);
    },
    changeTempTindakan(idKategoriTindakan) {
      if (!this.tempTindakan.includes(idKategoriTindakan)) {
        this.tempTindakan.push(idKategoriTindakan);
      } else {
        this.tempTindakan.remove(idKategoriTindakan);
      }
      console.warn(this.tempTindakan);
    },
    changeTempTindakanLain(namaTindakan) {
      if (!this.tempTindakanLain.includes(namaTindakan)) {
        this.tempTindakanLain.push(namaTindakan);
      } else {
        this.tempTindakanLain.remove(namaTindakan);
      }
      console.warn(this.tempTindakanLain);
    },
    addTindakanLainChoice() {
      console.warn("masukk");
      var namaTindakan = document.getElementById("newTindakan").value;
      console.warn(namaTindakan);
      console.warn(this.getTindakanLainChoice);
      if (!this.tindakanLainChoice.includes(namaTindakan)) {
        this.tindakanLainChoice.push(namaTindakan);
      }
      document.getElementById("newTindakan").value = "";
    },
    refreshSubmitted() {
      this.status = 0;
    },
    postData(e) {
      console.warn("masukk1");
      this.status = 1;
      if(this.posts.status == "DISETUJUI"){
        this.posts.isDisetujui = true;
      }else{
        this.posts.isDisetujui = false;
      }
      this.posts.strKompetensi = this.listToStr(this.tempKompetensi);
      this.posts.strTindakan = this.listToStr(this.tempTindakan);
      this.posts.strTindakanLain = this.listToStr(this.tempTindakanLain);
      console.warn(this.posts);

      var url;
      url = "https://neulogfkui.herokuapp.com/api/laporan-pasien/evaluate";
      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        if (result.data != "0") {
          this.posts.idLaporanPasien = result.data;
          this.status = 2;
        } else {
          this.status = 3;
        }
        console.warn(result.data);
        e.preventDefault();
      });
      e.preventDefault();
    },
    listToStr(list) {
      var i;
      var dummy = "";
      for (i = 0; i < list.length; i++) {
        dummy = dummy + list[i] + ",";
      }
      console.log(dummy);
      return dummy.slice(0, -1);
    },
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
    if (this.$route.params.operation != 0) {
      this.showTanggal = true;
      axios
        .get(
          "https://neulogfkui.herokuapp.com/api/laporan-pasien/" +
            this.$route.params.idLaporanPasien
        )
        .then((resp) => {
          console.log(resp.data);
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
          this.posts.konsulen = resp.data.konsulen;
          this.posts.status = resp.data.status;
          this.tempKompetensi = this.strToListNumber(this.posts.strKompetensi);
          this.tempTindakan = this.strToListNumber(this.posts.strTindakan);
          if (this.posts.strTindakanLain != "") {
            this.tempTindakanLain = this.strToList(this.posts.strTindakanLain);
            this.tindakanLainChoice = [...this.tempTindakanLain];
          }
          this.subtitleHeader =
            resp.data.residen.npm + " - " + resp.data.residen.pengguna.name;
          console.log(this.tempKompetensi);
          console.log(this.tempTindakan);
          console.log(this.tempTindakanLain);
          console.log(this.posts);
        });
    }
    axios
      .get(
        "https://neulogfkui.herokuapp.com/api/laporan-pasien/getformattribute"
      )
      .then((resp) => {
        this.listKonsulen = resp.data.listKonsulen;
        this.listKompetensi = resp.data.listKompetensi;
        this.listKategoriTindakan = resp.data.listKategoriTindakan;
        this.listKategoriTindakan.pop();
        this.isCreated = true;
        this.ready = true;
        console.warn(this.listKompetensi);
      });
  },
};
</script>
