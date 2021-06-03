<template>
  <LightHeader
    :title="headertitle"
    :subtitle="subtitleHeader"
    icon="user"
  ></LightHeader>
  <form @submit="postData">
    <div class="container" v-if="getReady">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Data Laporan Pasien</b>
            </div>
            <div class="card-body">
              <div class="row container">
                <!-- MODUL -->
                <div class="form-group col-md-4">
                  <label>Modul</label>
                  <select
                    class="form-control"
                    name="modul"
                    v-model="posts.idModul"
                    required
                  >
                    <option
                      v-for="item in listModul"
                      v-bind:key="item.id"
                      :value="item.idModul"
                    >
                      {{ item.namaModul }}
                    </option>
                  </select>
                </div>
                <!-- END OF MODUL -->
                <!-- TANGGAL MULAI -->
                <div class="form-group col-md-4">
                  <label class="medium mb-1">Tanggal Mulai</label>
                  <input
                    class="form-control"
                    name="tanggalMulai"
                    v-model="posts.tanggalMulai"
                    type="date"
                    required
                  />
                </div>
                <!-- END OF TANGGAL MULAI -->
                <!-- TANGGAL SELESAI -->
                <div class="form-group col-md-4">
                  <label class="medium mb-1">Tanggal Selesai</label>
                  <input
                    class="form-control"
                    name="tanggalSelesai"
                    v-model="posts.tanggalSelesai"
                    type="date"
                    required
                  />
                </div>
                <!-- END OF NO TANGGAL SELESAI -->
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
                Apakah anda yakin untuk mengirim laporan kelulusan modul?
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Loading...
              </h5>
              <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
                Laporan Kelulusan Modul Berhasil Dikirimkan!
              </h5>
              <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
                Laporan Kelulusan Modul Gagal Dikirimkan!
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
                Anda dapat mengubah laporan ini sebelum ketua modul memberi
                evaluasi
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Harap tunggu sebentar
              </h5>
              <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
                Laporan kelulusan modul berhasil ditambahkan pada sistem
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
                  :to="'/modulresidendetail/' + posts.idModulResiden"
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
      <!-- BATAS MODAL -->
      <!-- Modal-->
    </div>
  </form>
</template>

<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";

export default {
  name: "ModulResidenForm",
  components: {
    LightHeader,
  },
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
      listModul: [],
      subtitleHeader:
        JSON.parse(localStorage.getItem("userData")).name +
        " - " +
        JSON.parse(localStorage.getItem("userData")).residen.npm,
      status: 0,
      ready: false,
      headertitle: null,
    };
  },
  components: { LightHeader },
  computed: {
    getReady() {
      return this.ready;
    },
    getIdResiden() {
      return JSON.parse(localStorage.getItem("userData")).residen.idResiden;
    },
    getListReviewer() {
      return this.posts.listReviewer;
    },
    isLoggedIn(){
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    this.headertitle = "Tambah Laporan Kelulusan Modul";
    if (this.$route.params.operation != 0) {
        this.headertitle = "Ubah Laporan Kelulusan Modul"
      axios
        .get(
          "https://neulogfkui.herokuapp.com/modulResiden/" + this.$route.params.operation
        )
        .then((resp) => {
          console.warn(resp.data);
          this.posts.idModulResiden = resp.data.idModulResiden;
          this.posts.tanggalMulai = resp.data.tanggalMulai;
          this.posts.tanggalSelesai = resp.data.tanggalSelesai;
          this.posts.durasi = resp.data.durasi;
          this.posts.status = resp.data.status;
          this.posts.updateStatus = resp.data.updateStatus;
          this.posts.feedback = resp.data.feedback;
          this.posts.idModul = resp.data.modul.idModul;
          this.posts.idResiden = resp.data.residen.idResiden;
          console.log(this.posts);
        });
    }
    axios.get("https://neulogfkui.herokuapp.com/api/modul/all").then((resp) => {
      console.warn(resp.data);
      this.listModul = resp.data;
      this.ready = true;
    });
  },
  methods: {
    postData(e) {
      this.posts.idResiden = this.getIdResiden;
      this.status = 1;
      console.warn(this.posts);

      var url = "";
      if (this.$route.params.operation == 0) {
        url = "https://neulogfkui.herokuapp.com/modulResiden/create/";
      } else {
        url = "https://neulogfkui.herokuapp.com/modulResiden/update/";
      }

      axios.post(url, this.posts,{ headers: authHeader() }).then((result) => {
        if (result.data != null) {
          this.posts.idModulResiden = result.data.idModulResiden;
          this.status = 2;
        } else {
          this.status = 3;
        }
        console.warn(result);
      });
      e.preventDefault();
    },
    refreshSubmitted() {
      this.status = 0;
    },
  },
};
</script>


