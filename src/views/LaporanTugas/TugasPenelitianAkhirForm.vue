<template>
  <LightHeader
    title="Tugas Penelitian Akhir"
    icon="file-text"
    :subtitle="subtitleHeader"
  />
  <div class="container">
    <form @submit="postData" method="POST">
      <div class="row">
        <!-- CARD 1 -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Data Tugas Penelitian Akhir</b>
            </div>
            <div class="card-body">
              <!-- JUDUL PROPOSAL -->
              <div class="form-group">
                <label class="medium mb-1">Judul Proposal</label>
                <input
                  class="form-control"
                  name="judulProposal"
                  v-model="posts.judulProposal"
                  type="text"
                  placeholder="Masukkan judul proposal"
                  required
                />
              </div>

              <!-- STAGE -->
              <div class="form-group">
                <label for="sel1">Tahap</label>
                <select class="form-control" name="stage" v-model="posts.stage">
                  <option
                    v-for="item in listStage"
                    v-bind:key="item.id"
                    :value="item"
                    required
                  >
                    {{ item }}
                  </option>
                </select>

                <!-- KONSULEN -->
                <div class="form-group">
                  <label for="sel1">Konsulen</label>
                  <select
                    class="form-control"
                    name="konsulen"
                    v-model="posts.idKonsulen"
                    required
                  >
                    <option
                      v-for="item in listKonsulen"
                      v-bind:key="item.id"
                      :value="item.idKonsulen"
                    >
                      {{ item.pengguna.name }}
                    </option>
                  </select>
                </div>

                <!-- TANGGAL -->
                <div class="form-group">
                  <label for="example-date-input">Date</label>
                  <input
                    class="form-control"
                    type="date"
                    name="tanggal"
                    v-model="posts.tanggal"
                    required
                  />
                </div>

                <!-- LINK -->
                <div class="form-group">
                  <label class="medium mb-1">Link</label>
                  <input
                    class="form-control"
                    name="link"
                    v-model="posts.linkTugas"
                    type="text"
                    placeholder="Masukkan link tugas"
                  />
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
        <!-- CARD 2 -->
        <div class="col-xxl-6 col-xl-6 mb-4" v-if="isDataTableReady">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>List Reviewer</b>
            </div>
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
                      <th>Nama Konsulen</th>
                      <th>Pilih</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in listKonsulen" v-bind:key="item.id">
                      <td>
                        {{ item.pengguna.name }}
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          @change="check(item.idKonsulen)"
                          :checked="
                            this.posts.listReviewer.includes(item.idKonsulen)
                          "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- START MODAL -->
      <!-- ------------------------------------------------ -->
      <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
      <div class="row justify-content-center align-self-center">
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
              <h5 v-if="status == 0" class="modal-title" id="exampleModalLabel">
                Apakah anda yakin untuk mengirim laporan tugas?
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Loading...
              </h5>
              <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
                Laporan Tugas Berhasil Dikirimkan!
              </h5>
              <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
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
                  :to="'/detailtugas/tpa/' + posts.idLaporanTugas"
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
      <br />
    </form>
  </div>
</template>






<script>
import axios from "axios";
import VueAxios from "vue-axios";
import LightHeader from "@/components/LightHeader.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "TugasPenelitianAkhirForm",
  data() {
    return {
      posts: {
        idKonsulen: null,
        tanggal: null,
        stage: null,
        judulProposal: null,
        linkTugas: null,
        idResiden: null,
        listReviewer: [],
        idLaporanTugas: null,
        idChild: 0,
      },
      listKonsulen: null,
      listStage: null,
      status: 0,
      target: null,
      ready: false,
      subtitleHeader:
        JSON.parse(localStorage.getItem("userData")).name +
        " - " +
        JSON.parse(localStorage.getItem("userData")).residen.npm,
    };
  },
  components: { LightHeader },

  computed: {
    isDataTableReady() {
      return this.ready;
    },
    getIdResiden() {
      return JSON.parse(localStorage.getItem("userData")).residen.idResiden;
    },
    // isLoggedIn(){
    //   return this.$store.state.auth.status.loggedIn
    // }
  },

  mounted() {
    if (this.$route.params.operation != 0) {
      axios
        .get(
          "https://neulogfkui.herokuapp.com/laporantugas/" + this.$route.params.operation, { headers: authHeader() }
        )
        .then((resp) => {
          console.warn(resp.data);
          this.posts.idKonsulen = resp.data.idKonsulen;
          this.posts.tanggal = resp.data.tugas.tanggalDibuat;
          this.posts.judulProposal =
            resp.data.tugas.tugasPenelitianAkhirModel.judulProposal;
          this.posts.stage = resp.data.tugas.tugasPenelitianAkhirModel.stage;
          this.posts.linkTugas = resp.data.tugas.linkTugas;
          this.posts.listReviewer = resp.data.listReviewer;
          this.posts.idLaporanTugas = resp.data.tugas.idLaporanTugas;
          this.posts.idChild =
            resp.data.tugas.tugasPenelitianAkhirModel.idTugasPenelitianAkhir;
          console.log(this.posts);
        });
      this.isMounted = true;
    }
    axios
      .get("https://neulogfkui.herokuapp.com/TugasPenelitianAkhirFormAttribute")
      .then((resp) => {
        console.warn(resp.data);
        this.listKonsulen = resp.data.listKonsulen;
        this.listStage = resp.data.listStage;
        dataTableLoader();
        this.ready = true;
      });
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
  methods: {
    postData(e) {
      this.posts.idResiden = this.getIdResiden;
      this.status = 1;
      console.warn(this.posts);

      var url = "";
      if (this.$route.params.operation == 0) {
        url = "https://neulogfkui.herokuapp.com/laporantugas/addtugaspenelitianakhir/";
      } else {
        url = "https://neulogfkui.herokuapp.com/laporantugas/updatetugaspenelitianakhir/";
      }

      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        if (result.data != "0") {
          this.posts.idLaporanTugas = result.data;
          this.status = 2;
        } else {
          this.status = 3;
        }
        console.warn(result);
      });
      e.preventDefault();
    },
    check(item) {
      if (this.posts.listReviewer.includes(item)) {
        this.posts.listReviewer.remove(item);
      } else {
        this.posts.listReviewer.push(item);
      }
      console.log(this.posts.listReviewer);
    },
    refreshSubmitted() {
      this.status = 0;
    },
  },
};
</script>