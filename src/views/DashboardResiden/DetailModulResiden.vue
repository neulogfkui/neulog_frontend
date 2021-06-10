<template>
  <LightHeader
    v-if="isDataTableReady"
    title="Detail Modul"
    icon="briefcase"
    :subtitle="this.subtitle"
  >
  </LightHeader>
  <div class="container upper" v-if="isDataTableReady">
    <div class="row" v-if="isDataTableReady">
      <div class="col-xxl-8 col-xl-8 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Detail Modul</b>
          </div>
          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Nama Modul</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ data.modul.namaModul }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Ketua Modul</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ data.modul.ketuaModul.pengguna.name }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Residen</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ residen.pengguna.name }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Tanggal Mulai</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ data.tanggalMulai }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Tanggal Selesai</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ data.tanggalSelesai }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Durasi</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">
                    <b>{{ data.durasi }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <p class="card-text">Status</p>
                </div>
                <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                  <div class="badge badge-primary badge-pill">
                    {{ data.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Feedback</b>
          </div>
          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                  <p class="card-text">
                    {{ data.feedback }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row ml-1">
      <div class="col-xxl-12 col-xl-12 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Tugas Presentasi</div>
          <div class="card-body">
            <div class="datatable" v-if="isDataTableReady">
              <table
                class="table table-bordered table-hover"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Dibuat</th>
                    <th>Jenis</th>
                    <th>Judul Makalah</th>
                    <th>Konsulen</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in residen.listLaporanTugas"
                    v-bind:key="item.id"
                  >
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ index + 1 }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ item.tanggalDibuat }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ item.tugasPresentasiModel.jenis }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ item.tugasPresentasiModel.judulMakalah }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ item.konsulenModel.pengguna.name }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      {{ item.status }}
                    </td>
                    <td v-if="checkItem(item.tugasPresentasiModel)">
                      <router-link
                        :to="'/laporanpasiendetail/' + item.idLaporanPasien"
                      >
                        <button class="btn btn-secondary">Lihat</button>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
import dataTableLoader from "@/js/datatable";

export default {
  name: "DetailModulResiden",
  components: { LightHeader },
  data() {
    return {
      data: null,
      residen: null,
      subtitle: null,
      ready: false,
    };
  },
  computed: {
    isDataTableReady() {
      return this.ready;
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/api/dashboardResiden/modulDetail/" +
          this.$route.params.idModulResiden
      )
      .then((resp) => {
        console.log(resp.data);
        this.data = resp.data;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;

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
    getCount() {
      this.count = this.count + 1;
      return this.count;
    },
  },
};
</script>