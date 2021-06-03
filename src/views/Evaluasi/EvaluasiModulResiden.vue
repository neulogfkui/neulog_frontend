<template>
  <LightHeader :title="headertitle" icon="file-text" v-if="isReady" />
  <div class="container" v-if="isReady">
    <form @submit="postData">
      <div class="row">
        <!-- CARD KIRI -->
        <div class="col-xxl-6 col-xl-6 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Formulir Kelulusan</b>
            </div>
            <div class="card-body">
              <div class="container mt-4">
                <div class="col container">
                  <p class="text-primary">{{ residen.pengguna.name }}</p>
                  <p>
                    {{ residen.npm }} <br />
                    {{ residen.tahunMasuk }} / Term {{ residen.term }}
                  </p>
                </div>
                <div class="container mt-4 pt-4">
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

                <div class="col container mt-4 pt-4">
                  <label class="text-primary">Feedback Konsulen</label>
                  <br />
                  <textarea
                    class="form-control form-control-lg h-10"
                    placeholder="Masukan Feedback"
                    v-model="posts.feedback"
                  />
                  <br />
                </div>
              </div>
              <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
              <div
                class="row container justify-content-center align-self-center mt-4 mb-4"
              >
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
                <h5
                  v-if="status == 0"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Apakah anda yakin untuk menyetujui kelulusan?
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
                  Berhasil mengubah status kelulusan
                </h5>
                <h5
                  v-if="status == 3"
                  class="modal-title"
                  id="exampleModalLabel"
                >
                  Gagal mengubah status kelulusan
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
                  Anda tidak dapat mengubah status kelulusan kembali setelah residen diluluskan
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
  name: "EvaluasiModulResiden",
  data() {
    return {
      posts: {
        idModulResiden: null,
        tanggalMulai: null,
        tanggalSelesai: null,
        durasi: null,
        status: null,
        updateStatus: null,
        feedback: null,
        idModul: null,
        idResiden: null,
      },
      headertitle: null,
      residen: null,
      ready: false,
      status: 0,
    };
  },
  components: { LightHeader },
  mounted() {
    this.posts.idModulResiden = this.$route.params.idModulResiden;
    axios
      .get(
        "http://neulogfkui.herokuapp.com/modulResiden/" +
          this.$route.params.idModulResiden
      )
      .then((resp) => {
        console.log(resp);
        this.posts.idModulResiden = resp.data.idModulResiden;
        this.posts.tanggalMulai = resp.data.tanggalMulai;
        this.posts.tanggalSelesai = resp.data.tanggalSelesai;
        this.posts.durasi = resp.data.durasi;
        this.posts.status = resp.data.status;
        this.posts.updateStatus = resp.data.updateStatus;
        this.posts.feedback = resp.data.feedback;
        this.posts.idModul = resp.data.modul.idModul;
        this.posts.idResiden = resp.data.residen.idResiden;
        this.residen = resp.data.residen;
        this.headertitle = "Formulir Kelulusan " + resp.data.modul.namaModul;
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

      var url =
        "http://neulogfkui.herokuapp.com/api/dashboardKetuaModul/kelulusan";

      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        if (result.data != null) {
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
