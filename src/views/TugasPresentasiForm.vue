<template>
  <p>Formmmmmm</p>
  <form @submit="postData" method="POST">
    <div class="row container">
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Tugas Presentasi</b>
          </div>
          <div class="card-body">
            <!-- MODUL -->
            <div class="form-group">
              <label for="sel1">Modul</label>
              <select class="form-control" name="modul" v-model="posts.idModul">
                <option
                  v-for="item in listModul"
                  v-bind:key="item.id"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <!-- JENIS TUGAS -->
            <div class="form-group">
              <label for="sel1">Jenis Tugas</label>
              <select
                class="form-control"
                name="jenisTugas"
                v-model="posts.jenis"
              >
                <option
                  v-for="item in listJenisTugas"
                  v-bind:key="item.id"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <!-- KONSULEN -->
            <div class="form-group">
              <label for="sel1">Konsulen</label>
              <select
                class="form-control"
                name="konsulen"
                v-model="posts.idKonsulen"
              >
                <option
                  v-for="item in listKonsulen"
                  v-bind:key="item.id"
                  :value="item"
                >
                  {{ item }}
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
              />
            </div>
            <!-- JUDUL -->
            <div class="form-group">
              <label class="medium mb-1">Judul</label>
              <input
                class="form-control"
                name="judul"
                v-model="posts.judulMakalah"
                type="text"
                placeholder="Masukkan judul presentasi"
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
                placeholder="Masukkan judul presentasi"
              />
            </div>
            <!-- <multiselect
      v-model="posts.listReviewer"
      :options="listKonsulen">
    </multiselect> -->
            <button
              id="completeButton"
              class="btn btn-primary"
              type="button"
              data-toggle="modal"
              :data-target="modalName"
            >
              tes
            </button>
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
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ submitted ? "After" : "Before" }}
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
                    {{ submitted ? "After" : "Before" }}
                  </div>
                  <div class="modal-footer" v-if="submitted == false">
                    <button
                      class="btn btn-secondary"
                      type="button"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>

                  <div class="modal-footer" v-if="submitted == true">
                    <button
                      class="btn btn-warning"
                      type="button"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-info" type="button" data-dismiss="modal">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>{{ title }}</b>
          </div>
          <div class="card-body">
            <div
              class="timeline timeline-xs"
              v-for="(item, index) in updateStatus"
              v-bind:key="item.id"
            >
              <!-- Timeline Item -->
              <div class="timeline-item" v-if="index % 2 == 0">
                <p>{{ item }}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>
                  <b>{{ updateStatus[index + 1] }}</b>
                </p>
              </div>
              <!-- Timeline Item -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <!-- <button class="btn btn-primary" type="submit">Submit</button> -->
  </form>

</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  name: "TugasPresentasiForm",
  data() {
    return {
      posts: {
        idModul: null,
        jenis: null,
        idKonsulen: null,
        tanggal: null,
        judulMakalah: null,
        linkTugas: null,
        idResiden: 1,
        listReviewer: null,
      },
      listModul: null,
      listJenisTugas: null,
      listKonsulen: null,
      showConfirmation: false,
      modalName: "#exampleModal",
      success: false,
      submitted: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/LaporanPresentasiFormAttribute")
      .then((resp) => {
        console.warn(resp.data);
        this.listModul = resp.data.listModul;
        this.listJenisTugas = resp.data.listJenisTugas;
        this.listKonsulen = resp.data.listKonsulen;
      });
  },
  methods: {
    postData(e) {
      console.warn(this.posts);
      axios
        .post(
          "http://localhost:8000/laporantugas/addtugaspresentasi/",
          this.posts
        )
        .then((result) => {
          if (result == "Success") {
            this.success = true;
          }
          this.submitted = true;
          console.warn(result);
        });
      e.preventDefault();
    },
  },
};
</script>

