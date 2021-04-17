<template>
  <p>FORUMULIR</p>
  <form @submit="postData" method="POST">
    <div class="row container">
        <!-- CARD 1 -->
      <div class="col-xxl-6 col-xl-6 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Tugas Publikasi</b>
          </div>
          <div class="card-body">
            <!-- EVENT PUBLIKASI -->
            <div class="form-group">
              <label class="medium mb-1">Event Publikasi</label>
              <input
                class="form-control"
                name="eventPublikasi"
                v-model="posts.eventPublikasi"
                type="text"
                placeholder="Masukkan event publikasi"
              />
            </div>

            <!-- JUDUL PUBLIKASI -->
            <div class="form-group">
              <label class="medium mb-1">Judul Publikasi</label>
              <input
                class="form-control"
                name="judulPublikasi"
                v-model="posts.judulPublikasi"
                type="text"
                placeholder="Masukkan judul publikasi"
              />
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
                  :value="item.idKonsulen"
                >
                  {{ item.penggunaModel.firstName + " " + item.penggunaModel.lastName}}
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
              data-target="#exampleModal"
            >
              Simpan
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
        <!-- CARD 2 -->
      <div class="col-xxl-6 col-xl-6 mb-4">
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
  name: "TugasPublikasiForm",
  data() {
    return {
      posts: {
        idKonsulen: null,
        tanggal: null,
        eventPublikasi: null,
        judulPublikasi: null,
        linkTugas: null,
        idResiden: 1,
        listReviewer: null,
      },
      listKonsulen: null,
      success: false,
      submitted: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/TugasPublikasiFormAttribute")
      .then((resp) => {
        console.warn(resp.data);
        this.listKonsulen = resp.data.listKonsulen;
      });
  },
  methods: {
    postData(e) {
      console.warn(this.posts);
      axios
        .post(
          "http://localhost:8000/laporantugas/addtugaspublikasi/",
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