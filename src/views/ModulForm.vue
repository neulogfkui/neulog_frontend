<template>
  <LightHeader
    title="Tambah Modul"
    :subtitle="subtitleHeader"
    icon="user"
  ></LightHeader>
  <form @submit="postData">
    <div class="container" v-if="getReady">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4">
          <div class="card card-header-actions h-100">
            <div class="card-header">
              <b>Data Modul</b>
            </div>
            <div class="card-body">
                <div class="row container">
                <!-- NAMA MODUL -->
                <div class="form-group col-md-6">
                  <label class="medium mb-1">Nama Modul</label>
                  <input
                    class="form-control"
                    name="namaModul"
                    v-model="posts.namaModul"
                    type="text"
                    placeholder="Masukkan nama modul"
                    required
                  />
                </div>
                <!-- END OF NAMA MODUL -->
                <!--  KETUA MODUL -->
                <div class="form-group col-md-6">
                  <label>Ketua Modul</label>
                  <div v-if="param == 0">
                    <div v-if="listKetuaModulNoModul.length != 0">
                        <select
                            class="form-control"
                            name="ketuaModulModel"
                            v-model="posts.idKetuaModul"
                            required
                        >
                            <option
                            v-for="item in listKetuaModulNoModul"
                            v-bind:key="item.id"
                            :value="item.idKetuaModul"
                            >
                            {{ item.pengguna.name }}
                            </option>
                        </select>
                    </div>
                    <div v-if="listKetuaModulNoModul.length == 0">
                        <p>Belum Ada Ketua Modul yang Tersedia. Silahkan Tambah Ketua Modul Terlebih Dahulu</p>
                    </div>
                  </div>
                  <div v-if="param != 0">
                      <select
                            class="form-control"
                            name="ketuaModulModel"
                            v-model="posts.idKetuaModul"
                            required
                        >
                            <option
                            v-for="item in listKetuaModul"
                            v-bind:key="item.id"
                            :value="item.idKetuaModul"
                            >
                            {{ item.pengguna.name }}
                            </option>
                        </select>
                  </div>
                </div>
                <!-- END OF KETUA MODUL -->
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
        <router-link to="/dashboardpengurusakademik/modul">
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
                Apakah anda yakin untuk menambahkan modul?
              </h5>
              <h5 v-if="status == 0 && param != 0" class="modal-title" id="exampleModalLabel">
                Apakah anda yakin untuk mengubah modul?
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Loading...
              </h5>
              <h5 v-if="status == 2 && param == 0" class="modal-title" id="exampleModalLabel">
                Modul Berhasil Ditambahkan!
              </h5>
              <h5 v-if="status == 2 && param != 0" class="modal-title" id="exampleModalLabel">
                Modul Berhasil Diubah!
              </h5>
              <h5 v-if="status == 3 && param == 0" class="modal-title" id="exampleModalLabel">
                Modul Gagal Ditambahkan!
              </h5>
              <h5 v-if="status == 3 && param != 0" class="modal-title" id="exampleModalLabel">
                Modul Gagal Diubah!
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
                Apabila Anda mimilih “Ya”, Anda tidak dapat menghapus modul yang telah Anda buat.
              </h5>
              <h5 v-if="status == 0 && param != 0" class="modal-title" id="exampleModalLabel">
                Apabila Anda mimilih “Ya”, seluruh perhitungan pencapaian residen atas modul akan berubah.
              </h5>
              <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
                Harap Tunggu Sebentar
              </h5>
              <h5 v-if="status == 2 && param == 0" class="modal-title" id="exampleModalLabel">
                Modul berhasil ditambahkan ke sistem Neulog!
              </h5>
              <h5 v-if="status == 2 && param != 0" class="modal-title" id="exampleModalLabel">
                Detail dari modul berhasil diubah. Tekan “Ok” untuk kembali
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
                  :to="'/dashboardpengurusakademik/modul/' + posts.idModul"
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
  name: "ModulForm",
  components: {
    LightHeader,
  },
  data() {
    return {
      posts: {
        idModul: null,
        namaModul: null,
        deskripsi: null,
        idKetuaModul: null,
      },
      listKetuaModulNoModul: [],
      listKetuaModul: [],
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
    changeIsRefresh() {
      this.isRefresh = false;
    },
    refreshSubmitted() {
      this.status = 0;
    },
    postData(e) {
      this.status = 1;
      
      var url;
      if (this.$route.params.operation != 0) {
        url = "http://localhost:8000/api/modul/update";
      } else {
        url = "http://localhost:8000/api/modul/create";
      }
      axios.post(url, this.posts, { headers: authHeader() }).then((result) => {
        // console.log(this.posts);
        if (result.data != "0") {
          this.posts.idModul = result.data;
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
          "http://localhost:8000/api/modul/" +
            this.$route.params.operation, { headers: authHeader() }
        )
        .then((resp) => {
          // console.log(resp.data);
          this.posts.idModul = resp.data.idModul;
          this.posts.namaModul = resp.data.namaModul;
          this.posts.deskripsi = resp.data.deskripsi;
          if(resp.data.ketuaModul != null){
            this.posts.idKetuaModul = resp.data.ketuaModul.idKetuaModul;
          }
          else{
            this.posts.idKetuaModul = 0;
          }
      });
      // console.log(this.posts);
    }
    axios
      .get("http://localhost:8000/api/modul/getformattribute", { headers: authHeader() })
      .then((resp) => {
        this.listKetuaModulNoModul = resp.data.listKetuaModulNoModul;
        this.listKetuaModul = resp.data.listKetuaModul;
        this.isCreated = true;
        this.ready = true;
      });
      loadScript();
  },
};
</script>


