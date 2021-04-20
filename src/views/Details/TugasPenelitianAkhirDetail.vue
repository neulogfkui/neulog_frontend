<template>
<MainHeader/>
     <!-- START MODAL -->
      <!-- ------------------------------------------------ -->
      <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
      <div class="row justify-content-center align-self-center">

      <button
        id="completeButton"
        class="btn btn-danger mr-4"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Hapus
      </button>
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
                Laporan tugas akan dihapus dari sistem Neulog. Anda tidak dapat mengakses laporan tugas ini kembali
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
                <button class="btn btn-primary mr-4" @click="deleteLaporanTugas">Ya</button>

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
                
                <router-link :to="'/tugaspublikasidetail/' + posts.idLaporanTugas"><button class="btn btn-primary" data-dismiss="modal">Ok </button></router-link>
         
              </div>
              <div v-if="status == 3">
                <button
                  class="btn btn-primary"
                  id = "buttonFailed"
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
import MainHeader from "@/components/MainHeader.vue";

export default {
    name: "TugasPenelitianAkhirDetail",
    components: {MainHeader},
    data() {
    return {
        delete: {idLaporanTugas: this.$route.params.idLaporanTugas},
        status: 0,
    };
  },
    methods:{
        deleteLaporanTugas(e) {
            this.status = 1;
            console.warn(this.posts);
            axios
                .delete(
                "http://localhost:8000/laporantugas/deletetugaspublikasi",
                this.delete
                )
                .then((result) => {
                if (result.data != "Success") {
                    this.status = 2;
                } else {
                    this.status = 3;
                }
                console.warn(result.data);
                });
            e.preventDefault();
            },
    }
}
</script>