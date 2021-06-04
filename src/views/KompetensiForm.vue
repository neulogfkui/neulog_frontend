<template>
  <LightHeader
    title="Tambah Kompetensi"
    :subtitle="subtitleHeader"
    icon="user"
  ></LightHeader>
  <form @submit="postData">
    <div class="container" v-if="getReady">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Data Kompetensi</b>
            </div>
            <div class="card-body">
                <div class="row container">
                <!-- NAMA KOMPETENSI -->
                <div class="form-group col-md-4">
                  <label class="medium mb-1">Nama Kompetensi</label>
                  <input
                    class="form-control"
                    name="namaKompetensi"
                    v-model="posts.namaKompetensi"
                    type="text"
                    placeholder="Masukkan nama kompetensi"
                    required
                  />
                </div>
                <!-- END OF NAMA KOMPETENSI -->
                <!--  KOMPETENSI LANJUT -->
                <div class="form-group col-md-4">
                  <br />
                  <div class="row ml-1 justify-content-center">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkbox-1"
                        @change="changeKompetensiLanjut"
                        :checked="this.posts.isKompetensiLanjut"
                      />
                      <label class="custom-control-label" for="checkbox-1"
                        >Kompetensi Lanjut</label
                      >
                    </div>
                  </div>
                </div>
                <!-- END OF KOMPETENSI LANJUT -->
                <!-- JUMLAH MINIMAL -->
                <div class="form-group col-md-4">
                  <label class="medium mb-1">Target Pencapaian</label>
                  <input
                    class="form-control"
                    name="namaKompetensi"
                    v-model="posts.jumlahMinimal"
                    type="text"
                    placeholder="Masukkan target pencapaian"
                    required
                  />
                </div>
                <!-- END OF JUMLAH MINIMAL -->
              </div>
              <div class="row container">
                <!-- DESKRIPSI -->
                <div class="form-group col-md-12">
                  <label class="medium mb-1">Deskripsi</label>
                  <textarea
                    class="form-control input-lg"
                    name="deskripsi"
                    v-model="posts.deskripsi"
                    type="text"
                    placeholder="Masukkan deskripsi"
                    required
                  />
                </div>
                <!-- END OF DESKRIPSI -->
              </div>
              <br />
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
          Simpan
        </button>
        <router-link to="/dashboardpengurusakademik/kompetensi">
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
              <h5 v-if="status == 0 && param == 0" class="modal-title" id="exampleModalLabel">
                Apakah anda yakin untuk menambahkan kompetensi?
              </h5>
              <h5 v-if="status == 0 && param != 0" class="modal-title" id="exampleModalLabel">
                Apakah anda yakin untuk mengubah kompetensi?
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Loading...
              </h5>
              <h5 v-if="status == 2 && param == 0" class="modal-title" id="exampleModalLabel">
                Kompetensi Berhasil Ditambahkan!
              </h5>
              <h5 v-if="status == 2 && param != 0" class="modal-title" id="exampleModalLabel">
                Kompetensi Berhasil Diubah!
              </h5>
              <h5 v-if="status == 3 && param == 0" class="modal-title" id="exampleModalLabel">
                Kompetensi Gagal Ditambahkan!
              </h5>
              <h5 v-if="status == 3 && param != 0" class="modal-title" id="exampleModalLabel">
                Kompetensi Gagal Diubah!
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
              <h5 v-if="status == 0 && param == 0" class="modal-title" id="exampleModalLabel">
                Apabila Anda mimilih “Ya”, Anda tidak dapat menghapus kompetensi yang telah Anda buat.
              </h5>
              <h5 v-if="status == 0 && param != 0" class="modal-title" id="exampleModalLabel">
                Apabila Anda mimilih “Ya”, seluruh perhitungan pencapaian residen atas kompetensi akan berubah.
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Harap Tunggu Sebentar
              </h5>
              <h5 v-if="status == 2 && param == 0" class="modal-title" id="exampleModalLabel">
                Kompetensi berhasil ditambahkan ke sistem Neulog!
              </h5>
              <h5 v-if="status == 2 && param != 0" class="modal-title" id="exampleModalLabel">
                Detail dari kompetensi berhasil diubah. Tekan “Ok” untuk kembali
              </h5>
              <h5 v-if="status == 3 " class="modal-title" id="exampleModalLabel">
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
                  :to="'/dashboardpengurusakademik/kompetensi/' + posts.idKompetensi"
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
      
    </div>
  </form>
</template>

<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";
import loadScript from '@/js/scripts.js';

export default {
  name: "KompetensiForm",
  components: {
    LightHeader,
  },
  data() {
    return {
      posts: {
        idKompetensi: null,
        namaKompetensi: null,
        deskripsi: null,
        jumlahMinimal: null,
        isKompetensiLanjut: false,
      },
      param: null,
      isCreated: false,
      subtitleHeader:
        JSON.parse(localStorage.getItem("userData")).name,
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
    getReady() {
      return this.ready;
    },
  },
  methods: {
    changeKompetensiLanjut() {
        this.posts.isKompetensiLanjut = !this.posts.isKompetensiLanjut;
    },
    changeIsRefresh() {
      this.isRefresh = false;
    },
    refreshSubmitted() {
      this.status = 0;
    },
    postData(e) {
      this.status = 1;
      // console.warn(this.posts);
      
      var url;
      if (this.$route.params.operation != 0) {
        url = "https://neulogfkui.herokuapp.com/api/kompetensi/update";
      } else {
        url = "https://neulogfkui.herokuapp.com/api/kompetensi/create";
      }
      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        if (result.data != "0") {
          this.posts.idKompetensi = result.data;
          this.status = 2;
        } else {
          this.status = 3;
        }
        // console.warn(result.data);
      });
      e.preventDefault();
    },
  },
  mounted() {
    this.param = this.$route.params.operation;
    if (this.$route.params.operation != 0) {
      axios
        .get(
          "https://neulogfkui.herokuapp.com/api/kompetensi/" +
            this.$route.params.operation, { headers: authHeader() }
        )
        .then((resp) => {
          // console.log(resp.data);
          this.posts.idKompetensi = resp.data.idKompetensi;
          this.posts.namaKompetensi = resp.data.namaKompetensi;
          this.posts.deskripsi = resp.data.deskripsi;
          this.posts.jumlahMinimal = resp.data.jumlahMinimal;
          this.posts.isKompetensiLanjut = resp.data.kompetensiLanjut;
        });
        // console.log(this.posts);
    }
    axios
      .get("https://neulogfkui.herokuapp.com/api/kompetensi/getformattribute", { headers: authHeader() })
      .then((resp) => {
        this.isCreated = true;
        this.ready = true;
    });
    loadScript();
  },
};
</script>


